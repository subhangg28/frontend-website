import * as ActionTypes from './ActionTypes';
export const Hotel = (state={
	isLoadingHotel: true,
	errmess: null,
	hotel:[],

},action) => {
	switch(action.type){
		case ActionTypes.ADD_HOTEL_DETAILS:
		console.log(action.payload)
			return {...state, isLoadingHotel:false, errmess: null, hotel: action.payload};

		case ActionTypes.HOTEL_DETAILS_LOADING:
			return {...state, isLoadingHotel:true, errmess: null, hotel: []};
		case ActionTypes.HOTEL_DETAILS_FAILED:
			return {...state, isLoadingHotel:true, errmess: action.payload, hotel: []};
		default:
            return state;
     //console.log(action.payload);

	}
};