import React, { useState } from "react";

const UserInputForm = () => {
  const [user, setUser] = useState({ username: "", city: "" });

  const submitHandler = (e) => {
    e.preventdefault();
  };
  const onChangeHandler = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="container">
        <h1>user input demo</h1>
        <hr />
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Enter your name: </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={user.username}
            onChange={onChangeHandler}
          />
          <label htmlFor="city">Enter your city: </label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-control"
            value={user.city}
            onChange={onChangeHandler}
          />
        </form>

        <h3>Name: {user.username}</h3>
        <h3>City: {user.city}</h3>
      </div>
    </>
  );
};

export default UserInputForm;
