/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<TextInput />', () => {
  it('shoud call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'Gold'} />);
    const input = screen.getByPlaceholderText(/Enter your search/i);
    const value = 'Ultimate';

    userEvent.type(input, value);

    expect(input.value).toBe('Gold');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('shoud have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'Gold'} />);

    const input = screen.getByPlaceholderText(/Enter your search/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('Gold');
    expect(input.type).toBe('search');
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={'Gold'} />);

    expect(container).toMatchSnapshot();
  });
});
