import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditRecipePage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.recipe
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateRecipe(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Recipe</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              className="form-control"
              name="title"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Ingredients:</label>
            <input
              className="form-control"
              name="ingredients"
              value={this.state.formData.ingredients}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Instructions:</label>
            <input
              className="form-control"
              name="instructions"
              value={this.state.formData.instructions}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            Save Recipe
          </button>&nbsp;&nbsp;
          <Link to='/'>Cancel</Link>
        </form>
      </>
    );
  }
}
export default EditRecipePage;