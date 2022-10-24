export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const add = (value) => {
    return {
        type: 'ADD',
        payload: {
            val: value
        }
    };
};

export const subtract = (value) => {
    return {
        type: 'SUBTRACT',
        val: value
    };
};
export const store_result = (res) => {
    return {
        type: 'STORE_RESULT',
        result: res
    };
};
export const delete_result = (id) => {
    return {
        type: 'DELETE_RESULT',
        resultElementId: id
    };
};