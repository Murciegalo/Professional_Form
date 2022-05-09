// REGEX

export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const EMAIL_REGEX = / [^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+ /;
export const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
