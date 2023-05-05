import { ADD_ADDITIVE, ADD_FILLING, ADD_HAMBURGER } from "./action"
import { fillingList, additiveList } from "./datasLists"


export const reducer = (state, action) => {

    switch (action.type) {

        case ADD_HAMBURGER: {
            const selectedHamburger = state.humburgersList[action.payload];

            return {
                ...state,
                selected: true,
                selectedHamburger: selectedHamburger,
                filling: fillingList,
                additive: additiveList,
            };
        }

        case ADD_FILLING: {
            const price = fillingList[action.payload].price
            const calories = fillingList[action.payload].calories
            const selectedHamburger = { ...state.selectedHamburger }
            let selected = !state.filling[action.payload].selected

            if (selected) {
                selectedHamburger.price += price
                selectedHamburger.calories += calories
            } else {
                selectedHamburger.price -= price
                selectedHamburger.calories -= calories
            }

            return {
                ...state,
                selectedHamburger,
                filling: state.filling.map((el, index) =>
                    index === action.payload ? { ...el, selected: selected } : el
                ),
            };
        }

        case ADD_ADDITIVE: {
            const price = additiveList[action.payload].price
            const calories = additiveList[action.payload].calories
            const selectedHamburger = { ...state.selectedHamburger }
            let selected = !state.additive[action.payload].selected

            if (selected) {
                selectedHamburger.price += price
                selectedHamburger.calories += calories
            } else {
                selectedHamburger.price -= price
                selectedHamburger.calories -= calories
            }

            return {
                ...state,
                selectedHamburger,
                additive: state.additive.map((el, index) =>
                    index === action.payload ? { ...el, selected: selected } : el
                ),
            };
        }

        default: {
            return state
        }
    }
}