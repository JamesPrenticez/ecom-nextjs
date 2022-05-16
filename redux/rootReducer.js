import {combineReducers} from 'redux'

import cart from './cart/reducer'
import currentCountry from './currentCountry/reducer'
import toastList from './toaster/reducer'
import userContactInfo from './user_contact_info/reducer'
import userShippingInfo from './user_shipping_info/reducer'

export default combineReducers({
    cart,
    currentCountry,
    toastList,
    userContactInfo,
    userShippingInfo,
})