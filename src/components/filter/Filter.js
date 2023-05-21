import './Filter.scss';
import { createStyles, rem, Select, TextInput } from '@mantine/core';
import { IconChevronUp, IconSelector, IconChevronDown } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useState } from "react";
import emptyIcon from '../../img/icons/cancel.svg';
//чел тебе тут еще нужно поменять стрелочки в айконшеврон
//сделай кнопку сбросить все
//убери полосу прокрутки горизонтальную в выпадающем инпуте
//как сделать чтобы в фильтре оставались значение после перехода на другую страницу
//сделать при клике на применить чтобы фильтровало результаты
const Filter = ({options, mainRequest, handleSalaryFrom, handleSalaryTo, handleValue, onEmpty, inputValue, salaryFrom, salaryTo}) => {

    const toggleChevron = () => {
        //напиши тут чтобы менялась стрелочка при переключении
    }

    return (
        <div className='filter-wrapper'>
            <p className='filter-header'>Фильтры</p>
            <div className="wrapper-empty-cancel">
                <button onClick={onEmpty} className='empty-text'>Сбросить все
                    <img src={emptyIcon} alt="emptyIcon" className="empty-img"/>
                </button>

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
                rightSection={<IconChevronDown size="1rem" />}
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

