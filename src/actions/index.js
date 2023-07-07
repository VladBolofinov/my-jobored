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
