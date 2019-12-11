import React from 'react';
import './style.css';

class welcomeScreen extends React.Component {
    render() {
        return (
            <div className='welcome'>
                <div className='welcome\_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closeWelcomeScreen}>OK</button>
                </div>
            </div>
        );
    }
}

export default welcomeScreen;