import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const expenseTitle = title;
  const expenseAmount = amount;

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
