import { ADD_PROJECT } from "./actionTypes";

export const addProject = (values) => {
	return {
		type: ADD_PROJECT,
		payload: {
			id: new Date().getTime().toString(),
			data: values,
		},
	};
};
