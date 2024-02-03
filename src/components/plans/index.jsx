import { PlanCard } from "../planCard";
import "./styles.css";

export const Plans = ({ plans }) => (
  <div className="plans">
    {plans.map((plan) => (
      <PlanCard
        key={plan.ShortId}
        id={plan.Id}
        shortId={plan.ShortId}
        name={plan.Name}
        displayHome={plan.DisplayHome}
        maxHome={plan.MaxHome}
        maxAdvert={plan.MaxAdvert}
        maxPhoto={plan.MaxPhoto}
        maxVideo={plan.MaxVideo}
        priority={plan.Priority}
        timeRange={plan.TimeRange}
        price={plan.Price}
        total={plan.Total}
        planType={plan.PlanType}
        timeType={plan.TimeType}
        isEnable={plan.isEnablesEnable}
      />
    ))}
  </div>
);
