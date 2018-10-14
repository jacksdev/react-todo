
import React from 'react';
import ReactDOM from 'react-dom';

import AddItem from './AddItem';
import Header from './Header';
import Item from './Item';
import ItemsList from './ItemsList';
import SelectItem from './SelectItem';
import ItemModal from './ItemModal';

class ToDoApp extends React.Component{

  state = {
    items: [],
    selectedItem: undefined
  };


  //METHODS
  handleClearList = () => {
    this.setState(() => ({ items:[] }));
  };

  handleAddItem = (item) => {
    if(!item){
      return 'Enter valid value '
    }else if (this.state.items.indexOf(item) > -1) {
      return 'Item already on list'
    }
    this.setState((prevState) => ({items: prevState.items.concat(item)}));
  };

  handleSelectedItem = () => {
    const randomItemIndex = Math.floor(Math.random() * this.state.items.length);
    const item = this.state.items[randomItemIndex];

    this.setState(() => (
      {
        selectedItem: item
      }
    ))
  }

  handleClearRandomItem = () => {
    this.setState(() => ({
      selectedItem: undefined
    }))
  }

  handleDeleteItem = (itemToRemove) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => itemToRemove !== item)
    }));
  };

  //Life cycles
  componentDidMount(){
    try {
      const json = localStorage.getItem('items')
      const items = JSON.parse(json);

      if (items) {
        this.setState(() => ({items}))
      }
      console.log('yo mounted');

    } catch (e) {
      //do nothing
    }
  };

  componentDidUpdate(prevProps, prevState){
    if (prevState.items.length !== this.state.items.length) {
      const json = JSON.stringify(this.state.items);
      localStorage.setItem('items' , json)
    }
  };


// !!!! --- RENDER ---!!!

  render(){
    const title ="To-do App";
    const subtitle = "Get these done and then you can chill.";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />

        <div className="container">
          <SelectItem
            hasOptions={this.state.items.length > 0}
            handleSelectedItem={this.handleSelectedItem}
          />
          <div className="widget">
            <ItemsList
              handleClearList={this.handleClearList}
              handleDeleteItem={this.handleDeleteItem}
              items={this.state.items}
            />
            <AddItem handleAddItem={this.handleAddItem} />

          </div>
        </div>
        <ItemModal
          handleClearRandomItem={this.handleClearRandomItem}
          selectedItem={this.state.selectedItem}
        />
      </div>
    );
  };
};

ToDoApp.defaultProps = {
  items:['1' , 'two' , 'three']
}

export default ToDoApp;
