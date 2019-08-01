import * as ActionTypes from './ActionTypes';
export const Device = (state={
	isLoading: true,
	errmess: null,
	device:[],

},action) => {
	switch(action.type){
		case ActionTypes.ADD_DEVICE_DETAILS:
			return {...state, isLoading:false, errmess: action.payload, device: action.payload};

		case ActionTypes.DEVICE_DETAILS_LOADING:
			return {...state, isLoading:true, errmess: null, device: []};
		case ActionTypes.DEVICE_DETAILS_FAILED:
			return {...state, isLoading:true, errmess: action.payload, device: []};
		default:
            return state;
	}
};