import React, { useState } from "react";

function Form() {
  const [Name, setName] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(Name);
    console.log("Form is submited..");
    setName("");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form</h1>
      <form>
        <label>Name:-</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={Name}
          onChange={(el) => {
            setName(el.target.value);
          }}
          style={{ height: "40px", width: "250px" }}
        />
        <br />
        <button
          onClick={(e) => {
            handelSubmit(e);
          }}
          style={{
            height: "40px",
            width: "100px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
            fontSize: "15px",
            margin: "10px",
          }}
        >
          Submit
        </button>
        <p>Total Words :- {Name.length}</p>
      </form>
    </div>
  );
}

export default Form;
