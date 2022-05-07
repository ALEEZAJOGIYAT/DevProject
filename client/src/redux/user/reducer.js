import { USER } from "./actionTypes";

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
					...state.data,
					{
						data: data,
					},
				],
			};

		default:
			return state;
	}
};
