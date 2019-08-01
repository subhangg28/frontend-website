import * as ActionTypes from './ActionTypes';
export const Hotel = (state={
	isLoading: true,
	errmess: null,
	hotel:[],

},action) => {
	switch(action.type){
		case ActionTypes.ADD_HOTEL_DETAILS:
			return {...state, isLoading:false, errmess: null, hotel: action.payload};

		case ActionTypes.HOTEL_DETAILS_LOADING:
			return {...state, isLoading:true, errmess: null, hotel: []};
		case ActionTypes.HOTEL_DETAILS_FAILED:
			return {...state, isLoading:true, errmess: action.payload, hotel: []};
		default:
            return state;
	}
};