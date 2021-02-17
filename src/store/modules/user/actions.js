import {userTypes} from './actionsType';

export const getEmail = (userEmail) => ({
  type: userTypes.GET_EMAIL,
  userEmail,
});

export const getUsage = (usage) => ({
  type: userTypes.GET_USAGE,
  usage,
});

export const getPackageInfo = (packageInformation) => ({
  type: userTypes.GET_PACKAGE_INFO,
  packageInformation,
});

export const getInvoice = (invoice) => ({
  type: userTypes.GET_INVOICE,
  invoice,
});
