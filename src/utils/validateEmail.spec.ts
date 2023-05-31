import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
  it('should return true for a valid email address', () => {
    const validEmails = [
      'test@example.com',
      'john.doe@example.com',
      'jane@example.co.uk',
      'jane.doe123@example.io',
    ];

    validEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  it('should return false for an invalid email address', () => {
    const invalidEmails = [
      'test',
      'test@example',
      'test@.com',
      'john.doe@example',
      'jane@example.',
    ];

    invalidEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(false);
    });
  });
});
