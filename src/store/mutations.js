import { TOGGLE_HEADER, FETCH_POST_LIST, FETCH_ARCHIVE_LIST, FETCH_POST_VIEW, FETCH_CATEGORIES_LIST } from './mutations-types'

export default {
  [TOGGLE_HEADER] (state, booleanVal){
    state.isActiveHeader = booleanVal;
  },
  [FETCH_POST_LIST] (state, posts) {
    state.currentPosts = posts;
  },
  [FETCH_POST_VIEW] (state, posts) {
    state.currentView = posts;
  },
  [FETCH_CATEGORIES_LIST] (state, categoriesList) {
    state.categoriesList = categoriesList;
  },
  [FETCH_ARCHIVE_LIST] (state, archiveList) {
    state.archiveList = archiveList;
  }
}
