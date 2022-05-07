import { USER } from "./actionTypes";

export const user = (values) => {
	return {
		type: USER,
		payload: {
			data: values,
		},
	};
};
