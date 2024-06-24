import React from "react";
class ClassButton extends React.Component {
  render() {
    return (
      <div className="text-center">
        <button className="btn btn-info">{this.props.buttonText}</button>
      </div>
    );
  }
}

export default ClassButton;
