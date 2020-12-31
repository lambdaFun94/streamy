import React, { useState } from "react";

const StreamForm = ({ onSubmit, originTitle, originDescription }) => {
  const [title, setTitle] = useState(originTitle || "");
  const [description, setDescription] = useState(originDescription || "");

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(title, description);
  };

  const onInputChange = (evt) => {
    evt.target.name === "title"
      ? setTitle(evt.target.value)
      : setDescription(evt.target.value);
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className="ui form">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={onInputChange}
          id="title"
        />
        <label htmlFor="description"> Description</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={onInputChange}
          id="description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    </>
  );
};

export default StreamForm;
