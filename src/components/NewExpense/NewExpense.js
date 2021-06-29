import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import React, { useState } from 'react'



const NewExpense = ({onExpensehandle}) => {
    const saveExpenseDataHandler = newExpenseData => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        onExpensehandle(expenseData)
        setIsEditing(false)
    }

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className=' new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense
