import { Action } from 'typescript-fsa'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { hogeAction } from '../actions/hogeAction'
import { HogeComponent } from '../components/hogeComponent'

export interface HogeAction {
    updateName: (v: string) => Action<string>
    updateEmail: (v: string) => Action<string>
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        updateName: (v: string) => dispatch(hogeAction.updateName(v)),
        updateEmail: (v: string) => dispatch(hogeAction.updateEmail(v))
    }
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.hoge)
}

export default connect(mapStateToProps, mapDispatchToProps)(HogeComponent)