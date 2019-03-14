import {SET_VISIVILITY_FILTER} from './actions'

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIVILITY_FILTER,
    payload: {filter}
})