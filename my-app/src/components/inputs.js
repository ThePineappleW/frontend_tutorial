import React from 'react';

//from reactgo.com
class Inputs extends React.Component {
    state = {
        text: '',
    };

    handleInput = event => {
        this.setState({ name: event.target.value })
    };
    
    logValue = () => {
        console.log(this.state.name);
    };
    
    render() {
        return (
            <div>
                <input onChange={this.handleInput} placeholder="Enter name" />
                <button onClick={this.logValue}>Log value</button>
            </div>
        )
    }
}

export default Inputs;