import categories from "./components/BuildForm/Categories";
import { useState } from "react";
import ExpenseList from "./components/BuildForm/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./components/BuildForm/ExpenseTracker/ExpenseFilter";
import ExpenseForm from "./components/BuildForm/ExpenseTracker/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 78, category: "Utility" },
    { id: 2, description: "ada", amount: 718, category: "Utility" },
    { id: 3, description: "aba", amount: 8, category: "Groceries" },
    { id: 4, description: "asa", amount: 784, category: "Utility" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category == selectedCategory)
    : expenses;

  return (
    <div className="container">
      <div className="mb-5 mt-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3 mt-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
