import {Link} from "react-router-dom";
import location from "../../img/icons/location.svg";
import './FavoriteVacancy.scss';

const FavoriteVacancy = ({handleClickStar}) => {
    let dataLS = [];
    for (let key of Object.keys(localStorage)) {
        dataLS.push(JSON.parse(localStorage.getItem(key)));
    }

    const onDeleteItemLS = (item) => {
        localStorage.removeItem(`${item.id}`);
    }
    const renderItems = () => {
        const items = dataLS.map(item => {
            return (
                <div className="job-item" key={item.id}>
                    <Link to={`/id/${item.id}`}>{item.prof}</Link>
                    <div className={`star active`} onClick={()=>{handleClickStar(item.id);
                                                                 onDeleteItemLS(item)}}></div>
                    <div className='wrapper-salary'>
                        <p className='salary dot'>{(item.paymentFrom && item.paymentTo)
                            ? `З/п ${item.paymentFrom} - ${item.paymentTo}`
                            : `З/п ${item.paymentFrom || item.paymentTo || 'не указана' }`}
                        </p>
                        <p className='work-type'>{item.workType}</p>
                    </div>
                    <p className='location'><img className='location' src={location} alt="location-icon"/>{item.town}</p>
                </div>
            )
        })
        return items;
    }

    return (
        <section className='job-wrapper'>
            {renderItems()}
        </section>
    )
}

export default FavoriteVacancy;