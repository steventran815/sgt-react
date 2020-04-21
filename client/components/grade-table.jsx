import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  render() {
    const deleteFunction = this.props.delete;
    const grades = this.props.grades;
    const gradesList = grades.map(singleGrade => {
      return <Grade key={singleGrade.id} grade={singleGrade} delete={deleteFunction}/>;
    });
    return (
      <table id="gradeTable" className='table'>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          { gradesList }
        </tbody>
      </table>
    );
  }
}
