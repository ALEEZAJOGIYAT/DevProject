import { USER, DELETE_USER } from "./actionTypes";

export const user = (values) => {
	return {
		type: USER,
		payload: {
			data: values,
		},
	};
};

export const deleteUser = (data) => {
	return {
		type: DELETE_USER,
		payload: {
			data: data,
		},
	};
};
