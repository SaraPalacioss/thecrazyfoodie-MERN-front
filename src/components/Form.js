import React, { useState } from "react";
import "../styles/Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {

  const [search, saveSearch] = useState({
    name: '',
    category: ''
  })

  return (
    <div className="form-position">
      <form className="form-style">
        <input
          className="form-control"
          type="text"
          placeholder="Macheroni, Eggs, Pesto,..."
          readOnly
        />
      </form>
      <form className="form-style">
        <select
          className="form-control"
          type="text"
          placeholder="Macheroni, Eggs, Pesto,..."
          readOnly
        />
      </form>
    </div>
  );
};

export default Form;
