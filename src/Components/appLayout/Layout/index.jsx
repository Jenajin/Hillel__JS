import { Link, Outlet, useLoaderData } from "react-router-dom"
import styles from "./index.module.scss"

export const Layout = () => {
    const users = useLoaderData()

    return (

        <>
            <Link to={'/'}>Назад</Link>

            <ul className={styles.wrap}>
                {users.map(el => (
                    <li key={el.id}>
                        <span>{el.name}</span>
                        <div>
                            <Link to={`${el.id}`}>Albums</Link>
                        </div>
                    </li>
                ))}
            </ul>

            <br />

            <Outlet />

        </>
    )

} 