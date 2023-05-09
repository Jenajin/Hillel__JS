import styles from "./CreateItem.module.scss"

export const CreateItem = ({ id, userName, phone, deleteContact }) => {

    const extractFirstName = (userName) => {
        const firstWord = userName.split(' ')[0]
        return firstWord
    }
    
    const extractLastName = (userName) => {
        const lastWord = userName.split(' ')[1]
        return lastWord
    }


    const Name = extractFirstName(userName)
    const lastName = extractLastName(userName)


    return (
        <>
            <div>{Name}</div>
            <div>{lastName}</div>
            <div>{phone}</div>
            <button onClick={() => (deleteContact(id))}>delete</button>
        </>
    )
}