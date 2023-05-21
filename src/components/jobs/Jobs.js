import './Jobs.scss';
import location from '../../img/icons/location.svg';
import {TextInput, TextInputProps, ActionIcon, Button} from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import {Link} from "react-router-dom";
//сделать чтобы пагинация обновлялась с первого числа каждый запрос
//
const Jobs = ({vacancyList,
               handleClickStar,
               onSetLocalStorage,
               handleProfNameValue,
               mainRequest,
               profNameValue}) => {

    const renderItems = () => {
        const items = vacancyList.map(item => {
            return (
                <div className="job-item" key={item.id}>
                    <Link to={`/id/${item.id}`}>{item.prof}</Link>
                    <div className={`star ${item[item.id] ? "active" : ""}`} onClick={()=>{handleClickStar(item.id);
                                                                                            onSetLocalStorage(item)}}></div>
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
            <TextInput
                value={profNameValue}
                onChange={(event) =>handleProfNameValue(event.currentTarget.value)}
                icon={<IconSearch size="1.1rem" stroke={1.5} />}
                radius="8px"
                size="md"
                rightSection={
                    <Button
                        onClick={()=>mainRequest(1)}>
                        Поиск
                    </Button>
                }
                placeholder="Введите название вакансии"
                rightSectionWidth={100}
            />
            {renderItems()}
        </section>
    )
}

export default Jobs;
