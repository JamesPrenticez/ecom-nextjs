import {combineReducers} from 'redux'

import cart from './cart/reducer'
import currentCountry from './currentCountry/reducer'

export default combineReducers({
    cart,
    currentCountry,
})



