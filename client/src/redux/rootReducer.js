import { addProjectReducer } from "./addProject/reducer";
import { userReducer } from "./user/reducer";
import { taskReducer } from "./task/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	addProject: addProjectReducer,
	user: userReducer,
	taskDes: taskReducer,
});
