/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { PlanCard } from '.';
import { planCardPropsMock } from './mock';

const props = planCardPropsMock;

describe('<PlanCard />', () => {
  it('Should render PlanCard correctly', () => {
    render(<PlanCard {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText('Duração ' + props.timeType)).toBeInTheDocument();
    expect(screen.getByText(props.planType)).toBeInTheDocument();
    expect(screen.getByText(props.displayHome ? 'Sim' : 'Não')).toBeInTheDocument();
    expect(screen.getByText(props.maxAdvert)).toBeInTheDocument();
    expect(screen.getByText(props.maxPhoto)).toBeInTheDocument();
    expect(screen.getByText(props.maxVideo)).toBeInTheDocument();
    expect(screen.getByText(props.priority)).toBeInTheDocument();
    expect(screen.getByText(props.timeRange)).toBeInTheDocument();
    expect(screen.getByText(props.total + ',00 €+IVA')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<PlanCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
