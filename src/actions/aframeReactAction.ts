import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory();

export const aframeReactAction = {
    update: actionCreator<string>('ACTION_UPDATE')
    // updateName: actionCreator<string>('ACTIONS_UPDATE_NAME'),
    // updateEmail: actionCreator<string>('ACTIONS_UPDATE_EMAIL')
}