import './Filter.scss';
import { createStyles, rem, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { IconChevronUp } from '@tabler/icons-react';
import React from "react";

const useStyles = createStyles((theme) => ({

}));

const Filter = () => {
    // You can add these classes as classNames to any Mantine input, it will work the same
    const { classes } = useStyles();
    const toggleChevron = () => {
        //напиши тут чтобы менялась стрелочка при переключении
    }
    return (
        <div className='filter-wrapper'>
            <p className='filter-header'>Фильтры</p>
            <p className='filter-subheader'>Отрасль</p>
            <Select
                mt="md"
                withinPortal
                data={['React', 'Angular', 'Svelte', 'Vue', 'React', 'Angular', 'Svelte', 'Vue']}
                placeholder="Выберите отрасль"
                classNames={classes}
                maxDropdownHeight={150}
                rightSection={<IconChevronDown size="1rem" />}
                styles={(theme) => ({
                    item: {
                        // applies styles to selected item
                        '&[data-selected]': {
                            '&, &:hover': {
                                backgroundColor:
                                    theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[1],
                                color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
                            },
                        },

                        // applies styles to hovered item (with mouse or keyboard)
                        '&[data-hovered]': {},
                    },
                })}
            />
        </div>
    );
}

export default Filter;

