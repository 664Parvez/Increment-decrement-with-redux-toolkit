import { configureStore } from "@reduxjs/toolkit"
import incdecReducer from "./reducers/index"

const store = configureStore({
    reducer : {
        number : incdecReducer
    }
})

export default store