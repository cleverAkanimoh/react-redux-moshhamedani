import * as actions from './actionTypes'

export function actionsCreator(desc) {
    return {
        type: actions.Bug_Added,
        payload: {
          description: desc
        }
      }
}

export default function actionsRemover(id) {
    return {
      type: actions.Bug_Removed,
      payload: {
        id
      }
    }
}