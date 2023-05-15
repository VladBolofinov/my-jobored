import './Jobs.scss';
import location from '../../img/icons/location.svg';
import { useState, useEffect } from 'react';
import {TextInput, TextInputProps, ActionIcon, useMantineTheme, Button, Pagination} from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import JobService from "../services/JobService";
import {Link} from "react-router-dom";

const Jobs = ({dataFromFilter, vacancyList, onToggleVacancy, handleClickStar, onSetLocalStorage,totalVacancies}) => {

    const [itemsCount, setItemsCount] = useState(4);
    const [profNameValue, setProfNameValue] = useState('');
    const jobService = new JobService();
    const theme = useMantineTheme();
    const loadMore = () => {
        setItemsCount(itemsCount + 4);
    }

    useEffect(()=>{
        jobService.getToken();
    },[]);

    const handlePageChange = (page) => {
        jobService.getVacancies(profNameValue,dataFromFilter.salaryFrom,dataFromFilter.salaryTo,dataFromFilter.keyValue,page-1)
            .then(onToggleVacancy)
    }


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
                onChange={(event) => setProfNameValue(event.currentTarget.value)}
                icon={<IconSearch size="1.1rem" stroke={1.5} />}
                radius="8px"
                size="md"
                rightSection={
                    <Button
                        onClick={() => jobService.getVacancies(profNameValue,dataFromFilter.salaryFrom,dataFromFilter.salaryTo,dataFromFilter.keyValue)
                                                 .then(onToggleVacancy)}>
                        Поиск
                    </Button>
                }
                placeholder="Введите название вакансии"
                rightSectionWidth={100}
            />
            {renderItems()}
            <Pagination
                total={Math.ceil(totalVacancies / 4)}
                onChange={handlePageChange}
            />

        </section>
    )
}

export default Jobs;
