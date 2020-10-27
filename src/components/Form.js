import React from "react";

const Form = ({ color, error, onSubmit, onChange }) => {
    return (
        <section className="container">
        <h3> Color Generator </h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            className={error ? "error" : null}
            onChange={onChange}/>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    );
}

export default React.memo(Form);
