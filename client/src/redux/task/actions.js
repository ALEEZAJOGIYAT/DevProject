import { TASK } from "./actionTypes";

export const taskDes = (values) => {
	return {
		type: TASK,
		payload: {
			data: values,
		},
	};
};
