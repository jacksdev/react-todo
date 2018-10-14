import React from 'react';
import Item from './Item';

const ItemsList = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button
        className="button--link"
        onClick={props.handleClearList}
        >
          clear list
      </button>
    </div>
    {props.items.length === 0 && <p className="widget__message">Please add task to complete</p>}
    {
      props.items.map((items , index) => (
        <Item
          key={index}
          itemText={items}
          count={index +1}
          handleDeleteItem={props.handleDeleteItem}
        />
      ))
    }
  </div>
);


export default ItemsList;
