import './Jobs.scss';
import location from '../../img/icons/location.svg';
import { useState } from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { Button } from '@mantine/core';

const Jobs = (props) => {
    const {dataVacancies} = props;
    const [itemsCount, setItemsCount] = useState(4);
    const theme = useMantineTheme();
    console.log(props);
    const renderItems = () => {
        const items = dataVacancies.slice(0, itemsCount).map(item => {
            return (
                <div className="job-item">
                    <a href="#">{item.prof}</a>
                    <p>{(item.paymentFrom && item.paymentTo)
                        ? `З/п ${item.paymentFrom} - ${item.paymentTo}`
                        : `З/п ${item.paymentFrom || item.paymentTo}`}
                        <span>.</span> {item.workType}</p> {/*доделай эту точку!!!*/}
                    <p className='location'><img className='location' src={location} alt="location-icon"/>{item.town}</p>
                </div>
            )
        })
        return items;
    }

    const loadMore = () => {
        setItemsCount(itemsCount + 4);
    }

    return (
        <section className='job-wrapper'>
            <TextInput
                icon={<IconSearch size="1.1rem" stroke={1.5} />}
                radius="8px"
                size="md"
                rightSection={
                    <Button>
                        Поиск
                    </Button>
                }
                placeholder="Введите название вакансии"
                rightSectionWidth={100}
                {...props}
            />
            {renderItems()}
            {itemsCount < dataVacancies.length &&
                <button onClick={loadMore}>Показать еще</button>
            }
        </section>
    )
}

export default Jobs;
