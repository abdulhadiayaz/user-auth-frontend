export const ACTIONS = {
  SET_OEM_USER: "setOemUserData",
  LOGOUT_OEM_USER: "logoutOemUser",
};

export const LoginFieldConstants = [
  {
    name: "email",
    label: "Email",
    type: "text",
    rules: {
      required: true,
    },
    required: true,
    placeHolder: "Email",
    errorMessage: "A valid Email is required",
    onInput: (e) => e.target.value.toString().trim(),
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    placeHolder: "Password",
    rules: {
      required: true,
    },
    errorMessage: "Password is required.",
    onInput: (e) => e.target.value.toString().trim(),
  },
];

export const ConfirmPasswordInputFields = [
  {
    name: "code",
    label: "Verification Code",
    type: "text",
    rules: {
      required: true,
    },
    required: true,
    errorMessage: "Please enter Verification Code",
    onInput: (e) => e.target.value.toString().trim(),
  },
  {
    name: "newPassword",
    label: "New Password",
    type: "password",
    required: true,
    rules: {
      required: true,
    },
    errorMessage: "Please enter a new password.",
    onInput: (e) => e.target.value.toString().trim(),
  },
];
