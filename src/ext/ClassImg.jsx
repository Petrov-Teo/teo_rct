import React from "react";
class ClassImg extends React.Component {
  render() {
    return <img className="img-thumbnail" src={this.props.img} alt={this.props.alt} />;
  }
}

export default ClassImg;
