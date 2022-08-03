import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPeople';



class App extends Component {
  state ={
    people: [
      {name: 'Yoshi', age: '18', favColor: 'green', id:1},
      {name: 'DOOM', age: '45', favColor: 'red', id:2},
      {name: 'Mario', age: '25', favColor: 'blue', id:3}
    ]
  }

  addPerson = (person) => {
    person.id = Math.random();
    let people = [...this.state.people, person]
    this.setState({
      people: people
    })
  }

  deletePerson = (id) => {
    // console.log(id);
    let people = this.state.people.filter(person => {
      return person.id !== id
    });
    this.setState({
      people: people
    });
  }

  componentDidMount() {
    console.log('component mounted')
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
render(){
return (
  <div className="App">
    <h1>My first React App!</h1>
    <p>Hey there!</p>
    <People people={this.state.people} deletePerson={this.deletePerson}/>
    <AddPerson addPerson={this.addPerson}/>
  </div>
);

}
}
export default App;
