
import React from 'react';

class TimerDisplay extends React.Component {
    state = { time: new Date().toLocaleTimeString}


    componentDidMount(){
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000)
    }
    render() {
        return (
            <div className="timer-display">
                <h1>
                Die Zeit in Deutschland ist:
                <div>
                    {this.state.time}
                </div>
                <p>
                Zeit für mein Schatz Schlafen zu gehen!
                </p>
                </h1>
            </div>
        );
    }
}


export default TimerDisplay;