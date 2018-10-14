import React from 'react';



//Add Item Component
export default class AddItem extends React.Component{

  state = {
    error: undefined
  }


  handleAddItemClick = (e) => {
    e.preventDefault();
    const item = e.target.elements.newitem.value.trim();
    const error = this.props.handleAddItem(item);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.newitem.value = '';
    }
  }

  render(){
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddItemClick}>
          <input className="add-option__input" type="text" name="newitem" />
          <button className="button">Add item</button>
        </form>
      </div>
    );
  };
};
