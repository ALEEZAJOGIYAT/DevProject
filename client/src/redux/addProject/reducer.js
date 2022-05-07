import { ADD_PROJECT } from "./actionTypes";

const initialState = {
	data: [],
};

export const addProjectReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PROJECT:
			const { data, id } = action.payload;

			return {
				...state,
				data: [
					...state.data,
					{
						id: id,
						data: data,
					},
				],
			};

		default:
			return state;
	}
};
