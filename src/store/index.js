// import {
//   persistStore,
//   persistReducer,
//   // FLUSH,
//   // REHYDRATE,
//   // PAUSE,
//   // PERSIST,
//   // PURGE,
//   // REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// // import { configureStore} from '@reduxjs/toolkit';

// // import contactReducer from './contactSlice';
// // // import persistReducer from 'redux-persist/es/persistReducer';

// // // const middleware = [
// // //   ...getDefaultMiddleware({
// // //     serializableCheck: {
// // //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// // //     },
// // //   }),
// // //   // logger,
// // // ];

// // const authPersistConfig = {
// //   key: 'auth',
// //   storage,
// //   // whitelist: ['token'],
// // };

// // // const persistReducer = persistReducer(persistConfig,rootReducer)

// // export const store = configureStore({
// //   reducer: {
// //     // auth: persistReducer(authPersistConfig, authReducer),
// //      contacts: contactReducer,
// //   },

// // });
// // export const persistor = persistStore(store);

// // ===================
// // import { configureStore } from '@reduxjs/toolkit';
// // import userReducer from './slises/userSlice';

// // import contactReducer from './contactSlice';

// // // export default configureStore({
// // //   reducer: {
// // //     contacts: contactReducer,
// // //   },
// // // });

// // export const store = configureStore({
// //   reduser: {
// //     user: userReducer,
// //   }
// // })
// import { configureStore } from '@reduxjs/toolkit';
// // import persistReducer from 'redux-persist/es/persistReducer';

// import contactReducer from './contactSlice';
// import authReducer from './authSlice';

// // import { processResult } from '@reduxjs/toolkit/node_modules/immer/dist/internal';

// // export default configureStore({
// //   reducer: {
// //     contacts: contactReducer,
// //   },
// // });
// const middleware = [];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({

//   reducer: {
//     auth:persistReducer(authPersistConfig, authReducer),
//      contacts: contactReducer,
//     //  auth: authReducer,
//     },
//     middleware,
//     devTools:process.env.NODE_ENV === 'DEVELOPMENT',
// });
// export const persistor = persistStore(store);
// // eslint-disable-next-line import/no-anonymous-default-export
// // export default {
// //   store,
// //   // persistor
// // };
