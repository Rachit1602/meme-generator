import React, { Component } from 'react'
import { connect } from 'react-redux'

import MemeItem from './MemeItem';

class MemesList extends Component {
    constructor(){
        super();
        this.state={
            memeLimit:10
        }
    }
  render() {
    return (
      <div>
            {
                this.props.memes.slice(0,this.state.memeLimit).map((meme, index) =>{
                    return (
                        <MemeItem key={index} meme={meme} text0={this.props.text0} text1={this.props.text1}/>
                    )
                })
            }
            <div className='meme-button' onClick={()=>{
                this.setState({memeLimit:this.state.memeLimit+10})
            }}>
                Load More....
            </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(MemesList);