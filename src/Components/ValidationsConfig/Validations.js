import { ErrorMessages } from './ErrorMessage';

/************************************* Regex ***************************************************/
export const EMAILREGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z][A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
export const USERNAMEREG = /^[a-zA-Z0-9_]{3,16}$/;
export const PASSWORDREGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const FULLNAME_REGEX = /^([A-Za-z][a-z]*\s?[A-Z][a-z]*)|([A-Za-z][a-z]*)$/;



/************************************* All Validations ***************************************************/

/****** EMAIL VALIDATION *****/
// export const ValidateEmail = (email) => {
//   if (email?.trim() !== "") {
//     if (email?.length > 256) {
//       return ErrorMessages.EmailLengthError;
//     }
//     if (email?.includes(" ")) {
//       return ErrorMessages.EmailSpaceError;
//     }
//     if (EMAILREGEX.test(email)) {
//       return "";
//     } else {
//       return ErrorMessages.EmailError;
//     }
//   } else {
//     return ErrorMessages.EmailEmpty;
//   }
// };
/****** PASSWORD VALIDATION *****/
export const ValidatePassword = (password) => {
  if (password != '') {
    if (PASSWORDREGEX.test(password)) {
      return '';
    } else {
      return ErrorMessages.PasswordError;
    }
  } else {
    return ErrorMessages.PasswordError1 ;
  }
};
// export const ValidateUserName = (UserName) => {
//   if (UserName !== '') {
//     if (USERNAMEREG.test(UserName)) {
//       return '';
//     } else if (UserName.length < 3 || UserName.length > 20) {
//       return ErrorMessages.UserNameErr;
//     } if (!USERNAMEREG.test(UserName)) {
//       return ErrorMessages.UserNameErr2;
//     }
//   } else {
//     return ErrorMessages.UserNameError;
//   }
// };
export const ValidateUserName = (UserName) => {
  if (UserName !== '') {
    if (USERNAMEREG.test(UserName)) {
      return '';
    } else if (UserName.length < 3 || UserName.length > 20) {
      return ErrorMessages.UserNameErr;
    } if (!USERNAMEREG.test(UserName)) {
      return ErrorMessages.UserNameErr2;
    }
  } else {
    return null;
  }
};

























