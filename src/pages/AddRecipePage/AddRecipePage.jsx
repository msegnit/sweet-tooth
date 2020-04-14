import React, {Component} from 'react';

class AddRecipePage extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: '',
      ingredients: '',
      instructions: ''
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddRecipe(this.state.formData);
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
        <h1>Add Recipe</h1>
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
            className="btn"
            disabled={this.state.invalidForm}
          >
            Add Recipe To Your List!
          </button>
        </form>
      </>
    );
  }
}
export default AddRecipePage;