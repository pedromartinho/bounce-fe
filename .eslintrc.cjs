module.exports = {
  'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'root': true,
  'rules': {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'max-len': ['error', { 'code': 160 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-trailing-spaces': 'error'
  }
};