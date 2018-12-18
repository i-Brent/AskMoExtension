/*global chrome*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./content.css";

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ''
    }
    this.getSelected = this.getSelected.bind(this)
  }

  getSelected(selected) {
    this.setState({selected})
  }

  render() {
    return (
      <div className={'my-extension'}>
        <h3>The Text is :</h3><h3 clasName={'output'}>{this.state.selected}</h3>
      </div>
    )
  }
}

function dumbass() {
const app = document.createElement('div');
app.id = "my-extension-root";
console.log('is this a script that runsd ');
document.body.appendChild(app);
ReactDOM.render(<Main />, app);

// app.style.display = "none";

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
     console.log('request', request);
      if( request.message === "clicked_browser_action") {
        toggle();
      }

      if( request.message === "selected") {
        console.log('selected', request.payload);
        Main.getSelected(request.payload)
      }
   }
);

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}
}

dumbass()
