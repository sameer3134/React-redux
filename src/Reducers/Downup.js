const initialState = 20;

const changeNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INREMENT": return state + 1;
        case "DEREMENT": return state - 1;
        case "RESET": return initialState ;
        default: return state;
    }
}

export default changeNumber;