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
