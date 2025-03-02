export const validationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Enter a valid email',
    },
  },
  emailOtp: {
    required: 'Email otp is required',
    pattern: {
      value: /^[0-9]+$/,
      message: 'Enter numbers only',
    },
    minLength: {
      value: 6,
      message: 'OTP must be 6 digits long',
    },
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^[0-9]+$/,
      message: 'Enter numbers only',
    },
  },

  'user.firstName': {
    required: 'First name is required',
    pattern: {
      value: /^[A-Za-z]+$/,
      message: 'Enter alphabet  only',
    },
  },
  'user.lastName': {
    required: 'Last name is required',
    pattern: {
      value: /^[A-Za-z]+$/,
      message: 'Enter alphabet  only',
    },
  },
  'images.img1': {
    required: 'Main images is required',
  },
  bio: {
    required: 'Bio is required',
  },
};
