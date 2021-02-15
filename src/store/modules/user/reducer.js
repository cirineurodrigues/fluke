import {userTypes} from './actionsType';

const user = {
  userEmail: '',
  usage: [],
  packageInformation: {},
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case userTypes.GET_EMAIL:
      const {userEmail} = action;
      user.userEmail = userEmail;
      return state;

    case userTypes.GET_USAGE:
      const {usage} = action;
      user.usage = usage;
      return state;

    case userTypes.GET_PACKAGE_INFO:
      const {packageInformation} = action;
      user.packageInformation = packageInformation;
      return state;

    default:
      return state;
  }
};

export default userReducer;
