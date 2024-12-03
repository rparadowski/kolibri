export const PageNames = {
  /** Class Summary */
  HOME_PAGE: 'HomePage', // make sure this matches the Coach 'Home' page name
  EXAM_CREATION_ROOT: 'EXAM_CREATION_ROOT',

  /** Exams and quizzes */
  EXAMS_ROOT: 'EXAMS_ROOT',
  EXAM_SUMMARY: 'EXAM_SUMMARY',
  QUIZ_PREVIEW: 'QUIZ_PREVIEW',
  QUIZ_LEARNER_PAGE_ROOT: 'QUIZ_LEARNER_PAGE_ROOT',
  QUIZ_LEARNER_REPORT: 'QUIZ_LEARNER_REPORT',
  QUIZ_SECTION_EDITOR: 'QUIZ_SECTION_EDITOR',
  QUIZ_REPLACE_QUESTIONS: 'QUIZ_REPLACE_QUESTIONS',
  QUIZ_SELECT_RESOURCES: 'QUIZ_SELECT_RESOURCES',
  QUIZ_SELECT_PRACTICE_QUIZ: 'QUIZ_SELECT_PRACTICE_QUIZ',
  QUIZ_SECTION_ORDER: 'QUIZ_SECTION_ORDER',
  QUIZ_QUESTION_PAGE_ROOT: 'QUIZ_QUESTION_PAGE_ROOT',
  QUIZ_QUESTION_REPORT: 'QUIZ_QUESTION_REPORT',
  QUIZ_BOOK_MARKED_RESOURCES: 'QUIZ_BOOK_MARKED_RESOURCES',

  /* Lessons */
  LESSONS_ROOT: 'LESSONS_ROOT',
  LESSONS_ROOT_BETTER: 'LESSONS_ROOT_BETTER',
  LESSON_SUMMARY: 'LESSON_SUMMARY',
  LESSON_SUMMARY_BETTER: 'LESSON_SUMMARY_BETTER',
  LESSON_CREATION_ROOT: 'LESSON_CREATION_ROOT',
  RESOURCE_CONTENT_PREVIEW: 'RESOURCE_CONTENT_PREVIEW', // exclusively a route name
  LESSON_RESOURCE_SELECTION_ROOT: 'LESSON_RESOURCE_SELECTION_ROOT',
  LESSON_RESOURCE_SELECTION: 'LESSON_RESOURCE_SELECTION',
  LESSON_RESOURCE_SELECTION_SEARCH: 'LESSON_RESOURCE_SELECTION_SEARCH',
  LESSON_RESOURCE_SELECTION_CONTENT_PREVIEW: 'LESSON_RESOURCE_SELECTION_CONTENT_PREVIEW', // exclusively a route name
  LESSON_CONTENT_PREVIEW: 'LESSON_CONTENT_PREVIEW',
  LESSON_SELECTION_BOOKMARKS: 'LESSON_SELECTION_BOOKMARKS',
  LESSON_SELECTION_BOOKMARKS_MAIN: 'LESSON_SELECTION_BOOKMARKS_MAIN',
  LESSON_EDIT_DETAILS: 'LESSON_EDIT_DETAILS',
  LESSON_EDIT_DETAILS_BETTER: 'LESSON_EDIT_DETAILS_BETTER',
  LESSON_SELECT_RESOURCES: 'LESSON_SELECT_RESOURCES',
  LESSON_PREVIEW_SELECTED_RESOURCES: 'LESSON_PREVIEW_SELECTED_RESOURCES',
  LESSON_PREVIEW_RESOURCE: 'LESSON_PREVIEW_RESOURCE',
  LESSON_LEARNER_REPORT: 'LESSON_LEARNER_REPORT',
  LESSON_RESOURCE_LEARNERS_REPORT: 'LESSON_RESOURCE_LEARNERS_REPORT',
  LESSON_EXERCISE_LEARNER_PAGE_ROOT: 'LESSON_EXERCISE_LEARNER_PAGE_ROOT',
  LESSON_EXERCISE_LEARNERS_REPORT: 'LESSON_EXERCISE_LEARNERS_REPORT',
  LESSON_EXERCISE_LEARNER_REPORT: 'LESSON_EXERCISE_LEARNER_REPORT',
  LESSON_EXERCISE_QUESTIONS_REPORT: 'LESSON_EXERCISE_QUESTIONS_REPORT',
  LESSON_EXERCISE_QUESTION_PAGE_ROOT: 'LESSON_EXERCISE_QUESTION_PAGE_ROOT',
  LESSON_EXERCISE_QUESTION_REPORT: 'LESSON_EXERCISE_QUESTION_REPORT',
  LESSON_LEARNER_EXERCISE_PAGE_ROOT: 'LESSON_LEARNER_EXERCISE_PAGE_ROOT',
  LESSON_LEARNER_EXERCISE_REPORT: 'LESSON_LEARNER_EXERCISE_REPORT',

  /* Learners */
  LEARNERS_ROOT: 'LEARNERS_ROOT',
  LEARNER_SUMMARY: 'LEARNER_SUMMARY',
  LEARNER_LESSON_REPORT: 'LEARNER_LESSON_REPORT',

  /** Groups */
  GROUPS_ROOT: 'GROUPS_ROOT',
  GROUP_SUMMARY: 'GROUP_SUMMARY',
  GROUP_ENROLL: 'GROUP_ENROLL',
  GROUP_EXAM_SUMMARY: 'GROUP_EXAM_SUMMARY',
  GROUP_LESSON_SUMMARY: 'GROUP_LESSON_SUMMARY',
  GROUP_LESSON_LEARNER: 'GROUP_LESSON_LEARNER',
  GROUP_LESSON_EXERCISE_QUESTIONS_REPORT: 'GROUP_LESSON_EXERCISE_QUESTIONS_REPORT',
  GROUP_LESSON_EXERCISE_LEARNER_REPORT: 'GROUP_LESSON_EXERCISE_LEARNER_REPORT',
};

export const GroupModals = {
  ABOUT_GROUP: 'ABOUT_GROUP',
  CREATE_GROUP: 'CREATE_GROUP',
  RENAME_GROUP: 'RENAME_GROUP',
  DELETE_GROUP: 'DELETE_GROUP',
};

export const ViewMoreButtonStates = {
  LOADING: 'LOADING',
  HAS_MORE: 'HAS_MORE',
  NO_MORE: 'NO_MORE',
  ERROR: 'ERROR',
};

export const pageNameToModuleMap = {
  [PageNames.LESSONS_ROOT]: 'lessonsRoot',
  // Omitting modules for resource selection, exam creation, and preview to prevent
  // default module state resetting behavior.
};
