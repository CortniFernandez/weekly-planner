import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    var storedList = [];

    if (localStorage.getItem('list')) {
      storedList = JSON.parse(localStorage.getItem('list'));
    }

    this.state = {
      newItem: "",
      list: storedList || []
    }
  }

  updateInput(key,value){
    // update react state
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);
    localStorage.setItem('list', JSON.stringify(list));

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    })
  }

  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];
    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(updatedList));
    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br/>
          <input
            type="text"
            placeholder="type item here..."
            value={this.state.newItem}
            onChange={event => this.updateInput("newItem", event.target.value)}
          />
          <button
            onClick={() => this.addItem()}
          >Add</button>

          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}  
                  >X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;