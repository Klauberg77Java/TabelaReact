import React from 'react';

class Contador extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:10
        }
    }

    increaseHandler = ()=>{
        this.setState({
            count: this.state.count +1
        })
    }

    render(){

        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increaseHandler}>+</button>
            </div>
        )
    }
}

export default Contador();