//Receives dispatch from putDescriptionSaga
const putTitleReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return action.payload;
        default:
            return state;
    }
};
export default putTitleReducer;