type ErrorType = {
    [key: string]: string
}

export const ErrorMessages: ErrorType = {
    UserNameErr: 'Username must be between 3 to 20 char.',
    UserNameErr1: 'Please enter your username.',
    UserNameErr2: 'It should accept only letters,numbers and underscore.',
    EmailEmpty: "Please enter your email address.",
    EmailError: 'Please enter a valid email address (abc@example.com)',
    MedianameError: "Please enter valid media name.",
    MedianameEmpty: "Please enter your media name.",
    GroupnameError: "Please enter valid group name.",
    GroupnameEmpty: "Please enter your group name.",
    PasswordEmpty: "Please enter your password.",
    FirstNameError: "Please enter vaild frist name.",
    FirstNameEmpty: "Please enter your first name.",
    WorkTitleError: "Please enter valid worktitle.",
    WorkTitleEmpty: "Please enter work title.",
    DescriptionError: "Please enter valid description.",
    DescriptionEmpty: "Please enter description.",
    QuestionError: "Please enter valid quetion.",
    QuestionEmpty: "Please enter question.",
    SkillError: "Please enter valid skill.",
    SkillEmpty: "Please enter skill.",
    LastNameError: "Please enter vaild last name..",
    LastNameEmpty: "Please enter your last name.",
    PasswordError: "Password should be 8 to 16 characters long and include uppercase and lowercase letters, numbers, and special characters.",
    CodeEmpty: "Please enter code.",
    CodeError: "Invalid OTP. Try again!",
    ChangepasswordEmpty: 'Please enter your password.',
    ChangepasswordError: 'Please enter valid password.',
    ChangePasswordbelow8: 'Password content at least 8 characters.',
    ConfirmPasswordEmpty: 'Please enter your password.',
    ConfirmPasswordMatch: `Password must match.`,
    confirmPasswordForNew: `The confirm password should be match the new password.`,
    FullnameError1: 'The name must be at least 2 characters long.',
    FullnameEmpty: 'Please enter your full name.',
    FullnameError: 'Please enter vaild full name.',
    CodeLengthError: 'Invalid OTP.',
    PhoneNumberError: 'Please enter valid mobile number.',
    PhoneNoEmpty: 'Please enter mobile number.',
    CityLengthInvalid: "City name should be in range[3,50].",
    WhereFromError: "Please select your start location.",
    WhereToError: "Please select your end location.",
    TripDatesError: "Please select trip dates.",
    WrongPassword: "The password is incorrect.",
    TravelError: "Please select travelers.",
    EmptyMessage: 'Please enter your message.',
    MessgaeLength: 'Message should content at least 8 characters.',
    EmptyReason: 'Please enter your reason.',
    ReasonLength: 'Reason should content at least 5 characters.',
    EmptyRemark: 'Please enter remark.',
    RemarkLength: 'Remark should content at least 5 characters.',
    CategoryError: 'Please add your category.',
    TournamentNameError: 'Please enter valid advertisement name.',
    TournamentNameEmty: 'Please enter your advertisement name.',
    TournamentNameLength:'Advertisement name should not exceed 30 characters.',
    EventFeeError: 'Please enter valid event Fee.',
    EventFeeEmty: 'Please enter your event Fee.',
    WinningAmount: 'Please enter your winning Amount ',
    EventTime: 'Please enter your event time .',
    RegistrationTime: 'Please enter your Registration Time.',
    RaceStartTime: 'Please enter your Race Start Time.',
    GameTime: 'Please enter your Game Time.',
    ScheduleCount: 'Please enter your Schedule Count.',
    GroupNameError: 'Please enter your media Name.',
    HourError: 'Time duration must be less than or equal to 24.',
    HourError1: 'Hour is required.',
    MinuteError: 'Enter registration time.',
    MessageError: "Please enter valid Message.",
    EmailLengthError: "Email should not exceed 256 characters.",
    EmailSpaceError: "Email should not contain spaces.",
    FristNameLengthErr: 'Frist name should not exceed 30 characters.',
    LastNameLengthErr: 'Last name should not exceed 60 characters.',
    PhoneNumberlengthError: 'Mobile number should be between 8 to 16 digits.',
    AccountNumberLength: 'Account number should not exceed 11 digits.',
    AccountNumberError: 'Account number should not empty.',
    IFCNumberLength: 'IFSC number should not exceed 11 digits and characters.',
    IFCNumberError: 'IFSC number should not  empty.',
    AccountHolderNameLength: 'Account holder name should not exceed 30 characters.',
    AccountHolderNameError: 'Account holder name should not empty.',
    BankNameLength: 'Bank name should not exceed 30 characters.',
    BankNameError: 'Bank name should not empty.',
    BankTypeLength: 'Account type should not exceed 30 characters.',
    BankTypeError: 'Account type should not empty.',


}