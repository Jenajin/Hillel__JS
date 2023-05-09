import { useCallback, useEffect, useMemo, useState } from "react"
import { users } from "../mocData"
import { CreateItem } from "./CreateItem/CreateItem"

import styles from "./ContactsWrap.module.scss"

export const ContactsWrap = () => {

    const [contacts, setContacts] = useState(users)
    const [newName, setNewName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newPhone, setNewPhone] = useState(null)
    const [openForm, setOpenForm] = useState(false)


    const interimValue = useMemo(() => {
        return !openForm ? {} : { name: newName, lastName: newLastName, phone: newPhone}
    }, [openForm, newName, newLastName, newPhone])


    const deleteContact = (id) => {
        setContacts(contacts.filter(el => el.id !== id))
    }


    const addNewContact = () => {
        const copyContacts = contacts.slice()

        const newNameContact = {
            id: Math.random(),
            name: `${newName} ${newLastName}`,
            phone: newPhone,
        }

        copyContacts.push(newNameContact)
        setContacts(copyContacts)
        setOpenForm(false)
        setNewName("")
        setNewLastName("")
        setNewPhone(null)
    }


    const isOpenForm = () => {
        setOpenForm(true)
    }

    const cancel = () => {
        setOpenForm(false)
    }


    return (
        <>


            <div>

                <div className={styles.contacts__title}>
                    <div>Ім'я</div>
                    <div>Прізвище</div>
                    <div>Номер телефону</div>
                    <div>Видалити контакт</div>
                </div>

                {contacts.map(el => (
                    <div className={styles.contacts} key={el.id}>
                        <CreateItem
                            id={el.id}
                            userName={el.name}
                            phone={el.phone}
                            deleteContact={deleteContact} />
                    </div>
                ))}

            </div>




            <div>
                <button onClick={isOpenForm}>Добавити новий контакт</button>
            </div>


            {openForm &&
                <div>

                    <div>
                        <input type="text"
                            value={interimValue.name}
                            onChange={(e) => setNewName(e.target.value)} 
                        />

                        <input type="text"
                        value={interimValue.lastName}
                        onChange={(e) => setNewLastName(e.target.value)} />

                        <input type="number"
                        value={interimValue.phone} 
                        onChange={(e) => setNewPhone(e.target.value)}/>
                    </div>

                    <div>
                        <button onClick={addNewContact}>Зберегти</button>
                        <button onClick={cancel}>Скасувати</button>
                    </div>

                </div>
            }
        </>
    )
}