import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from"./ExpenseFilter"
import React, { useState } from 'react'
import ExpenseList from "./ExpenseList";
import ExpensesChart from './ExpensesChart'

const Expenses = ({expenses}) => {
  const [year, setYear] = useState('2021')

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === year
  })

  return (
    <Card className="expenses">
    <ExpensesFilter selectedYear={year} saveSelectedYear={setYear} />
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses; 