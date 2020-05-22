import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'

import BillingCyleReducer from './componentes/cadastro/cadastroReducer';
const rootReducer = combineReducers({
  
    billingCycle:BillingCyleReducer,
    form:formReducer,
})

export default rootReducer