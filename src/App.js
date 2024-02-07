import React,{Component} from 'react';
import './App.css';
import MemesList from './components/MemesList';
import MemeForm from './components/MemeForm';
import MyMemes from './components/MyMemes';

class App extends Component {
  constructor(){
    super();

    this.state = {
      text0:"",
      text1:""
    }
  }
  getText0=(text)=>{
    this.setState({text0:text});
  }
  getText1=(text)=>{
    this.setState({text1:text});
  }
  
  render(){
    return (
      <div className="App">
        <h2><u>Welcome to the Meme Generator!</u></h2>
        <MyMemes/>
        <MemeForm getText0={this.getText0} getText1={this.getText1}/>
        <MemesList text0={this.state.text0} text1={this.state.text1}/>
      </div>
    );
  }
  
}

export default App;
