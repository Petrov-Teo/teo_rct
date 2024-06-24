import React from "react";
class ClassTitle extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-bg-dark p-3 text-center">{this.props.title}</h1>
      </div>
    );
  }
}

export default ClassTitle;
