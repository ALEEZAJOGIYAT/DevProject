import { USER, DELETE_USER } from "./actionTypes";

const initialState = {
	data: [],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER:
			const { data } = action.payload;

			return {
				...state,
				data: [
					{
						data: data,
					},
				],
			};

		case DELETE_USER:
			return {
				data: {
					data: [],
				},
			};

		default:
			return state;
	}
};
