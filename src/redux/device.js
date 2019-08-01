import * as ActionTypes from './ActionTypes';
export const Device = (state={
	isLoadingDevice: true,
	errmess: null,
	device:[],

},action) => {
	switch(action.type){
		case ActionTypes.ADD_DEVICE_DETAILS:
			
			return {...state, isLoadingDevice:false, errmess: null, device: action.payload};
		case ActionTypes.DEVICE_DETAILS_LOADING:
			return {...state, isLoadingDevice:true, errmess: null, device: []};
		case ActionTypes.DEVICE_DETAILS_FAILED:
			return {...state, isLoadingDevice:true, errmess: action.payload, device: []};
		default:
            return state;
	}
};