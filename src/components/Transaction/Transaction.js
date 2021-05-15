import './Transaction.scss';
import {useState} from 'react';

export default function Transaction({transaction, saveChanges}) {

    let {val, info, id} = transaction;
    let [areaText, setAreaText] = useState(info);

    let valClass = val > 0 ? ' plus' : ' minus';
    let activeBtn = 'btn-list-item';

    const onInformChange = (e) => {
        setAreaText(e.target.value);
    }

    return (
        <li className='app-list-item'>
            <h4 className={'app-list-title' + valClass}>{val} грн</h4>
                <textarea
                    type='text'
                    name={'area-text'}
                    className='app-list-text'
                    defaultValue={areaText}
                    onChange={onInformChange}
                />
            <div className="app-list-btns">
                <button
                    onClick={() => saveChanges(areaText, id)}
                    className={'app-list-save ' + activeBtn}>Сохранить</button>
                <button className={'app-list-cancel ' + activeBtn}>Отмена</button>
            </div>
        </li>
    );
}