import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities';
import errorsReducer from './session_errors';

export default combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
});
