import React from "react";
import categories from "../Categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {/* <option value="Utility">Utility</option>
      <option value="Groceries">Groceries</option>
      <option value="Entertainment">Entertainment</option> */}
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
