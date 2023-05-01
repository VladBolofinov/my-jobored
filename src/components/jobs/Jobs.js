import './Jobs.scss';
import location from '../../img/icons/location.svg';
import { useState } from 'react';

const Jobs = (props) => {
    const {dataVacancies} = props;
    const [itemsCount, setItemsCount] = useState(4);

    const renderItems = () => {
        const items = dataVacancies.slice(0, itemsCount).map(item => {
            return (
                <div className="job-item">
                    <a href="#">{item.prof}</a>
                    <p>З/п от 70000 rub   Полный рабочий день</p>
                    <img src={location} alt="location-icon"/>
                    <p>{item.town}</p>
                </div>
            )
        })
        return items;
    }

    const loadMore = () => {
        setItemsCount(itemsCount + 4);
    }

    return (
        <section className='job-wrapper'>
            {renderItems()}
            {itemsCount < dataVacancies.length &&
                <button onClick={loadMore}>Показать еще</button>
            }
        </section>
    )
}

export default Jobs;
