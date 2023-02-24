import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

import storage from 'redux-persist/lib/storage'
import { rootReducer } from './reducers/rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}
const middleware = [thunk]
const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancers =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware))

export const store = createStore(persistedReducer, undefined, enhancers)

export const persistor = persistStore(store)
