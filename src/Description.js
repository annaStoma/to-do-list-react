import React from 'react';
import './App.css';
 
class DescrPageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: this.props.location.query};
}

  render() {
    // console.log(this.state.data);
    return (
    <div>
       Props: {this.state.data}
    </div>
    )
  }
}

export default DescrPageComponent;