import "./styles.css";

export const PlanCard = (props) => {
  const plan = props;

  let PTEuro = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <div className="plan">
      <div className="plan-title">
        <strong>{plan.name}</strong>
      </div>
      <div className="plan-content">
        <div className="plan-content-e">
          <p>Tipo do plano</p>
          <p>Aparece na Home</p>
          <p>Anúncios</p>
          <p>Fotos</p>
          <p>Vídeos</p>
          <p>Prioridade</p>
          <p>Duração {plan.timeType.Name}</p>
          <p>Preço (mês)</p>
        </div>
        <div className="plan-content-d">
          <p>
            <strong>{plan.planType.Name}</strong>
          </p>
          <p>
            <strong>{plan.displayHome ? "Sim" : "Não"}</strong>
          </p>
          <p>
            <strong>{plan.maxAdvert}</strong>
          </p>
          <p>
            <strong>{plan.maxPhoto}</strong>
          </p>
          <p>
            <strong>{plan.maxVideo}</strong>
          </p>
          <p>
            <strong>{plan.priority}</strong>
          </p>
          <p>
            <strong>{plan.timeRange}</strong>
          </p>
          <p>
            <strong>
              {PTEuro.format(plan.total)}
              {"+IVA"}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
