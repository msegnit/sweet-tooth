import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as userAPI from '../../services/user-api';

class SearchBar extends Component {

  state = {
    name: ''
  };

  handleChange = (e) => {
    //this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await userAPI.signup(this.state);
//       // Let <App> know a user has signed up!
//       this.props.handleSignupOrLogin();
//       // Successfully signed up - show GamePage
//       this.props.history.push('/');
//     } catch (err) {
//       // Invalid user data (probably duplicate email)
//       this.props.updateMessage(err.message);
//     }
//   }
     searchSubmit() {
        this.search(this.state.name)
     }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  search(recipeName) {
      let searchResults;
        // const options = {
        //   method: 'GET',
        //   headers: {
        //     'content-type': 'application/json', 
        //     'Authorization': ' Bearer ' + tokenService.getToken()}
        // };
        return fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=0a7fd7be&app_key=
            7bc6e62f436093d21e81179158e7750c&from=0&to=3`).then(res => console.log(res.json()));
      }

  render() {
    return (
      <div>
        <header>Search</header>
        <form onSubmit={this.searchSubmit} >
          <div>
            <input 
              name="name"
              type="text"
              placeholder="Enter Your Recipe Search"   
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <button 
              className="btn btn-default" 
              disabled={this.isFormInvalid()}       
            >
              Submit
            </button>
            &nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
