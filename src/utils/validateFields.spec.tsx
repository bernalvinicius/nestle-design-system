import { validateFields } from './validateFields';
import { SignUpProps } from 'src/types';
import { validateEmail } from './validateEmail';

jest.mock('./validateEmail', () => ({
  validateEmail: jest.fn(),
}));

describe('validateFields', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return false when any field is empty', () => {
    const data: SignUpProps = {
      fullName: 'John Doe',
      email: '',
      password: 'password',
    };

    expect(validateFields(data)).toBe(false);
  });

  it('should return false when email is invalid', () => {
    (validateEmail as jest.Mock).mockImplementation(() => false);

    const data: SignUpProps = {
      fullName: 'John Doe',
      email: 'invalid-email',
      password: 'password',
    };

    expect(validateFields(data)).toBe(false);
    expect(validateEmail).toHaveBeenCalledWith('invalid-email');
  });

  it('should return false when password is less than 6 characters', () => {
    const data: SignUpProps = {
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'pass',
    };

    expect(validateFields(data)).toBe(false);
  });

  it('should return true when all fields are filled correctly', () => {
    (validateEmail as jest.Mock).mockImplementation(() => true);

    const data: SignUpProps = {
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'password',
    };

    expect(validateFields(data)).toBe(true);
    expect(validateEmail).toHaveBeenCalledWith('john@example.com');
  });
});
