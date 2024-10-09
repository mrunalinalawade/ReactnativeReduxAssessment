import ErrorMessages from './ErrorMessage';

/************************************* Regex ***************************************************/
export const USERNAMEREG = /^[a-zA-Z0-9_]{3,16}$/;
export const PASSWORDREGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/************************************* All Validations ***************************************************/


export const ValidatePassword = (password) => {
  if (!password) {
    return ErrorMessages.PasswordError1;
  }
  return PASSWORDREGEX.test(password) ? '' : ErrorMessages.PasswordError;
};


export const ValidateUserName = (UserName) => {
  if (!UserName) {
    return null;
  }
  if (UserName.length < 3 || UserName.length > 16) {
    return ErrorMessages.UserNameErr;
  }
  return USERNAMEREG.test(UserName) ? '' : ErrorMessages.UserNameErr2;
};
