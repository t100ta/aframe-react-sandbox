import { reducerWithInitialState } from 'typescript-fsa-reducers'
// import { aframeReactAction } from '../actions/aframeReactAction'

export interface AframeReactState {
    // name: string
    // email: string
}

const initialState: AframeReactState = {
    // name: '',
    // email: ''
}

export const aframeReactReducer = reducerWithInitialState(initialState)
    // .case(hogeAction.updateName, (state, name) =>{
    //     return Object.assign([{}, state, {name}])
    // })
    // .case(hogeAction.updateEmail, (state, email) => {
    //     return Object.assign([], state, { email })
    // })