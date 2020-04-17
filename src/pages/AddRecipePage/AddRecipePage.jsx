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
        {/* <h2>Add Recipe</h2> */}
        <form className="ui form"
         ref={this.formRef} autoComplete="off" 
         onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Title:</label>
            <input
              name="title"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Ingredients:</label>
            <input
              name="ingredients"
              value={this.state.formData.ingredients}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Instructions:</label>
            <input
              name="instructions"
              value={this.state.formData.instructions}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="ui large button"
            disabled={this.state.invalidForm}
          >
            Add Recipe To Your List
          </button>
        </form>
      </>
    );
  }
}
export default AddRecipePage;