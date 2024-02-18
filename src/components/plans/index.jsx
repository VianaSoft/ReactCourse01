import P from 'prop-types';
import './styles.css';

import { PlanCard } from '../planCard';

export const Plans = ({ plans = [] }) => (
  <div className="plans">
    {plans.map((plan) => (
      <PlanCard
        key={plan.Id}
        id={plan.Id}
        name={plan.Name}
        timeType={plan.TimeType.Name}
        planType={plan.PlanType.Name}
        displayHome={plan.DisplayHome}
        maxAdvert={plan.MaxAdvert}
        maxPhoto={plan.MaxPhoto}
        maxVideo={plan.MaxVideo}
        priority={plan.Priority}
        cls
        timeRange={plan.TimeRange}
        total={plan.Total}
      />
    ))}
  </div>
);

Plans.defaultProps = {
  plans: [],
};

Plans.propTypes = {
  plans: P.arrayOf(
    P.shape({
      id: P.string,
      name: P.string,
      timeType: P.string,
      planType: P.string,
      displayHome: P.bool,
      maxAdvert: P.number,
      maxPhoto: P.number,
      maxVideo: P.number,
      priority: P.number,
      timeRange: P.number,
      total: P.number,
    }),
  ),
};
