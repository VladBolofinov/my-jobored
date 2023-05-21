import './Filter.scss';
import { Select, TextInput, Button } from '@mantine/core';
import { IconChevronUp, IconSelector, IconChevronDown } from '@tabler/icons-react';
import emptyIcon from '../../img/icons/cancel.svg';
import {useState} from "react";
//убери полосу прокрутки горизонтальную в выпадающем инпуте
//стили для кнопки сброса
//стили для кнопок
const Filter = ({options,
                mainRequest,
                handleSalaryFrom,
                handleSalaryTo,
                handleValue,
                onEmpty,
                inputValue,
                salaryFrom,
                salaryTo}) => {

    const [onChevron, setOnChevron] = useState(false);

    return (
        <div className='filter-wrapper'>
            <p className='filter-header'>Фильтры</p>
            <div className="wrapper-empty-cancel">
                <button onClick={onEmpty} className='empty-text cross'>Сбросить все</button>
            </div>
            <p className='filter-subheader'>Отрасль</p>
            <Select
                value={inputValue}
                onChange={handleValue}
                mt="md"
                withinPortal
                data={options}
                placeholder="Выберите отрасль"
                maxDropdownHeight={150}
                onDropdownClose={()=>setOnChevron(false)}
                onDropdownOpen={()=>setOnChevron(true)}
                rightSection={onChevron
                    ? <IconChevronUp stroke-width="1.5" width="24px" height="24px" color={'#5E96FC'} />
                    : <IconChevronDown stroke-width="1.5" width="24px" height="24px" color={'#ACADB9'} />}
                styles={(theme) => ({
                    item: {
                        '&[data-selected]': {
                            '&, &:hover': {
                                backgroundColor: '#5E96FC',
                            },
                        },
                        '&[data-hovered]': {
                            backgroundColor: '#DEECFF'},
                    },
                })}
            />
            <p className='filter-subheader second'>Оклад</p>
            <TextInput
                onChange={(event) => handleSalaryFrom(event.currentTarget.value)}
                value={salaryFrom}
                placeholder="От"
                rightSection={<IconSelector size="1rem" />}
            />
            <TextInput
                value={salaryTo}
                onChange={(event) => handleSalaryTo(event.currentTarget.value)}
                placeholder="До"
                rightSection={<IconSelector size="1rem" />}
            />
            <Button
                onClick={() => mainRequest(1)}
                color="#5E96FC">
                Применить
            </Button>
        </div>
    );
}

export default Filter;

