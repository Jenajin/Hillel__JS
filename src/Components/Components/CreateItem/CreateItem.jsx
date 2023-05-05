import styles from "./CreateItem.module.scss"

export const CreateItem = ({ name, price, calories }) => {

    return (
        <div className={styles.wrapper}>
            <h3>{name}</h3>
            <div>{price} тугриків</div>
            <div>{calories} калорій</div>
        </div>
    )
}