export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { name } = action
            return [...state, { name }]
        case 'REMOVE_TODO':
            const { key } = action
            return state.filter((v,i) => key !== i)
        default:
            return state
    }
}