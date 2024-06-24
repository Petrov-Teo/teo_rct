import React from "react";
class ClassButton extends React.Component {
  render() {
    return (
      <div className="text-center pt-3">
        <button className="btn btn-dark">{this.props.buttonText}</button>
      </div>
    );
  }
}

export default ClassButton;
