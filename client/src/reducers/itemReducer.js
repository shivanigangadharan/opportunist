import { GET_ITEMS, ADD_ITEM, ITEMS_LOADING, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [],
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload)
            };
        case GET_ITEMS:
            return {
                ...state
            };
        case GET_ITEMS:
            return {
                ...state
            };

    }
}