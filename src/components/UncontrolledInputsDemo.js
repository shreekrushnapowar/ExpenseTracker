import React, { useRef, useState } from "react";

const UncontrolledInputsDemo = () => {
  const [user, setUser] = useState({
    username: "Vinod Kumar",
    city: "Bengaluru",
  });
  const usernameRef = useRef();
  const cityRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();

    const username = usernameRef.current.value;
    const city = cityRef.current.value;
    setUser({ username, city });
  };

  return (
    <>
      <div className="container">
        <h1>User input demo</h1>
        <hr />

        <form onSubmit={submitHandler}>
          <label htmlFor="username">Enter your name: </label>
          <input
            defaultValue={user.username}
            type="text"
            id="username"
            className="form-control"
            ref={usernameRef}
          />
          <label htmlFor="city">Enter your city: </label>
          <input
            defaultValue={user.city}
            type="text"
            id="city"
            className="form-control"
            ref={cityRef}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div>
          <button
            type="button"
            onClick={() => {
              for (let key in user) {
                if (typeof user[key] === "string") {
                  user[key] = user[key].toUpperCase();
                }
              }
              console.log("user is", user);
            }}
            className="btn btn-link"
          >
            Change to upper case
          </button>
        </div>

        <h3>Name: {user.username}</h3>
        <h3>City: {user.city}</h3>
      </div>
    </>
  );
};

export default UncontrolledInputsDemo;
