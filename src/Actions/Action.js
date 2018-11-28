import {actions} from '../Reducers/Reducer';

export function addRow(title,bool){
    return {type:actions.ADD_ROW, payload:{title,bool}}
}

export function delRow(itemId){
    return {type:actions.DEL_ROW, payload: itemId}
}
export function editable(item){
    return{type:actions.EDITABLE, payload:item}
}

export function editRow(newTitle,editeTatle){
    return {type:actions.EDIT_ROW, payload:{newTitle,editeTatle}}
}