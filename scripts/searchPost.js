import { getDataPosts } from "./getData"

export function searchPost() {
    const form = document.querySelector('.form')
    const postID = form.number
    const btnSubmit = document.querySelector('.form-btn__submit')
    const message = document.querySelector('.error')

    const input = {
        name: 'id',
        numbValue: postID,
    }

    function validation(numb) {
        if (numb > 0 && numb <= 100) {
            return getDataPosts(numb)
        }
        error()
    }

    function error() {
        message.innerHTML = `введіть значення від 1 до 100`
    }

    function success() {
        message.innerHTML = ``
    }

    postID.addEventListener('input', () => {
        success()
    })

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        validation(input.numbValue.value)
    })
}


