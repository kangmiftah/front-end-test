const round = number => Math.round(number * 100) / 100


export default (createStore) => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now()
      const newState = reducer(state, action)
      const end = performance.now()
      const diff = round(end - start)

      console.log('reducer process time:', diff)

      return newState
    }

    return createStore(monitoredReducer, initialState, enhancer)
  }

 