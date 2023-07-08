const initialState = {
    isLoadingData: '',
    totalVacancies: 0,
    isEmptyPage: false,
    categories: [],
    categoriesKeys: [],
    vacancyList: [],
    profNameValue: '',
    salaryFrom: '',
    salaryTo: '',
    inputValue: '',
    keyValue: ''
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
        case 'ADD_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'ADD_CATEGORIES_KEYS':
            return {
                ...state,
                categoriesKeys: action.payload
            }
        case 'ADD_VACANCY_LIST':
            return {
                ...state,
                vacancyList: action.payload
            }
        case 'ADD_PROFNAME_VALUE':
            return {
                ...state,
                profNameValue: action.payload
            }
        case 'ADD_SALARY_FROM':
            return {
                ...state,
                salaryFrom: action.payload
            }
        case 'ADD_SALARY_TO':
            return {
                ...state,
                salaryTo: action.payload
            }
        case 'ADD_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload
            }
        case 'ADD_KEY_VALUE':
            return {
                ...state,
                keyValue: action.payload
            }
        default: return state
    }
}

export default vacancies;