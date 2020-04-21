import React from 'react';
import GradeTable from './grade-table';
import Header from './header';
import GradeForm from './grade-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);

    this.state = {
      grades: []
    };
  }

  deleteGrade(deleteId) {

    fetch(`api/grades/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(res => res.json())
      .then(data => {
        const deleteGrade = this.state.grades.slice();
        const targetIndex = deleteGrade.findIndex(grade => grade.id === deleteId);
        deleteGrade.splice(targetIndex, 1);
        this.setState({ grades: deleteGrade });
      })
      .catch(error =>
        console.error('Error:', error)
      );
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

  addGrade(newGrade) {
    fetch('./api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(result => {
        const newGrades = this.state.grades.concat(result);
        this.setState({ grades: newGrades });
      })
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

  noGrade() {
    if (this.state.grades.length === 0) return 'reveal';
    return 'hidden';
  }

  render() {
    const noGrades = this.noGrade();

    return (
      <div>
        <div className="container extraPadding">
          <Header average={this.getAverageGrade()} />
          <div className="row">
            <div className="col-md-8">
              <GradeTable grades={this.state.grades} delete={this.deleteGrade}/>
              <p className={noGrades}>No grades recorded</p>
            </div>
            <div className="col-md-4">
              <GradeForm addGrade={this.addGrade}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
