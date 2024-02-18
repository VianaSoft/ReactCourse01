import P from 'prop-types';
import './styles.css';

export const PlanCard = function ({
  id,
  name,
  timeType,
  planType,
  displayHome,
  maxAdvert,
  maxPhoto,
  maxVideo,
  priority,
  timeRange,
  total,
}) {
  return (
    <div key={id} className="plan">
      <div className="plan-title">
        <strong>{name}</strong>
      </div>
      <div className="plan-content">
        <div className="plan-content-e">
          <p>Tipo do plano</p>
          <p>Aparece na Home</p>
          <p>Anúncios</p>
          <p>Fotos</p>
          <p>Vídeos</p>
          <p>Prioridade</p>
          <p>Duração {timeType}</p>
          <p>Preço (mês)</p>
        </div>
        <div className="plan-content-d">
          <p>
            <strong>{planType}</strong>
          </p>
          <p>
            <strong>{displayHome ? 'Sim' : 'Não'}</strong>
          </p>
          <p>
            <strong>{maxAdvert}</strong>
          </p>
          <p>
            <strong>{maxPhoto}</strong>
          </p>
          <p>
            <strong>{maxVideo}</strong>
          </p>
          <p>
            <strong>{priority}</strong>
          </p>
          <p>
            <strong>{timeRange}</strong>
          </p>
          <p>
            <strong>{total.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}+IVA</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  id: P.string.isRequired,
  name: P.string.isRequired,
  timeType: P.string.isRequired,
  planType: P.string.isRequired,
  displayHome: P.bool.isRequired,
  maxAdvert: P.number.isRequired,
  maxPhoto: P.number.isRequired,
  maxVideo: P.number.isRequired,
  priority: P.number.isRequired,
  timeRange: P.number.isRequired,
  total: P.number,
};
