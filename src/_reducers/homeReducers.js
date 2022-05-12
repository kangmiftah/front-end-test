export default (state = {
    loading: false,
    data : [],
    msg : {
        type: null,
        text : ""
    }
}, { type, payload }) => {
    // const { type, payload } = action
    switch (type) {
        case 'HOME_GET_DATA':
            return {
                ...state,
                loading: true
            }
        case 'HOME_GET_SUCCESS':
            return {
                ...state,
                loading: false,
                data : payload.data || [],
                msg : {
                    type:1,
                    text: payload.message
                }
            }
        case 'HOME_GET_FAILED' : 
            return {
                ...state,
                loading: false,
                msg : {
                    type:0,
                    text: payload.message
                }
            }
        default:
            return state
    }
}