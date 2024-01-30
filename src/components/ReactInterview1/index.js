import React, { useState } from "react";

import "./style.css";
import CustomSelect from "./CustomSelect";
export const response = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "",
    cities: [
      { id: 1, name: "Delhi" },
      { id: 2, name: "Mumbai" },
      { id: 3, name: "Kolkata" },
    ],
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "",
    cities: [
      { id: 1, name: "Moscow" },
      { id: 2, name: "Denmark" },
      { id: 3, name: "Bromley" },
    ],
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "",
    cities: [
      { id: 1, name: "Richmond" },
      { id: 2, name: "Cambridge" },
      { id: 3, name: "Kolkata" },
    ],
  },
];

export default function InterviewOne() {
  const [cities, setCities] = useState([]);
  const onChnageHandler = (event) => {
    const { value } = event.target;
    const { cities = [] } =
      response.filter((user) => user.id === +value)[0] || {};
    setCities(cities);
  };
  return (
    <div className="container">
      <header>
        <h1>Create Dependable Select component </h1>
      </header>
      <section>
        <CustomSelect
          onChange={onChnageHandler}
          label="Select User"
          items={response}
        />
        {!!cities.length && (
          <CustomSelect label="Select cities" items={cities} />
        )}
      </section>
    </div>
  );
}
