import './Filter.scss';
import React, { useState } from "react";

const Filter = () => {
    const [selectedOption, setSelectedOption] = useState("");

    function handleDropdownChange(event) {
        setSelectedOption(event.target.value);
    }
    return (
        <div className='filter-wrapper'>
            <p>Фильтры</p>
            <label htmlFor="my-dropdown">Отрасль</label>
            <select id="my-dropdown" value={selectedOption} onChange={handleDropdownChange}>
                <option value="option1">Опция 1</option>
                <option value="option2">Опция 2</option>
                <option value="option3">Опция 3</option>
                <option value="option1">Опция 1</option>
                <option value="option2">Опция 2</option>
                <option value="option3">Опция 3</option>
                <option value="option1">Опция 1</option>
                <option value="option2">Опция 2</option>
                <option value="option3">Опция 3</option>
            </select>
        </div>
    )
}

export default Filter;