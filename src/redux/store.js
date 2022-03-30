import React from 'react'
import {createStore} from 'redux'
import rootReducer from './reducers/index'
import {Provider} from 'react-redux'

// Creates a Redux store that holds the complete state tree of our app
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//the store states are passed to the other applications
function DataProvider({children}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider