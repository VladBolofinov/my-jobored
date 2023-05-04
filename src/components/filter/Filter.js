import './Filter.scss';
import { createStyles, rem, Select, TextInput } from '@mantine/core';
import { IconChevronUp, IconSelector, IconChevronDown } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useState } from "react";


//чел тебе тут еще нужно поменять стрелочки в айконшеврон



const Filter = (props) => {
    const useStyles = createStyles((theme) => ({

    }));
    const {options, keys} = props;
    // You can add these classes as classNames to any Mantine input, it will work the same
    const { classes } = useStyles();
    const toggleChevron = () => {
        //напиши тут чтобы менялась стрелочка при переключении
    }

    const [inputValue, setInputValue] = useState('');
    const [keyValue, setKeyValue] = useState('');
    const [salaryFrom, setSalaryFrom] = useState(0);
    const [salaryTo, setSalaryTo] = useState(0);

    return (
        <div className='filter-wrapper'>
            <p className='filter-header'>Фильтры</p>
            <p className='filter-subheader'>Отрасль</p>
            <Select
                onChange={(value) => {
                    setInputValue(value);
                    setKeyValue(keys[options.indexOf(value)]);
                }}
                mt="md"
                withinPortal
                data={options}
                placeholder="Выберите отрасль"
                classNames={classes}
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
                onChange={(event) => setSalaryFrom(event.currentTarget.value)}
                placeholder="От"
                rightSection={<IconSelector size="1rem" />}
            />
            <TextInput
                onChange={(event) => setSalaryTo(event.currentTarget.value)}
                placeholder="До"
                rightSection={<IconSelector size="1rem" />}
            />
            <Button
                color="#5E96FC">
                Применить
            </Button>
        </div>
    );
}

export default Filter;

