import React from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import history from "../../history";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (title, description) => {
    this.props.editStream(this.props.match.params.id, { title, description });
    history.push("/");
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    // Form with title and description filled in
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          originDescription={this.props.stream.description}
          originTitle={this.props.stream ? this.props.stream.title : ""}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
