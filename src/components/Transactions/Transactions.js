import Transaction from '../Transaction/Transaction';
import './Transactions.scss';

export default function Transactions({transactions, saveChanges}) {

    return (
        <ul className='app-list'>
            {
                transactions.map((transaction, i) => <Transaction key={i}
                                                                  transaction={transaction}
                                                                  saveChanges={saveChanges}

                />)
            }
        </ul>
    );
}