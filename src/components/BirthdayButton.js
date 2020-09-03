import React from 'react';

class BirthdayButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            clickCount: props.age
        }
    }

    clickHandler = event => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{ this.props.lastName }, { this.props.firstName }</h1>
                <p>Age: { this.state.clickCount }</p>
                <p>Hair Color: { this.props.hairColor }</p>
                <button onClick={this.clickHandler}>Birthday Button for { this.props.firstName } { this.props.lastName }</button>
            </div>
        );
    }
}

export default BirthdayButton;