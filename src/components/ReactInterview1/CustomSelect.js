import React from "react";

export default function CustomSelect({ items, onChange, label }) {
  const onChangeHandler = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <select onChange={onChangeHandler}>
      <option>{label}</option>
      {items.map((user) => {
        return <option value={user.id}> {user.name}</option>;
      })}
    </select>
  );
}
