import * as ActionTypes from './ActionTypes';
import axios from 'axios';
const baseUrl='http//10.1.6.248:8080';
export const fetchHotels= () => (dispatch) =>{
	dispatch(hotelsLoading());

	return axios.get(baseUrl + '/hotels').then(response =>response.json()).then(hotels => dispatch(getHotelList(hotels))).catch(error => dispatch(hotelsFailed(error.message)));
}

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
export const fetchHotelDetails= (id) => (dispatch) =>{
	dispatch(hotelDetailsLoading());
	return axios.get(baseUrl + '/hotels/details/'+id).then(response => response.json()).then(hotel => dispatch(addHotelDetails(hotel))).catch(error => dispatch(hotelDetailsFailed(error.message)));
};
export const addHotelDetails= (hotel) =>({
	type:ActionTypes.ADD_HOTEL_DETAILS,
	payload:hotel

});
export const hotelDetailsFailed = (errmess) => ({
	type:ActionTypes.HOTEL_DETAILS_FAILED,
	payload: errmess
});
export const fetchDeviceDetails= (id) => (dispatch) =>{
	dispatch(deviceDetailsLoading());
	return axios.get(baseUrl + '/device/details/'+id).then(response => response.json()).then(device => dispatch(addDeviceDetails(device))).catch(error => dispatch(deviceDetailsFailed(error.message)));
};
export const deviceDetailsLoading = () => ({
	type:ActionTypes.DEVICE_DETAILS_LOADING
}); 
export const addDeviceDetails= (device) =>({
	type:ActionTypes.ADD_DEVICE_DETAILS,
	payload:device

});
export const deviceDetailsFailed = (errmess) => ({
	type:ActionTypes.DEVICE_DETAILS_FAILED,
	payload: errmess
});