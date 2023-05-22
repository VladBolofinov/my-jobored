import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Pagination} from '@mantine/core';

import location from "../../img/icons/location.svg";
import {Empty} from "../empty/Empty";
import './FavoriteVacancy.scss';

export const FavoriteVacancy = ({handleClickStar, onEmptyPage, onDeleteFilter}) => {
    const [startNumber, setStartNumber] = useState(0);
    const [endNumber, setEndNumber] = useState(4);
    const [dataLS, setDataLS] = useState([]);

    useEffect(() => {
        getDataLS();
    }, []);

    const getDataLS = () => {
        const newDataLS = [];
        for (let key of Object.keys(localStorage)) {
            newDataLS.push(JSON.parse(localStorage.getItem(key)));
        }
        setDataLS(newDataLS);
    };

    const onDeleteItemLS = (item) => {
        localStorage.removeItem(`${item.id}`);
        setDataLS(prevDataLS => prevDataLS.filter(dataItem => dataItem.id !== item.id));
    }

    const renderItems = () => {
        return dataLS.slice(startNumber, endNumber).map(item => {
            return (
                <Link to={`/id/${item.id}`} style={{ textDecoration: 'none', color: '#232134' }}>
                <div className="job-item" key={item.id} data-elem={`vacancy-${item.id}`}>
                    <p className='job-header'>{item.prof}</p>
                    <button className={`star ${!item[item.id] ? "active" : ""}`}
                            onClick={(event) => {
                            event.preventDefault();
                            handleClickStar(item.id);
                            onDeleteItemLS(item)}}
                            data-elem={`vacancy-${item.id}-shortlist-button`}>
                    </button>
                    <div className='wrapper-salary'>
                        <p className='salary dot'>{(item.paymentFrom && item.paymentTo)
                            ? `З/п ${item.paymentFrom} - ${item.paymentTo}`
                            : `З/п ${item.paymentFrom || item.paymentTo || 'не указана'}`}
                        </p>
                        <p className='work-type'>{item.workType}</p>
                    </div>
                    <p className='location'><img className='location' src={location} alt="location-icon" />{item.town}</p>
                </div>
                </Link>
            )
        })
    }

    const handlePageChange = (page) => {
        const itemsPerPage = 4;
        setStartNumber((page - 1) * itemsPerPage);
        setEndNumber(page * itemsPerPage);
    }

    return (
        <section className='job-wrapper-favorite'>
            {(dataLS.length !== 0) ? renderItems() : <Empty onEmptyPage={onEmptyPage}
                                                            onDeleteFilter={onDeleteFilter} />}
            <div className="wrapper-favorite-pagination">
                <Pagination
                    total={Math.ceil(dataLS.length / 4)}
                    onChange={handlePageChange}
                />
            </div>
        </section>
    )
}

