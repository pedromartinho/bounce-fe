import { render, screen } from '@testing-library/react';
import CounterInput from "../../components/CounterInput";

describe('CounterInput component', () => {
  const count = 1;
  const mockSetValue = jest.fn();

  it('renders component', () => {
    render(
      <CounterInput
        value={count}
        setValue={mockSetValue}
      />
    );

    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');
    const counterValueDisplay = screen.getByText(`${count}`);

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(counterValueDisplay).toBeInTheDocument();
  });

  it('decrement button is enabled when value is greater than 1', () => {
    const count = 2;

    render(
      <CounterInput
        value={count}
        setValue={mockSetValue}
      />
    );

    const decrementButton = screen.getByText('-');
    expect(decrementButton).toBeEnabled();
  });

  it('decrement button is disabled when value is 1', () => {
    render(
      <CounterInput
        value={count}
        setValue={mockSetValue}
      />
    );

    const decrementButton = screen.getByText('-');
    expect(decrementButton).toBeDisabled();
  });
});