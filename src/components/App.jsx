import "modern-normalize";
import "./App.css";
import { useState } from "react";

import LoginForm from "./loginform/LoginForm";
import Product from "./Product";
import SearchBar from "./searchbar/SearchBar";
import LangSwitcher from "./langswitcher/LangSwitcher";
import CoffeCapSize from "./cofferadio/CoffeCapSize";
import LicenseCheck from "./license/LicenseCheck";
import LoginFormHight from "./login/LoginFormHight";

import initialTasks from "../task.json";
import TaskList from "./tasklist/TaskList";
import FormTask from "./formtask/FormTask";
import Filter from "./filtertasks/Filter";
import FeedbackForm from "./formikform/Formik";

export default function App() {
  const [lang, setLang] = useState("uk");
  const [coffeSize, setCoffeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);
  const [valueFormFields, setValueFormField] = useState({
    login: "",
    password: "",
  });
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const handleLogin = (userData) => {
    console.log(" userData", userData);
  };
  const handleSizeChange = (evt) => {
    setCoffeSize(evt.target.value);
  };
  const handleLinceseCheckt = (evt) => {
    setHasAccepted(evt.target.value);
  };
  const handleChange = (evt) => {
    setValueFormField({
      ...valueFormFields,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(valueFormFields);
    setValueFormField({
      login: "",
      password: "",
    });
  };
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  return (
    <div className="main">
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <CoffeCapSize size={coffeSize} onSelect={handleSizeChange} />
      <LicenseCheck check={hasAccepted} onChecked={handleLinceseCheckt} />
      <LoginFormHight
        valueFild={valueFormFields}
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className="section-list">
        <FormTask onAdd={addTask} />
        <Filter value={filter} onFilter={setFilter} />
        <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      </div>
      <div>
        <h3>Work with Formik</h3>
        <FeedbackForm />
      </div>
    </div>
  );
}
