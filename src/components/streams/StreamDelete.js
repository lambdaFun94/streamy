import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  const STREAM_ID = props.match.params.id;

  const currStream = useSelector((state) => state.streams[STREAM_ID]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStream(STREAM_ID));
  }, []);

  const renderContent = () => {
    if (!currStream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete "${currStream.title}"?`;
  };

  const actions = (
    <>
      <button
        onClick={() => dispatch(deleteStream(STREAM_ID))}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );
  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

export default StreamDelete;
