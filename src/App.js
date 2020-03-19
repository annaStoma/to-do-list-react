import React from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';

 
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          newItem: "",
          list: []
      };
  }
  
  updateInput(key, value, description) {
      // update react state
      this.setState({ [key]: value, description });
    //   this.setState({ [key]: description });
  }

  addItem() {
      // create a new item with unique id
      const newItem = {
          id: 1 + Math.random(),
          value: this.state.newItem.split("|")[0],
          description: this.state.newItem.split("|")[1],
      };
      // copy current list of items
      const list = [...this.state.list];
      // add the new item to the list
      list.push(newItem);
      // update state with new list, reset the new item input
      this.setState({
          list,
          newItem: ""
      });

      console.log(newItem);
  }

  deleteItem(id) {
      // copy current list of items
      const list = [...this.state.list];
      // filter out the item being deleted
      const updatedList = list.filter(item => item.id !== id);

      this.setState({ list: updatedList });
  }

  editItem(id,value,description){
 
  const list = [...this.state.list];
      // filter out the item being deleted
      const updatedList = list.filter(item => item.id !== id);

      this.setState({ list: updatedList });
    this.setState({ newItem: value + "|"+ description});
  

  }
  
  componentDidMount()  {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5`)
      .then(res => {  
        const list = res.data;
        // console.log(list)
        this.setState({ list });
      })
  }

  render() {
      return (
      <div className="block">
          <div>
              <p>Введите таску в виде "таска|описание"</p>
          <input type = "text"
          placeholder = " task|description ..."
          value = { this.state.newItem }
          description = { this.state.newItem.split("|")[1] }
          onChange = { e => this.updateInput("newItem", e.target.value || e.target.title, e.target.description) }/>

          <button onClick = {() => this.addItem() }> add </button> 
          <ol> {
              this.state.list.map(item => {
                  return (  
                   
                       <React.Fragment key = {item.id} >
                  <li className="item" >
                      <span className="buttons">
                  
                   <button className="remove"
                      onClick = {
                          () => this.deleteItem(item.id) }>X</button>
                    <button
                      onClick = {
                          () => this.editItem(item.id, item.title || item.value, item.description ) } >edit </button>
                     </span>  
                      { item.title || item.value}
                    </li>
                    <Link to={{ pathname: `/task`, query: item.description }}>  
                                <img  className="arrow" src="https://img.icons8.com/office/30/000000/right.png" alt="img"></img>
                    </Link>
                     </React.Fragment>
                        );})} </ol>        
          </div> 
          </div>
      );
  }
}

export default App;
