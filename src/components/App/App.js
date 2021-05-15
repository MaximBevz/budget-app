import './App.css';
import Balance from '../Balance/Balance';
import Transactions from '../Transactions/Transactions';
import Form from "../From/Form";
import {useReducer} from "react";

const balanceReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TRANSACTION' :
            return {...state, transaction: action.payload};
        case 'SET_BALANCE' :
            return {...state, balance: action.payload};
        default:
            return state;
    }
}

export default function App() {

    let [state, dispatch] = useReducer(balanceReducer,{transaction: [], balance: 0});
    let {transaction, balance} = state;

    const saveChanges = (newInfo, id) => {
        const element = transaction.find(el=> el.id === id);

        if(element.info !== newInfo) {
            let newItem = {...element, info: newInfo};
            dispatch({type: 'SET_TRANSACTION', payload: [...transaction(0, id),newItem, ...transaction.slice(id + 1)]});
        }
    }

    const onChangeBalance = (val, info) => {
        dispatch({type: 'SET_TRANSACTION', payload: [{val, info, id: transaction.length}, ...transaction]});
    }

    const newBalance = val => dispatch({type: 'SET_BALANCE', payload: (balance + +val)});

    return (
            <div className="app">
                <Balance balance={balance}/>
                <Form onChangeBalance={onChangeBalance} newBalance={newBalance}/>
                <Transactions transactions={transaction} saveChanges={saveChanges}/>
            </div>
        );
}
