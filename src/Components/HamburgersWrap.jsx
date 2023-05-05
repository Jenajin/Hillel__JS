import { useReducer } from "react"
import { reducer } from "./Components/store"
import { ADD_ADDITIVE, ADD_FILLING, ADD_HAMBURGER } from "./Components/store/action"
import { humburgersList } from "./Components/store/datasLists"
import { Button } from "./Components/Button/Button"
import { CreateItem } from "./Components/CreateItem/CreateItem"
import { Input } from "./Components/Input/Input"

import styles from "./HamburgersWrap.module.scss"


export const HumburgersWrap = () => {
    const initialState = {
        humburgersList,
        selected: false,
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <section className={styles.humburgers}>

            <h1>Смачненькі ГАМБУРГЕРИ</h1>

            <section className={styles.menu}>

                <h2 className={styles.title}>Гамбургери:</h2>

                {state.humburgersList.map(el => (
                    <div key={el.id}>
                        <CreateItem name={el.name} price={el.price} calories={el.calories} />
                        <Button title='Обрати' dispatchFunc={dispatch} action={ADD_HAMBURGER} id={el.id} />
                    </div>
                ))}
            </section>


            {state.selected &&
                <section className={styles.menu}>

                    <h2 className={styles.title}>Начинки:</h2>

                    {state.filling.map(el => (
                        <div key={el.id}>
                            <CreateItem name={el.name} price={el.price} calories={el.calories} />
                            <Input dispatchFunc={dispatch} action={ADD_FILLING} id={el.id} selected={el.selected} />
                        </div>
                    ))}
                </section>
            }


            {state.selected &&
                <section className={styles.menu}>

                    <h2 className={styles.title}>Добавки:</h2>

                    {state.additive.map(el => (
                        <div key={el.id}>
                            <CreateItem name={el.name} price={el.price} calories={el.calories} />
                            <Input dispatchFunc={dispatch} action={ADD_ADDITIVE} id={el.id} selected={el.selected} />
                        </div>
                    ))}
                </section>
            }


            {state.selected &&
                <section className={styles.order}>

                    <h2 className={styles.title}>Ваше замовлення:</h2>

                    < CreateItem
                        name={state.selectedHamburger.name}
                        price={state.selectedHamburger.price}
                        calories={state.selectedHamburger.calories} />
                </section>
            }


        </section>
    )
}