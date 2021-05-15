import './Form.scss';
import {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VAL' :
            return {...state, val: action.payload};
        case 'SET_INFO' :
            return {...state, info: action.payload};
        default :
            return state;
    }
}

export default function Form({onChangeBalance, newBalance}) {

    let [state, dispatch] = useReducer(reducer, {val: '', info: ''});
    let {val, info} = state;

    const changeItem = e => dispatch(e.target.name === 'val' ?
        {type: 'SET_VAL', payload: e.target.value} : {type: 'SET_INFO', payload: e.target.value});

    function saveChanges(e) {
        e.preventDefault();

        onChangeBalance(val, info);

        dispatch({type: 'SET_VAL', payload: ''});
        dispatch({type: 'SET_INFO', payload: ''});
    }

    return (
        <form onSubmit={saveChanges}
              className='app-form'
        >
            <input
                type='number'
                placeholder='Сумма'
                name={'val'}
                onChange={changeItem}
                className='app-form-input'
                value={val}
            />
            <input
                type='text'
                placeholder='Описание'
                name={'info'}
                onChange={changeItem}
                className='app-form-input'
                value={info}
            />
            <button
                className='app-form-btn'
                onClick={() => newBalance(val)}
            >Сохранить</button>
        </form>
    );
}
