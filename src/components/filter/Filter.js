import './Filter.scss';
import { createStyles, rem, Select, TextInput } from '@mantine/core';
import { IconChevronUp, IconSelector, IconChevronDown } from '@tabler/icons-react';
import { Button } from '@mantine/core';





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
                placeholder="От"
                rightSection={<IconSelector size="1rem" />}
            />
            <TextInput
                placeholder="До"
                rightSection={<IconSelector size="1rem" />}
            />
            <Button color="#5E96FC">
                Применить
            </Button>
        </div>
    );
}

export default Filter;

