import React from 'react';
import {connect} from 'react-redux';
import Table from './Table';
import {addRow} from '../Actions/Action';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component{   
    addTitle(){
        let addTitle = this.inputVal.value;
        if(addTitle.length > 0){
            this.props.dispatch(addRow(addTitle,'false'));
            this.inputVal.value = '';
        }
    }

    render(){
        return (
            <div className="container">
                <Table /> 
                <div className="row">
                    <div className="input-group col-sm-10">
                        <input placeholder="Add new title" className="form-control" type="text" ref={e => this.inputVal=e} />
                    </div>
                    <button  className="btn btn-secondary btn-lg col-sm-2" onClick={() => this.addTitle()}>Add</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ data: state });

export default connect(mapStateToProps)(App);
