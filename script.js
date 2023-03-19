function addTextField() {
    const notebook = document.querySelector('.notebook__container-text')
    const btnСreate = document.querySelector('.btn-create')
    const btnRemove = document.querySelector('.btn-remove')
    
    function textInput() {
        let text = prompt('Введіть будь ласка текст')
        return text
    }
    
    function createEl() {
        let interim = textInput()
        const text = document.createElement('p');
        text.classList.add('notebook__text-field')
        text.innerHTML = `${interim}`
        notebook.appendChild(text)
    }
    
    function removeEl() {
        let el = document.querySelectorAll('.notebook__text-field')
        let lastEl = el[el.length - 1]
        notebook.removeChild(lastEl)
    }
    
    btnСreate.addEventListener('click', function () {
        createEl()
    })
    
    btnRemove.addEventListener('click', function () {
        removeEl()
    })
    
    notebook.addEventListener('click', function (e) {
        const target = e.target
        if(!target.classList.contains('notebook__text-field')) return
        target.classList.toggle('bg')
    })
}

addTextField()
