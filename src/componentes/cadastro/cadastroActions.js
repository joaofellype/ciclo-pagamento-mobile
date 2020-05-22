import axios from 'axios'

import {
    reset as resetForm,
    initialize
} from 'redux-form'
const BASE_URL = 'http://localhost:3003/'
const INITINAL_VALUES = {credits:[{}],debts:[{}]}
export function getList() {
    const request = axios.get(`${BASE_URL}listarAllBilling`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post', 'createBillingCycle')
}

export function update(values) {
    return submit(values,'put','editBilling')
}
export function Delete(values) {
    return submit(values,'delete','deleteBilling')
}
export function submit(values, method, url) {
    const id = values._id ? '/'+values._id : ''

    return dispatch => {
        axios[method](`${BASE_URL}${url}${id}`, values).then(resp => {
 
            dispatch(init())
        }).catch(err => {
                console.log(err)
        })
    }
}



export function init() {

    return [
        getList(),
        initialize('billingCycleForm', INITINAL_VALUES)
    ]
}