import React from 'react';
import './App.css';
import compute from '../logic/compute'
import DisplayPanel from './DisplayPanel'
import ButtonsPanel from './ButtonsPanel'
import 'normalize-css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null
        };
    }
    // getInitialState () {
    //   return {
    //     total: null,
    //     next: null,
    //     oprate: null
    //   }
    // }
    handleClick = (buttonName) => {
        console.log(buttonName);
        this.setState(compute(this.state, buttonName));
    }

    render() {
        return (
            <div className="App">
                <DisplayPanel value={this.state.next || this.state.total || 0}/>
                <ButtonsPanel clickHandler={this.handleClick}/>
            </div>
        );
    }
}

export default App;
