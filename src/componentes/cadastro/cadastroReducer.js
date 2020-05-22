const INITINAL_STATE = {list:[]}

export  default(state = INITINAL_STATE,action) =>{
    switch(action.type){
        case 'BILLING_CYCLES_FETCHED':
            return {...state, list:action.payload.data}
        default:
            return state
    }
}