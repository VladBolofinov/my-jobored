export const onLoadingData = (loading) => {
    return {
        type: 'ON_LOADING_DATA',
        payload: loading
    }
}

export const onTotalVacancies = (number) => {
    return {
        type: 'TOTAL_VACANCIES',
        payload: number
    }
}

export const onEmptyPage = (value) => {
    return {
        type: 'ON_EMPTY_PAGE',
        payload: value
    }
}

export const onAddCategories = (categories) => {
    return {
        type: 'ADD_CATEGORIES',
        payload: categories
    }
}

export const onAddCategoriesKeys = (keys) => {
    return {
        type: 'ADD_CATEGORIES_KEYS',
        payload: keys
    }
}

export const onAddVacancyList = (vacancies) => {
    return {
        type: 'ADD_VACANCY_LIST',
        payload: vacancies
    }
}

export const onAddProfNameValue = (value) => {
    return {
        type: 'ADD_PROFNAME_VALUE',
        payload: value
    }
}

export const onAddSalaryFrom = (salary) => {
    return {
        type: 'ADD_SALARY_FROM',
        payload: salary
    }
}

export const onAddSalaryTo = (salary) => {
    return {
        type: 'ADD_SALARY_TO',
        payload: salary
    }
}

export const onAddInputValue = (value) => {
    return {
        type: 'ADD_INPUT_VALUE',
        payload: value
    }
}

export const onAddKeyValue = (value) => {
    return {
        type: 'ADD_KEY_VALUE',
        payload: value
    }
}