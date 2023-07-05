const initialState = {
    isLoadingData: ''
}

const vacancies =(state = initialState, action) => {
    switch (action.type) {
        case 'ON_LOADING_DATA':
            return {
                ...state,
                isLoadingData: action.payload
            }
        default: return state
    }
}

export default vacancies;