export const reducer = (state, action) => {
    if(action.type === "login") {
        return {...state, data: action.payload}
    }
}