import {Link} from "react-router-dom";
import {IconSearch} from '@tabler/icons-react';
import {TextInput, Button} from '@mantine/core';
import {useSelector,useDispatch} from "react-redux";
import {onAddProfNameValue} from "../../actions";

import location from '../../img/icons/location.svg';
import './Jobs.scss';


export const Jobs = ({
               handleClickStar,
               onSetLocalStorage,
               mainRequest}) => {

    const dispatch = useDispatch();
    const {vacancyList,profNameValue} = useSelector(state => state);
    const renderItems = (list) => (
        list.map(item => {
            return (
                <Link to={`/id/${item.id}`} style={{ textDecoration: 'none', color: '#232134' }}>
                    <div className="job-item" key={item.id} data-elem={`vacancy-${item.id}`}>
                        <p className='job-header'>{item.prof}</p>
                        <button className={`star ${item[item.id] ? "active" : ""}`}
                                onClick={(event)=>{
                                    event.preventDefault();
                                    handleClickStar(item.id);
                                    onSetLocalStorage(item)}}
                                data-elem={`vacancy-${item.id}-shortlist-button`}></button>
                        <div className='wrapper-salary'>
                            <p className='salary dot'>{(item.paymentFrom && item.paymentTo)
                                ? `З/п ${item.paymentFrom} - ${item.paymentTo}`
                                : `З/п ${item.paymentFrom || item.paymentTo || 'не указана' }`}
                            </p>
                            <p className='work-type'>{item.workType}</p>
                        </div>
                        <p className='location'><img className='location' src={location} alt="location-icon"/>{item.town}</p>
                    </div>
                </Link>
            )
        }))

    return (
        <section className='job-wrapper'>
            <TextInput
                data-elem={"search-input"}
                value={profNameValue}
                onChange={(event) =>dispatch(onAddProfNameValue(event.currentTarget.value))}
                icon={<IconSearch size="1.1rem" stroke={1.5} />}
                radius="8px"
                size="md"
                rightSection={
                    <Button
                        data-elem={"search-button"}
                        onClick={()=>mainRequest(1)}>
                        Поиск
                    </Button>
                }
                placeholder="Введите название вакансии"
                rightSectionWidth={100}
            />
            {renderItems(vacancyList)}
        </section>
    )
}
