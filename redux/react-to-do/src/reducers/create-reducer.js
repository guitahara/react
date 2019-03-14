export default (initialState, handleActions) => 
    (state = initialState, action) => 
        handleActions.hasOwnProperty(action.type)
        ? handleActions[action.type](state,action)
        : state 