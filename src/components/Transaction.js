import React from "react";

function Transaction({ transaction, deleteTransaction }) {
  const { date, description, category, amount } = transaction;

  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;
