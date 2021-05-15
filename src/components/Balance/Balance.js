import './Balance.scss';

export default function Balance({balance}) {
    return (
        <h2 className='app-balance'>
           Основной баланс: {balance} грн
        </h2>
    );
}