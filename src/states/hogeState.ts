import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { hogeAction } from '../actions/hogeAction'

export interface HogeState {
    name: string
    email: string
}

const initialState: HogeState = {
    name: '',
    email: ''
}

export const hogeReducer = reducerWithInitialState(initialState)
    .case(hogeAction.updateName, (state, name) =>{
        return Object.assign([{}, state, {name}])
    })
    .case(hogeAction.updateEmail, (state, email) => {
        return Object.assign([], state, { email })
    })