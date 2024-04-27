import React, { useState } from 'react';

function AddTransactionForm({ addTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(newTransaction);
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={newTransaction.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newTransaction.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newTransaction.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={newTransaction.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit"> 
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
