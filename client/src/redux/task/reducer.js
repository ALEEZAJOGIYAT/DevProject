import { TASK } from "./actionTypes";

const initialState = {
	data: [],
};

export const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case TASK:
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
