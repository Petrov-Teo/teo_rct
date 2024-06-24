import React from "react";

class ClassForm extends React.Component {
  render() {
    return (
      <div className="text-center mt-3">
        <form>
          <label className="d-block pt-2 fs-5" htmlFor={this.props.IdName}>
            {this.props.leableText}
          </label>
          <input type={this.props.type} id={this.props.IdName} placeholder={this.props.placeholder} />
        </form>
      </div>
    );
  }
}
export default ClassForm;
