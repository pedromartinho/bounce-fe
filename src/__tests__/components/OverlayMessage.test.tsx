import { render, screen } from '@testing-library/react';
import OverlayMessage from "../../components/OverlayMessage";

describe('OverlayMessage component', () => {
  const message = 'Success message';

  it('renders component with respective message', () => {
    render(
      <OverlayMessage
        message={message}
      />
    );

    const overlayElement = screen.getByText(message);
    expect(overlayElement).toBeInTheDocument();
  });
});