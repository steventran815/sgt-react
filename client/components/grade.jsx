import React from 'react';

export default class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      grades: []
    };
  }

  handleClick() {
    const deleteId = this.props.grade.id;
    this.props.delete(deleteId);
  }

  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td><button className="btn btn-danger" onClick={this.handleClick}>Delete</button></td>
      </tr>
    );
  }
}
