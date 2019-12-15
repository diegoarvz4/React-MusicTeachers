import React from 'react';
import Navbar from './nav/navbar';
import SearchTeachers from './Search/SearchTeachers';

class Home extends React.Component {

  render(){
    return (
      <div>
        <Navbar />
        <SearchTeachers />
      </div>
    );
  }
}

export default Home;