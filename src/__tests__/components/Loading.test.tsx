import { render, screen } from '@testing-library/react';
import Loading from "../../components/Loading";

describe('Loading component', () => {
  const message = 'Loading message';

  it('renders component with respective message', () => {
    render(<Loading message={message}/>);

    const loadingElement = screen.getByText(message);
    expect(loadingElement).toBeInTheDocument();
  });
});