import React from 'react';
import { connect } from 'react-redux';
import {delRow} from '../Actions/Action';
import {editRow} from '../Actions/Action';
import {editable} from '../Actions/Action';

import '../index.css';


class Table extends React.Component{
    constructor(){
        super();
        this.state=({
            newTitle:''
        });
    }

    deleteItem(item){
        this.props.dispatch(delRow(item));
    }
   
    editingItem(item){
         this.props.dispatch(editable(item));
    }

    handleChangeUser(e){
       this.setState({
            newTitle:e.target.value
       });
    }

    endEditing(editeTitle){
            this.props.dispatch(editRow(this.state.newTitle, editeTitle));
            this.setState({
                newTitle:''
            });
    }
    
    render(){
        return <div >
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>  
                <tbody>
                {
                 this.props.data.map((item,index)=>{
                    return (      
                        <tr key={index} >
                            <td>
                                {index+1}
                            </td>
                            <td className="input-width">  
                            {
                                (item.editing) ?
                                 <div className="input-group row">
                                    <input 
                                        className="col-sm-10 form-control"
                                        type="text"
                                        onChange={e=>this.handleChangeUser(e)}
                                        value={this.state.newTitle}
                                    />
                                    <div className="Checked ml-2 mt-1" onClick={e=>this.endEditing(item.title)}></div>
                                </div> :
                                 item.title
                            }
                            </td>
                            <td className="d-flex flex-row ">
                                <div className="Edit mr-3" onClick={()=>this.editingItem(item.title)}></div>
                                <div className="Delete" onClick={()=>this.deleteItem(item.title)}></div>  
                            </td>
                        </tr>                       
                    )
                 }) 
                }
                </tbody>
            </table> 
        </div>
    }
}

const mapStateToProps = state => ({ data:state });

export default connect(mapStateToProps)(Table);