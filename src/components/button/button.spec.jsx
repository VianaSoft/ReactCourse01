/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render the button with the text "Load More Plans"', () => {
    const fn = jest.fn();
    render(<Button text="Load More Plans" onClick={fn} />);
    const button = screen.getByRole('button', { name: /Load More Plans/i });

    expect(button).toHaveAttribute('class', 'button');
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More Plans" onClick={fn} />);
    const button = screen.getByRole('button', { name: /Load More Plans/i });
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More Plans" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /Load More Plans/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load More Plans" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /Load More Plans/i });

    expect(button).toBeEnabled();
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load More Plans" disabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
