export interface ValidationErrors {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PasswordValidationResult {
  isValid: boolean;
  error: string;
}

// Валидация email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Валидация пароля
export const validatePassword = (password: string): PasswordValidationResult => {
  const minLength = 8;
  const maxLength = 30;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength || password.length > maxLength) {
    return {
      isValid: false,
      error: 'Password must be between 8 and 30 characters'
    };
  }

  if (!hasUpperCase) {
    return {
      isValid: false,
      error: 'Password must contain at least one uppercase letter'
    };
  }

  if (!hasNumber) {
    return {
      isValid: false,
      error: 'Password must contain at least one number'
    };
  }

  if (!hasSpecialChar) {
    return {
      isValid: false,
      error: 'Password must contain at least one special character'
    };
  }

  return {
    isValid: true,
    error: ''
  };
};

// Валидация подтверждения пароля
export const validateConfirmPassword = (password: string, confirmPassword: string): string => {
  return password !== confirmPassword ? "Passwords don't match" : '';
};

// Проверка наличия ошибок
export const hasErrors = (errors: ValidationErrors): boolean => {
  return Object.values(errors).some(error => error !== '');
};

// Валидация всей формы
export const validateForm = (
  email: string,
  password: string,
  confirmPassword: string
): ValidationErrors => {
  const passwordValidation = validatePassword(password);

  return {
    email: !validateEmail(email) ? 'Please enter a valid email' : '',
    password: passwordValidation.error,
    confirmPassword: validateConfirmPassword(password, confirmPassword)
  };
};