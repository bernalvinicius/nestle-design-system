import { SignUpProps } from 'src/types';
import { validateEmail } from './validateEmail';

export const validateFields = (data: SignUpProps) => {
  const { fullName, email, password } = data;

  if (!fullName.trim() || !email.trim() || !password.trim()) {
    return false;
  }

  if (!validateEmail(email)) {
    return false;
  }

  if (password.trim().length < 6) {
    return false;
  }

  return true;
};
