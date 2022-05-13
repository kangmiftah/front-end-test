export default (state = {
    loading: false,
    data: {},
    coments: [],
    commentsLoading:false,
    msg: {
        type: null,
        text: ""
    }
}, { type, payload }) => {
    // const { type, payload } = action
    switch (type) {
        case 'GET_DETAIL':
            return {
                ...state,
                loading: true
            }
        case 'GET_DETAIL_SUCCESS':
            return {
                ...state,
                loading: false,
                data: payload.data || {},
                msg: {
                    type: 1,
                    text: payload.message
                }
            }
        case 'GET_DETAIL_FAILED':
            return {
                ...state,
                loading: false,
                msg: {
                    type: 0,
                    text: payload.message
                }
            }
        case 'GET_COMMENTS':
            return {
                ...state,
                commentsLoading: true
            }
        case 'GET_COMMENTS_SUCCESS':
            return {
                ...state,
                commentsLoading: false,
                coments: payload.data || [],
                msg: {
                    type: 1,
                    text: payload.message
                }
            }
        case 'GET_COMMENTS_FAILED':
            return {
                ...state,
                commentsLoading: false,
                msg: {
                    type: 0,
                    text: payload.message
                }
            }
        default:
            return state
    }
}