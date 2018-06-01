import React, { Component, PropTypes } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
//curl braces are used when you import from export by name.
import { About } from './About';
import Home from './Home';
import Content from './Content';
import axios from 'axios';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: null
    }
  }

  getUserData(){
    axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(({ data }) => {
            console.log({data});
            this.setState(
                { userData: data }
            );
        })
        .catch(function (error) {
            console.log(error);
        });
    
  }
  componentDidMount() {
    this.getUserData()
}

  render() {
    console.log({userData: this.state.userData})

    return (
      <div>
        <nav >
          <ul >

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/content">Content</Link></li>

          </ul>
        </nav>
        <Home data={this.state.userData} />
        <Content data={this.state.userData} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Content" component={Content} />
        </Switch>
      </div>
    );
  }
}

export default App;
