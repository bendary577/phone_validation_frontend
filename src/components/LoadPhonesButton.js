import React, { Component } from 'react';

class LoadPhonesButton extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
                <div className="text-center">
                    <button className="btn btn-success" onClick={()=>{this.props.handleClick()}}>Load All Phone Numbers</button>
                </div>
        )
    }
}

export default LoadPhonesButton;