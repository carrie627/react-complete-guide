import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import PropTypes from "prop-types";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

NewExpense.propTypes = {
  onAddExpense: PropTypes.func,
};

export default NewExpense;
