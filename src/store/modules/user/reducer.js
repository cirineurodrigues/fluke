import {userTypes} from './actionsType';

const user = {
  email: '',
  usage: [],
  packageInformation: {},
  invoice: [{data: 0, minutes: 0, sms: 0}],
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case userTypes.GET_EMAIL:
      const {userEmail} = action;
      user.email = userEmail;
      return state;

    case userTypes.GET_USAGE:
      const {usage} = action;
      user.usage = usage;
      return state;

    case userTypes.GET_PACKAGE_INFO:
      const {packageInformation} = action;
      user.packageInformation = packageInformation;
      return state;

    case userTypes.GET_INVOICE:
      const {invoice} = action;
      user.invoice = [...user.invoice, invoice];
      return state;

    default:
      return state;
  }
};

export default userReducer;
