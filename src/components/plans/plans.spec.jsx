/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import { Plans } from '.';

const props = {
  plans: [
    {
      Id: '7c6c51ad-53bb-4e0b-8100-51e2920ce4e8',
      Name: 'Free',
      DisplayHome: false,
      MaxHome: 0,
      MaxAdvert: 1,
      MaxPhoto: 6,
      MaxVideo: 0,
      Priority: 18,
      TimeRange: 7,
      Price: 0.0,
      Total: 0.0,
      PlanType: {
        Id: '60c10154-73a0-4617-a260-a326e6b653c8',
        Name: 'Individual',
        IsEnable: true,
      },
      TimeType: {
        Id: '2f9f3ed6-2313-4d98-8a24-4c0468946c07',
        Name: 'Dia(s)',
        IsEnable: true,
      },
      IsEnable: true,
    },
    {
      Id: '05b4eacf-ee48-476a-9ad2-54c98ba66615',
      Name: 'Clássico',
      DisplayHome: false,
      MaxHome: 0,
      MaxAdvert: 1,
      MaxPhoto: 6,
      MaxVideo: 0,
      Priority: 17,
      TimeRange: 1,
      Price: 4.0,
      Total: 4.0,
      PlanType: {
        Id: '60c10154-73a0-4617-a260-a326e6b653c8',
        Name: 'Individual',
        IsEnable: true,
      },
      TimeType: {
        Id: '9dad9819-e846-44fb-b427-9721265f184e',
        Name: 'Mese(s)',
        IsEnable: true,
      },
      IsEnable: true,
    },
  ],
};

describe('<Plans />', () => {
  it('shoud render plans items', () => {
    render(<Plans {...props} />);

    expect(screen.getAllByText(/Individual/i)).toHaveLength(props.plans.length);
  });

  it('Should not render plans', () => {
    render(<Plans />);

    expect(screen.queryAllByAltText(/Individual/i)).toHaveLength(0);
    expect(screen.queryAllByAltText(/Corporativo/i)).toHaveLength(0);
    expect(screen.queryByText(/Individual/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Corporativo/i)).not.toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<Plans {...props} />);

    expect(container).toMatchSnapshot();
  });
});
