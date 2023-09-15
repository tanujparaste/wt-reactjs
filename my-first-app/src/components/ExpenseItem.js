import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
  const expenseDate = expense.date;
  const expenseTitle = expense.title;
  const expenseAmount = expense.amount;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
