import {useState} from "react";
import {IconChevronUp, IconSelector, IconChevronDown} from '@tabler/icons-react';
import {Select, TextInput, Button} from '@mantine/core';
import {useSelector} from 'react-redux';

import './Filter.scss';

export const Filter = ({
                mainRequest,
                handleSalaryFrom,
                handleSalaryTo,
                handleValue,
                onDeleteFilter,
                inputValue,
                salaryFrom,
                salaryTo}) => {

    const {categories} = useSelector(state => state);
    const [onChevron, setOnChevron] = useState(false);

    return (
        <div className='filter-wrapper'>
            <p className='filter-header'>Фильтры</p>
            <div className="wrapper-empty-cancel">
                <button onClick={onDeleteFilter} className='empty-text cross'>Сбросить все</button>
            </div>
            <p className='filter-subheader'>Отрасль</p>
            <Select
                data-elem={"industry-select"}
                value={inputValue}
                onChange={handleValue}
                mt="md"
                withinPortal
                data={categories}
                placeholder="Выберите отрасль"
                maxDropdownHeight={'188px'}
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
                        'whiteSpace': 'initial',
                        '&[data-hovered]': {
                            backgroundColor: '#DEECFF'},
                    },
                })}
            />
            <p className='filter-subheader second'>Оклад</p>
            <TextInput
                data-elem={"salary-from-input"}
                onChange={(event) => handleSalaryFrom(event.currentTarget.value)}
                value={salaryFrom}
                placeholder="От"
                rightSection={<IconSelector color={'#ACADB9'} size="1.5rem" stroke-width="1.5" />}
            />
            <TextInput
                data-elem={"salary-to-input"}
                value={salaryTo}
                onChange={(event) => handleSalaryTo(event.currentTarget.value)}
                placeholder="До"
                rightSection={<IconSelector color={'#ACADB9'} size="1.5rem" stroke-width="1.5" />}
            />
            <Button
                data-elem={"search-button"}
                onClick={() => mainRequest(1)}
                color="#5E96FC">
                Применить
            </Button>
        </div>
    );
}

