import { ClassesPageNames } from '../../constants';
import { LearnerClassroomResource } from '../../apiResources';
import { createTranslator } from 'kolibri.utils.i18n';

const translator = createTranslator('classesPageTitles', {
  allClasses: 'All classes',
  classAssignments: 'Class assignments',
});

function preparePage(store, params) {
  const { pageName, title } = params;
  store.dispatch('SET_PAGE_NAME', pageName);
  store.dispatch('CORE_SET_TITLE', title);
  store.dispatch('CORE_SET_PAGE_LOADING', true);
}

// Shows a list of all the Classrooms a Learner is enrolled in
export function showAllClassesPage(store) {
  preparePage(store, {
    pageName: ClassesPageNames.ALL_CLASSES,
    title: translator.$tr('allClasses'),
  });
  return LearnerClassroomResource.getCollection({ no_assignments: true })
    .fetch()
    .then(classrooms => {
      store.dispatch('SET_PAGE_STATE', {
        classrooms: [...classrooms],
      });
      store.dispatch('CORE_SET_PAGE_LOADING', false);
    });
}

// For a given Classroom, shows a list of all Exams and Lessons assigned to the Learner
export function showClassAssignmentsPage(store, classId) {
  preparePage(store, {
    pageName: ClassesPageNames.CLASS_ASSIGNMENTS,
    title: translator.$tr('classAssignments'),
  });
  // Force fetch, so it doesn't re-use the assignments-less version in the cache
  return LearnerClassroomResource.getModel(classId)
    .fetch({}, true)
    ._promise.then(classroom => {
      store.dispatch('SET_PAGE_STATE', {
        currentClassroom: { ...classroom },
      });
      store.dispatch('CORE_SET_PAGE_LOADING', false);
    })
    .catch(error => {
      // TODO Handle 404
      console.log(error); // eslint-disable-line
    });
}
