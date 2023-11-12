import { useState } from "react";
import React from "react";

export default function BudgetFunction() {
    const [Budget, setBudget] = useState();
    const [expenses, setExpenses] = useState();

    const amount = Budget-expenses;

    return (
        <div class="App">
            <h2>Budget Calculator Using Function</h2>
            <br></br>
            <label>Budget  </label>
            <input type="number" placeholder="Enter Budget" value={Budget} onChange={(e)=> setBudget(+e.target.value)}/>
            <br></br>
            <br></br>
            <label>Expenses  </label>
            <input type="number" placeholder="Enter Expenses" value={expenses} onChange={(e)=> setExpenses(+e.target.value)}/>
            <br></br>
            <br></br>
            <label>Ammount Remaining  </label>
            <input type="number" value={amount} />
            <br></br>
        </div>
    );
}