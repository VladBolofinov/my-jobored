import location from "../../../img/icons/location.svg";
import './JobsItem.scss';
import { useParams } from 'react-router-dom';
import Header from "../../header/Header";
const JobsItem = ({vacancyList}) => {

    const { id } = useParams();
    const num = id;
    const item = vacancyList.find(item => item.id == num);
    const htmlText = item.vacancyDescr;

    return (
        <>
            <Header/>
            <div className='wrapper-item'>
                <div className="job-item">
                    <p className='profession'>{item.prof}</p>
                    <div className='wrapper-salary'>
                        <p className='salary dot'>{(item.paymentFrom && item.paymentTo)
                            ? `З/п ${item.paymentFrom} - ${item.paymentTo}`
                            : `З/п ${item.paymentFrom || item.paymentTo || 'не указана' }`}
                        </p>
                        <p className='work-type'>{item.workType}</p>
                    </div>
                    <p className='location'><img className='location' src={location} alt="location-icon"/>{item.town}</p>
                </div>
                <div className='job-item-descr'>
                    <div className='descr-items' dangerouslySetInnerHTML={{ __html: htmlText }}/>
                </div>
            </div>
        </>
    )
}

export default JobsItem;