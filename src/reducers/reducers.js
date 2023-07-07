const initialState = {
    isLoadingData: '',
    totalVacancies: 0,
    isEmptyPage: false
}

const vacancies =(state = initialState, action) => {
    switch (action.type) {
        case 'ON_LOADING_DATA':
            return {
                ...state,
                isLoadingData: action.payload
            }
        case 'TOTAL_VACANCIES':
            return {
                ...state,
                totalVacancies: action.payload
            }
        case 'ON_EMPTY_PAGE':
            return {
                ...state,
                isEmptyPage: action.payload
            }
        default: return state
    }
}

export default vacancies;