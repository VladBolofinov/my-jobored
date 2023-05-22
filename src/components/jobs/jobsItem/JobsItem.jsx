import location from "../../../img/icons/location.svg";
import './JobsItem.scss';
import { useParams } from 'react-router-dom';
import {Header} from "../../header/Header";
export const JobsItem = ({vacancyList}) => {

    const { id } = useParams();
    let item = vacancyList.find(item => item.id == id);
    if (!item) {
        item = JSON.parse(localStorage.getItem(id));
    }
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