import * as ActionTypes from './ActionTypes';
import axios from 'axios';
const baseUrl='http://10.1.6.248:8080';


export const fetchHotels =  () => async (dispatch) =>{
	console.log('inside fetch hotels')
	dispatch(hotelsLoading());
	/*try {
		let headers = {
			"Access-Control-Allow-Origin" : "*"
		}
		let response = await axios.get(baseUrl + "/hotels", { headers });
		console.log(JSON.stringify(response));
	return response;
	}
	catch(error) {
		console.log("Error is: " + JSON.stringify(error));
	}*/
	return axios.get(baseUrl + '/hotels')
	// .then(response =>JSON.stringify(response))
	.then(hotels => dispatch(getHotelList(hotels)))
	.catch(error => dispatch(hotelsFailed(error.message)));
}

export const fetchHotelDetails= (id) => async (dispatch) =>{
	console.log(id)
	dispatch(hotelDetailsLoading());
	try {

		let response = await axios.get(baseUrl + '/hotels/details/?hotelId=' + id);
		dispatch(addHotelDetails(response));
		//return response.data;
	// 		return axios.get()
	// 		.then(hotel => dispatch(addHotelDetails(hotel)))
	// .catch(error => console.log(error))

	}
	catch(error) {
		console.log("Error is: " + JSON.stringify(error));
	}
	// .then(response =>JSON.stringify(response))
	//.then( (response) => {return(console.log(response))})
	// 
	// dispatch(hotelDetailsFailed(error.message))
	
};

export const hotelsLoading = () => ({
	type:ActionTypes.HOTELS_LOADING
}); 
export const hotelsFailed = (errmess) => ({
	type:ActionTypes.HOTELS_FAILED,
	payload: errmess
});
export const getHotelList = (hotels) => ({
	type:ActionTypes.GET_HOTEL_LIST,
	payload:hotels
});
export const hotelDetailsLoading = () => ({
	type:ActionTypes.HOTEL_DETAILS_LOADING
}); 

export const addHotelDetails= (hotel) =>({
	type:ActionTypes.ADD_HOTEL_DETAILS,
	payload:hotel

});
export const hotelDetailsFailed = (errmess) => ({
	type:ActionTypes.HOTEL_DETAILS_FAILED,
	payload: errmess
});
export const fetchDeviceDetails= (no) => async (dispatch) => {
	try {
		let response = await axios.get(baseUrl + '/device/details/?deviceId=' +no);
		console.log("In [fetchDeviceDetails] response is: " + JSON.stringify(response.data));
		dispatch(addDeviceDetails(response));
	}
	catch(error) {
		console.log("In [fetchDeviceDetails] error is: " + JSON.stringify(error));
	}
};
export const deviceDetailsLoading = () => ({
	type:ActionTypes.DEVICE_DETAILS_LOADING
}); 
export const addDeviceDetails= (device) =>({
	type: ActionTypes.ADD_DEVICE_DETAILS,
	payload: device

});
export const deviceDetailsFailed = (errmess) => ({
	type:ActionTypes.DEVICE_DETAILS_FAILED,
	payload: errmess
});