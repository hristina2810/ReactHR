import {combineReducers} from 'redux';
import {CleanReducer} from './CleanReducer';
import {DriveReducer} from './DriveReducer';

export default combineReducers ({
    CleanReducer,
    DriveReducer
})