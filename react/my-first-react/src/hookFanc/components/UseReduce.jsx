import React, { useReducer } from 'react';

const initialState = { count: 0 };

function myReducer(state, action) {
    if (action.type == 'increment') {
        return { count: state.count + 1 }
    } return { count: state.count - 1 }
}
function Counter() {
    const [state, dispatch] = useReducer(myReducer, initialState);

    return (
        <div>
            {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
}

export default Counter;