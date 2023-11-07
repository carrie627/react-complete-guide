import "./Expenses.css";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found</p>;

    if (filteredExpense.length > 0) {
        expensesContent = filteredExpense.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={Number(expense.amount)}
                date={expense.date}
            />
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            {expensesContent}
        </Card>
    );
};

Expenses.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Expenses;
