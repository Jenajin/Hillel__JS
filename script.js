
let text = prompt('Введіть будь ласка текст')

function addTextField() {
    const notebook = document.querySelector('.notebook')
    const btnСreate = document.querySelector('.btn-create')
    const btnRemove = document.querySelector('.btn-remove')
    
    const textField = document.createElement('div')
    textField.innerText = text
    
    btnСreate.addEventListener('click', function () {
        notebook.appendChild(textField)
        textField.classList.add('notebook__text-field')
    })
    
    textField.addEventListener('click', function () {
        this.classList.toggle('bg')
    })

    btnRemove.addEventListener('click', function () {
        textField.classList.remove('notebook__text-field')
        notebook.removeChild(textField)
        textField.innerText = ''
    })
}

addTextField()
