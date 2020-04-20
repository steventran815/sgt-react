import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);

    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeCourse(event) {
    const courseValue = event.target.value;
    this.setState({ course: courseValue });
  }

  handleChangeGrade(event) {
    const gradeValue = event.target.value;
    this.setState({ grade: gradeValue });
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group"></div>
        <div className="input-group">
          <div className="input-group-addon iconAndBackground">
            <i className="fa fa-user formIcon"></i>
          </div><input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName} placeholder="Student Name" />
        </div>

        <div className="input-group">
          <div className="input-group-addon iconAndBackground">
            <i className="fa fa-list-alt formIcon"></i>
          </div><input type="text" className="form-control" value={this.state.course} onChange={this.handleChangeCourse} placeholder="Student Course" />
        </div>

        <div className="input-group">
          <div className="input-group-addon iconAndBackground">
            <i className="fa fa-graduation-cap formIcon"></i>
          </div><input type="text" className="form-control" value={this.state.grade} onChange={this.handleChangeGrade} placeholder="Student Grade" />
        </div>
        <div className="button-group">
          <button type="submit" name="add" id="addButton" className="btn btn-success addButton">Add</button>
          <button type="reset" name="cancel" id="cancelButton" className="btn btn-outline-secondary">Cancel</button>
        </div>
      </form>
    );
  }
}
