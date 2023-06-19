const initialState = {
    inputValue:'',
    salaryFrom: '',
    salaryTo: '',
    profNameValue: ''
};

export const reducer = (state = initialState,action) => {
    switch (action.type) {
        case 'onDeleteFilter':
            return {
                ...state,
                inputValue:'',
                salaryFrom: '',
                salaryTo: '',
                profNameValue: ''
            }
    }
};
