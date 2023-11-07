import "./ExpenseItem.css";
import PropTypes from "prop-types";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    {Number(props.amount)}
                </div>
            </div>
        </Card>
    );
};

ExpenseItem.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    amount: PropTypes.number,
};

export default ExpenseItem;
