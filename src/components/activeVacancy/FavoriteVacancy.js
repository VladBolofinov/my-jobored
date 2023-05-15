import { Link } from "react-router-dom";
import location from "../../img/icons/location.svg";
import './FavoriteVacancy.scss';
import Empty from "../empty/Empty";
import { Pagination } from '@mantine/core';
import { useState } from "react";

const FavoriteVacancy = ({ handleClickStar }) => {
    const [startNumber, setStartNumber] = useState(0);
    const [endNumber, setEndNumber] = useState(4);

    let dataLS = [];

    for (let key of Object.keys(localStorage)) {
        dataLS.push(JSON.parse(localStorage.getItem(key)));
    }
    console.log(dataLS);

    const onDeleteItemLS = (item) => {
        localStorage.removeItem(`${item.id}`);
    }

    const renderItems = () => {
        const items = dataLS.slice(startNumber, endNumber).map(item => {
            return (
                <div className="job-item" key={item.id}>
                    <Link to={`/id/${item.id}`}>{item.prof}</Link>
                    <div className={`star ${!item[item.id] ? "active" : ""}`} onClick={() => {
                        handleClickStar(item.id);
                        onDeleteItemLS(item)
                    }}></div>
                    <div className='wrapper-salary'>
                        <p className='salary dot'>{(item.paymentFrom && item.paymentTo)
                            ? `З/п ${item.paymentFrom} - ${item.paymentTo}`
                            : `З/п ${item.paymentFrom || item.paymentTo || 'не указана'}`}
                        </p>
                        <p className='work-type'>{item.workType}</p>
                    </div>
                    <p className='location'><img className='location' src={location} alt="location-icon" />{item.town}</p>
                </div>
            )
        })
        return items;
    }

    const handlePageChange = (page) => {
        const itemsPerPage = 4;
        setStartNumber((page - 1) * itemsPerPage);
        setEndNumber(page * itemsPerPage);
    }

    return (
        <section className='job-wrapper-favorite'>
            {(dataLS.length !== 0) ? renderItems() : <Empty />}
            <Pagination
                total={Math.ceil(dataLS.length / 4)}
                onChange={handlePageChange}
                variant="tabs"
                maxButtons={5}
            />
        </section>
    )
}

export default FavoriteVacancy;
