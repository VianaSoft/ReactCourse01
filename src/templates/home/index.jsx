import React from "react";
import "./styles.css";

import { Plans } from "../../components/plans";
import { loadPlans } from "../../utils/load-plans";
import { Button } from "../../components/button";
import { TextInput } from "../../components/textInput";

export class Home extends React.Component {
  state = {
    plans: [],
    allPlans: [],
    page: 0,
    itemsPerPage: 6,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPlans();
  }

  loadPlans = async () => {
    const { page, itemsPerPage } = this.state;

    const plans = await loadPlans();
    this.setState({
      plans: plans.slice(page, itemsPerPage),
      allPlans: plans,
    });
  };

  loadMorPlans = () => {
    const { page, itemsPerPage, allPlans, plans } = this.state;
    const nextPage = page + itemsPerPage;
    const nextPlans = allPlans.slice(nextPage, nextPage + itemsPerPage);

    plans.push(...nextPlans);
    this.setState({ plans, page: nextPage });

    console.log(page, itemsPerPage, nextPage, nextPage + itemsPerPage);
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ searchValue: value });
  };

  render() {
    const { plans, page, itemsPerPage, allPlans, searchValue } = this.state;
    const noMorePlans = page + itemsPerPage >= allPlans.length;
    const filteredPlans = !!searchValue
      ? allPlans.filter((plan) => {
          return plan?.Name?.toLowerCase().includes(searchValue.toLowerCase());
        })
      : plans;

    return (
      <section className="container">
        <div className="input-container">
          {!!searchValue && (
            <>
              <h3>Search: {searchValue}</h3>
            </>
          )}

          <TextInput actionFn={this.handleChange} inputValue={searchValue} />
        </div>

        {filteredPlans.length > 0 ? (
          <Plans plans={filteredPlans} />
        ) : (
          <p>Registro(s) não encontrado.</p>
        )}

        <div className="button-container">
          {!searchValue && (
            <Button
              text="Load More Plans"
              actionFn={this.loadMorPlans}
              disabled={noMorePlans}
            />
          )}
        </div>
      </section>
    );
  }
}
