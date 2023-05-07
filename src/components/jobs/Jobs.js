import './Jobs.scss';
import location from '../../img/icons/location.svg';
import { useState, useEffect } from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Button } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import JobService from "../services/JobService";

const Jobs = ({dataFromFilter, vacancyList, onTogleVacancy}) => {

    const [itemsCount, setItemsCount] = useState(4);
    const [profNameValue, setProfNameValue] = useState('');

    const jobService = new JobService();
    const theme = useMantineTheme();
    const loadMore = () => {
        setItemsCount(itemsCount + 4);
    }

    useEffect(()=>{
        jobService.getToken();
        //jobService.getVacancies().then((vacancy) => setDataVacansy(vacancy));
    },[]);

    const renderItems = () => {
        const items = vacancyList.slice(0, itemsCount).map(item => {
            return (
                <div className="job-item">
                    <a href='#'>{item.prof}</a>
                    <p>{(item.paymentFrom && item.paymentTo)
                        ? `З/п ${item.paymentFrom} - ${item.paymentTo}`
                        : `З/п ${item.paymentFrom || item.paymentTo || 'не указана' }`}
                        <span>.</span> {item.workType}</p> {/*доделай эту точку!!!*/}
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
                                                 .then(onTogleVacancy)}>
                        Поиск
                    </Button>
                }
                placeholder="Введите название вакансии"
                rightSectionWidth={100}

            />
            {renderItems()}
            {itemsCount < vacancyList.length &&
                <button onClick={loadMore}>Показать еще</button>
            }
        </section>
    )
}

export default Jobs;
