import React, { Component } from "react";

class life_cycle extends Component {
    constructor(props)
    {
        super(props)
        this.state={points:0}
        this.handlePoints=this.handlePoints.bind(this)
    }
    
  render() {
    return <div>hello world</div>;
  }
}

export default life_cycle;
