import React,{Component} from 'react'
import { Form,FormControl,FormGroup } from 'react-bootstrap'

export default class MemeForm extends Component{
  constructor(){
    super();
    this.state = {
      top:"",
      bottom:""
    }
  }
  handleChange0=(event)=>{
    this.setState({top:event.target.value});
    this.props.getText0(this.state.top);
  }
  handleChange1=(event)=>{
    this.setState({bottom:event.target.value});
    this.props.getText1(this.state.bottom);
  }
  render(){
    return(
    <div>
      <h4><i>Write Some Text</i></h4>
      <Form inline="true">
        <FormGroup className='form-group'>
            <label className='control-label'>Top</label>
            {" "}
            <FormControl type='text' value={this.state.top} onChange={this.handleChange0}>
            </FormControl>
        </FormGroup>
        <FormGroup className='form-group'>
            <label className='control-label'>Bottom</label>
            {" "}
            <FormControl type='text' value={this.bottom} onChange={this.handleChange1}>
            </FormControl>
        </FormGroup>
      </Form>
    </div>
    )
  }
}
