import React from "react";
class ClassTitle extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-3">{this.props.title}</h1>
      </div>
    );
  }
}

export default ClassTitle;
