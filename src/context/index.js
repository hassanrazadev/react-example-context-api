import React, {Component} from "react";

const CounterContext = React.createContext({
    counter: 0,
    incrementCounter: () => {},
    decrementCounter: () => {},
});


const withCounterContext = Component => props => (
    <CounterContext.Consumer>
        {counter => <Component {...props} counter={counter}/>}
    </CounterContext.Consumer>
);

class ContextProvider extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter:  0,
            incrementCounter: this.incrementCounter.bind(this),
            decrementCounter: this.decrementCounter.bind(this),
        }
    }

    incrementCounter = () => {
        console.log('INCREMENT');
        this.setState({counter: this.state.counter + 1})
    };

    decrementCounter = () => {
        console.log('DECREMENT');
        this.setState({counter: this.state.counter - 1})
    };


    render() {
        return (
            <CounterContext.Provider value={this.state}>
                {this.props.children}
            </CounterContext.Provider>
        );
    }
}

export default CounterContext;
export {withCounterContext, ContextProvider};
