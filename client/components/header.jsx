import React from 'react';

export default class Header extends React.Component {

  render() {
    return (

      <div className="row">
        <div className="tableHeader">
          <h1 className="title">Student Grade Table</h1>
          <div className='averageGradeDiv'>
            <h2 className="averageGradeTitle">Average Grade &nbsp;</h2>
            <span className="averageGradeBadge badge badge-secondary"> {this.props.average}</span>
          </div>
        </div>
      </div>
    );
  }
}
