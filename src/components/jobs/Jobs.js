import './Jobs.scss';
import location from '../../img/icons/location.svg';
import { useState, useEffect } from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Button } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import JobService from "../services/JobService";
import {Link} from "react-router-dom";


const Jobs = ({dataFromFilter, vacancyList, onToggleVacancy}) => {

    const [itemsCount, setItemsCount] = useState(4);
    const [profNameValue, setProfNameValue] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const jobService = new JobService();
    const theme = useMantineTheme();
    const loadMore = () => {
        setItemsCount(itemsCount + 4);
    }

    const handleClickStar = (id) => {
        setIsClicked((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };


    useEffect(()=>{
        jobService.getToken();
        //jobService.getVacancies().then((vacancy) => setDataVacansy(vacancy));
    },[]);
    const classes = (id) => `star ${isClicked[id] ? "active" : ""}`;

    const renderItems = () => {
        const items = vacancyList.slice(0, itemsCount).map(item => {
            return (
                <div className="job-item" key={item.id}>
                    <Link to={`/id/${item.id}`}>{item.prof}</Link>

                    <div className={classes(item.id)} onClick={()=>{handleClickStar(item.id)}}></div>

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
            {itemsCount < vacancyList.length &&
                <button onClick={loadMore}>Показать еще</button>
            }
        </section>
    )
}

export default Jobs;
