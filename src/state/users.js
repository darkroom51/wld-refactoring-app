const SET_USERS_DATA = 'users/SET_USERS_DATA'


const setUsersData = (data) => ({
    type: SET_USERS_DATA,
    data
})

export const fetchUsersData = (usersCount) => (dispatch, getState) => {
    fetch(`https://randomuser.me/api/?nat=gb&results=${usersCount}`)
        .then(response => response.json())
        .then(data => dispatch(setUsersData(data)))
        .catch(err=>console.log(err))
}

const initialState = {
    usersData : null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                usersData: action.data.results //refer to array in data object
            }
        default:
            return state
    }
}