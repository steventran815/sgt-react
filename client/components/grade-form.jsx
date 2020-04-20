import React from 'react';

export default class GradeForm extends React.Component {

  render() {
    return (
      <form>
        <div className="form-group"></div>
        <div className="input-group">
          <div className="input-group-addon iconAndBackground">
            <i className="fa fa-user formIcon"></i>
          </div><input type="text" className="form-control" name="name" id="studentNameInput" placeholder="Student Name" />
        </div>

        <div className="input-group">
          <div className="input-group-addon iconAndBackground">
            <i className="fa fa-list-alt formIcon"></i>
          </div><input type="text" className="form-control" name="name" id="studentCourseInput" placeholder="Student Course" />
        </div>

        <div className="input-group">
          <div className="input-group-addon iconAndBackground">
            <i className="fa fa-graduation-cap formIcon"></i>
          </div><input type="text" className="form-control" name="name" id="studentGradeInput" placeholder="Student Grade" />
        </div>
        <div className="button-group">
          <button type="submit" name="add" id="addButton" className="btn btn-success addButton">Add</button>
          <button type="reset" name="cancel" id="cancelButton" className="btn btn-outline-secondary">Cancel</button>
        </div>
      </form>
    );
  }
}
