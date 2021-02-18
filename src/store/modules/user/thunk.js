import {getEmail, getUsage, getPackageInfo, getInvoice} from './actions';
import {api} from '../../../services/api';

export const getEmailThunk = (email) => (dispatch) => {
  dispatch(getEmail(email));
};

export const getPackageInfoThunk = (email, navigation) => (dispatch) => {
  api
    .get('usage/packageInformation/', {
      headers: {
        Authorization: email,
      },
    })
    .then((res) => {
      dispatch(getPackageInfo(res.data));
    })
    .then(() => navigation.navigate('Main'))
    .catch((error) => console.log(error));
};

export const getUsageThunk = (email, startDate, endDate) => (dispatch) => {
  api
    .get(`usage/records?startDate=${startDate}1&endDate=${endDate}`, {
      headers: {
        Authorization: email,
      },
    })
    .then((res) => {
      dispatch(getUsage(res.data));
    })
    .catch((error) => console.log(error));
};

export const postPurchaseThunk = (email, data, navigation) => (dispatch) => {
  api
    .post('usage/topupPurchase', data, {
      headers: {
        Authorization: email,
        'Content-Type': 'application/json',
      },
    })
    .then(
      api
        .get('usage/packageInformation/', {
          headers: {
            Authorization: email,
          },
        })
        .then((res) => {
          dispatch(getPackageInfo(res.data));
        })
        .then(() => navigation.navigate('Main'))
        .catch((error) => console.log(error)),
    )
    .catch((error) => console.log(error));
};

export const getInvoiceThunk = (data) => (dispatch) => {
  dispatch(getInvoice(data));
};
