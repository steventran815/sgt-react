import React from 'react';
import GradeTable from './grade-table';
import Header from './header';
import GradeForm from './grade-form';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('./api/grades')
      .then(res => res.json())
      .then(result =>
        this.setState({
          grades: result
        }))
      .catch(err => console.error(err));
  }

  getAverageGrade() {

    let sumOfGrades = 0;
    if (this.state.grades.length > 0) {
      for (let i = 0; i < this.state.grades.length; i++) {
        sumOfGrades += this.state.grades[i].grade;
      }
      const averageGrade = Math.round(sumOfGrades / this.state.grades.length);
      return averageGrade;
    } else {
      return 'N/A';
    }
  }

  render() {
    if (this.state.grades.length === 0) {
      return (
        <div>
          <div className="container extraPadding">
            <Header average={this.getAverageGrade()}/>
            <GradeTable grades={this.state.grades} />
            <p>No grades recorded</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="container extraPadding">

          <Header average={this.getAverageGrade()} />

          <div className="row">
            <div className="col-md-8">
              <GradeTable grades={this.state.grades}/>
            </div>
            <div className="col-md-4">
              <GradeForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
