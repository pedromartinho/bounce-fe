import { render, screen } from '@testing-library/react';
import CreditCardInput from '../../components/CreditCardInput';

describe('CreditCardInput', () => {
  const setValue = jest.fn();
  const label = 'Credit Card Number';
  const placeholder = '1234 5678 9012 3456';

  it('renders input field with label and placeholder', () => {
    render(<CreditCardInput value='' label={label} placeholder={placeholder} setValue={setValue} />);

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });
});