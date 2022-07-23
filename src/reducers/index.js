import { combineReducers } from 'redux';

import courseReducer from './course.reducer';
import userReducer from './user.reducer';
import courseCategorieReducer from './courseCategorie.reducer';
import topicReducer from './topic.reducer';

export const reducers = combineReducers({
    courseReducer,
    userReducer,
    courseCategorieReducer,
    topicReducer
    
});