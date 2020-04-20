import React from 'react';
import GradeTable from './grade-table';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    if (this.state.grades.length === 0) {
      return (
        <div>
          <div className="container extraPadding">
            <Header />
            <GradeTable grades={this.state.grades} />
            <p>No grades recorded</p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container extraPadding">
          <Header />
          <GradeTable grades={this.state.grades}/>
        </div>
      </div>
    );
  }
}
