import {getUsage, getPackageInfo} from './actions';
import {api} from '../../../services/api';

export const getUsageThunk = (startDate, endDate) => (dispatch) => {
  api
    .get(`usage/records?startDate=${startDate}1&endDate=${endDate}`)
    .then((res) => dispatch(getUsage(res.data)));
};

export const getPackageInfoThunk = () => (dispatch) => {
  api
    .get('usage/packageInformation/')
    .then((res) => dispatch(getPackageInfo(res.data)));
};

export const postPurchaseThunk = (data) => {
  api.post('usage/topupPurchase', data);
};
