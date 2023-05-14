import {Link} from "react-router-dom";
import location from "../../img/icons/location.svg";
import './FavoriteVacancy.scss';

const FavoriteVacancy = ({vacancyList,handleClickStar}) => {

    const renderItems = () => {
        const items = vacancyList.map(item => {
            return (
                <div className="job-item" key={item.id}>
                    <Link to={`/id/${item.id}`}>{item.prof}</Link>
                    <div className={`star ${item[item.id] ? "active" : ""}`} onClick={()=>{handleClickStar(item.id)}}></div>
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