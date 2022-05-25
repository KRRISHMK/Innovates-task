import React, { useState } from "react";
import { getList } from "../config/Api";
import Table from "./Table";

const HomePage = () => {
  const [name, setName] = useState();
  const [fork, setFork] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = async () => {
    let data = {
      name,
      fork,
    };
    await getList(data, (result, err) => {
      if (err) {
        setList([]);
      }
      console.log("result--->", result);
      setList(result);
    });
  };

  return (
    <div className="container">
      <div className="card p-3">
        <form>
          <label className="pe-2">Github userName: </label>
          <input
            className="pe-1"
            name="userName"
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              if (e && e.target && e.target.value) {
                setName(e.target.value);
              }
            }}
          />
          <label className="ps-2 pe-2">Include Forks :</label>
          <input
            className="pe-3"
            type="checkbox"
            name="fork"
            onClick={(e) => {
              if (e && e.target && e.target.value === "on") {
                setFork(!fork);
              }
            }}
          />
          <span className="ps-2">
            <button type="button" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </span>
        </form>
        <Table list={list} fork={fork} />
      </div>
    </div>
  );
};

export default HomePage;
