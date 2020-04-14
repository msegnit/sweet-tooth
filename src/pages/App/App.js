import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import * as recipeAPI from '../../services/recipe-api';
import * as userAPI from '../../services/user-api';
//import RecipeCard from '../../components/RecipeCard/RecipeCard'
import NavBar from '../../components/NavBar/NavBar'
import RecipeListPage from '../../pages/RecipeListPage/RecipeListPage';
import AddRecipePage from '../../pages/AddRecipePage/AddRecipePage';
import RecipeDetailPage from '../../pages/RecipeDetailPage/RecipeDetailPage';
import EditRecipePage from '../../pages/EditRecipePage/EditRecipePage';

class App extends Component {
  state = {
    user: userAPI.getUser(),
    recipes: []
  };

  handleAddRecipe = async newRecData => {
    const newRec = await recipeAPI.create(newRecData);
    this.setState(state => ({
      recipes: [...state.recipes, newRec]
    }),
    () => this.props.history.push('/'));
  }

  handleUpdateRecipe = async updatedRecData => {
    const updatedRecipe = await recipeAPI.update(updatedRecData);
    const newRecipesArray = this.state.recipes.map(p => 
      p._id === updatedRecipe._id ? updatedRecipe : p
    );
    this.setState(
      {recipes: newRecipesArray},
      () => this.props.history.push('/')
    );
  }

  handleDeleteRecipe= async id => {
    await recipeAPI.deleteOne(id);
    this.setState(state => ({
      recipes: state.recipes.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

  async componentDidMount() {
    const recipes = await recipeAPI.index();
    this.setState({ recipes });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to sweetTooth</h1>
            <NavLink exact to='/'>Recipe Index</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>Add Recipe</NavLink>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <main>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={() => 
            <RecipeListPage
              recipes={this.state.recipes}
              handleDeleteRecipe={this.handleDeleteRecipe}
            />
          } />
          <Route exact path='/add' render={() => 
            <AddRecipePage
              handleAddRecipe={this.handleAddRecipe}
            />
          } />
          <Route exact path='/details' render={({location}) => 
            <RecipeDetailPage location={location}/>
          } />
          <Route exact path='/edit' render={({location}) => 
            <EditRecipePage
              handleUpdateRecipe={this.handleUpdateRecipe}
               location={location}
              />
          } />
        </main>
      </div>
    );
  }
}

export default App;
