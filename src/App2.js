import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {withCounterContext} from './context'

class App2 extends Component {

    render() {
        return (
            <div className="container-fluid h-100vh d-flex justify-content-center align-items-center">
                <div style={{width: "250px"}}>
                    <h2 className="text-center mb-4">App2</h2>
                    <div className="card border-dark w-100">
                        <div className="card-body">
                            <h3 className="text-center mb-4">Counter</h3>
                            <div className="row">
                                <div className="col-4">
                                    <button className="btn btn-success rounded-0"
                                            onClick={this.props.counter.incrementCounter}>+
                                    </button>
                                </div>
                                <h2 className="col-4 text-center">{this.props.counter.counter}</h2>
                                <div className="col-4 text-right">
                                    <button className="btn btn-danger rounded-0"
                                            onClick={this.props.counter.decrementCounter}>-
                                    </button>
                                </div>
                            </div>
                            <small className='text-center d-block mt-3 text-info'>Using Context API</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withCounterContext(App2);
