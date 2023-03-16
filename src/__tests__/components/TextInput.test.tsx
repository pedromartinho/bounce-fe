import { render, screen } from '@testing-library/react';
import TextInput from "../../components/TextInput";

describe('TextInput component', () => {
  const initialValue = '';
  const label = 'Test Label';
  const type = 'email';
  const placeholder = 'Test Placeholder';
  const mockOnChange = jest.fn();

  it('renders component', () => {
    render(
      <TextInput
        initialValue={initialValue}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it('renders component with correct initial value', () => {
    render(
      <TextInput
        initialValue={initialValue}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByDisplayValue(initialValue);
    expect(inputElement).toBeInTheDocument();
  });

  it('renders component with label is displayed correctly', () => {
    render(
      <TextInput
        initialValue={initialValue}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={mockOnChange}
      />
    );

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it('renders component with correct input type', () => {
    render(
      <TextInput
        initialValue={initialValue}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={mockOnChange}
      />
    );
  
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect((inputElement as any).type as any).toBe(type);
  });
});