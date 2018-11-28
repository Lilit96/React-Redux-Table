
export const actions = {
    ADD_ROW : "ADD_ROW",
    DEL_ROW : "DEL_ROW",
    EDIT_ROW : "EDIT_ROW",
    EDITABLE : "EDITABLE"
}

const initialState=[
    {
        title:'Effective JavaScript',
        editing: false
    },
    {
        title:'Eloquent JavaScript',
        editing: false
    },
    {
        title:'Javascript allongé the six edition',
        editing: false
    },
]

export default(state=initialState, {type, payload}) => {
        switch(type){
            case actions.ADD_ROW:
            payload.editing=false
            return [
                    ...state,payload  
            ]

            case actions.DEL_ROW:
                return [
                    ...state.filter(i => i.title !== payload)
                ]

            case actions.EDITABLE:
                state.map(item=>{
                    if(item.title===payload){
                       item.editing=true
                    }
                    return item
                })   
                return [
                    ...state
                ]  

            case actions.EDIT_ROW: 
                state.map(item=>{
                    if(item.title===payload.editeTatle){
                        item.editing=false
                        item.title=payload.newTitle
                    }
                    return item
                })
                return [
                    ...state
                ]
            default:
            return state   
       } 
}