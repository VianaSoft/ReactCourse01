import React, { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { Plans } from '../../components/plans';
import { loadPlans } from '../../utils/load-plans';
import { Button } from '../../components/button';
import { TextInput } from '../../components/textInput';

export const Home = () => {
  const [plans, setPlans] = useState([]);
  const [allPlans, setAllPlans] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPlans = useCallback(async (page, itemsPerPage) => {
    const plans = await loadPlans();

    setPlans(plans.slice(page, itemsPerPage));
    setAllPlans(plans);
  }, []);

  useEffect(() => {
    handleLoadPlans(0, itemsPerPage);
  }, [handleLoadPlans, itemsPerPage]);

  const loadMorPlans = () => {
    const nextPage = page + itemsPerPage;
    const nextPlans = allPlans.slice(nextPage, nextPage + itemsPerPage);
    plans.push(...nextPlans);

    setPlans(plans);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePlans = page + itemsPerPage >= allPlans.length;
  const filteredPlans = searchValue
    ? allPlans.filter((plan) => {
        return plan.Name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : plans;

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h3>Search: {searchValue}</h3>}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPlans.length > 0 && <Plans plans={filteredPlans} />}

      {filteredPlans.length === 0 && <p>Registro(s) não encontrado.</p>}

      <div className="button-container">
        {!searchValue && <Button text="Load More Plans" onClick={loadMorPlans} disabled={noMorePlans} />}
      </div>
    </section>
  );
};
