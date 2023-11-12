import React, { Component } from 'react';

class BudgetClass extends Component {

    constructor() {
        super();
        this.state = {
            budget: '',
            expenses: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleExpenses = this.handleExpenses.bind(this)
    }
    handleChange(event) {
        this.setState({ budget: event.target.value });

    }
    handleExpenses(event) {
        this.setState({ expenses: event.target.value });
    }

    render() {

        const { budget, expenses } = this.state;
        const amount = budget - expenses;

        return (
            <div class="App">
                <h2>Budget Calculator Using Class</h2>
                <label for='budget'>Budget  </label>
                <input type='number' id='budget' placeholder='Enter your Budget' value={this.state.budget} onChange={this.handleChange} />
                <br></br>
                <br></br>
                <label for='expenses'>Expenses  </label>
                <input type='number' id='expenses' placeholder='Enter your Expences' value={this.state.expenses} onChange={this.handleExpenses} />
                <br></br>
                <br></br>
                <label for='amount'>Amount Remaining  </label>
                <input type='number' id='amount' value={amount} />

            </div>
        );
    }
}

export default BudgetClass;