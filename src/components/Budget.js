import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);

        if (newBudgetValue >= totalExpenses) {
            setNewBudget(newBudgetValue);
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
        } else {
            alert("You cannot reduce the budget value lower than the spending.");
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
