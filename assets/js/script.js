// код для вибору товару

const dairyProducts = [
    {
        name: 'milk',
        description: 'Молоко корисне для травної системи',
        price: 20,
    },
    {
        name: 'sour cream',
        description: 'Це не сметанний продукт',
        price: 40,
    },
    {
        name: 'kefir',
        description: 'Містить корисні біфідобактерії',
        price: 50,
    },
    {
        name: 'cheese',
        description: 'Свіжий',
        price: 60,
    },
    {
        name: 'cream',
        description: 'Можна додавати до кави',
        price: 70,
    },
]

const fruits = [
    {
        name: 'banana',
        description: 'Багато білка',
        price: 63,
    },
    {
        name: 'apple',
        description: 'Сприяє кращому травленню',
        price: 87,
    },
    {
        name: 'pineapple',
        description: 'Екзотичний фрукт',
        price: 120,
    },
    {
        name: 'coconut',
        description: 'З нього роблять кокосову стружку',
        price: 48,
    },
    {
        name: 'orange',
        description: 'Експортований з півдня',
        price: 10,
    },
]

const vegetables = [
    {
        name: 'Капуста',
        description: 'Багато білка',
        price: 80,
    },
    {
        name: 'Часник',
        description: 'Їсти тільки навечір',
        price: 54,
    },
    {
        name: 'Цибуля',
        description: 'Дуже пекуча',
        price: 90,
    },
    {
        name: 'Морква',
        description: 'Промита, очищена',
        price: 100,
    },
    {
        name: 'Помідор',
        description: 'Помідор зелений',
        price: 30,
    },
]

const meatProducts = [
    {
        name: 'Ковбаса',
        description: 'Дрогобицька, свіжа',
        price: 500,
    },
    {
        name: 'Рулет',
        description: 'Зроблений із телячого фаршу',
        price: 300,
    },
    {
        name: 'Крильця',
        description: 'Курячі, стероїдні',
        price: 300,
    },
    {
        name: 'Сало',
        description: 'Посолене, перчене, проварене',
        price: 200,
    },
    {
        name: 'Філе куряче',
        description: 'Багато білка',
        price: 300,
    },
]

const meatFormalino = [
    {
        name: 'Крильця',
        description: 'Курячі, стероїдні',
        price: 300,
    },
    {
        name: 'Сало',
        description: 'Посолене, перчене, проварене',
        price: 200,
    },
    {
        name: 'Філе куряче',
        description: 'Багато білка',
        price: 300,
    },
]

const getEl = (selector) => document.querySelector(selector);
const getElbyID = (id) => document.getElementById(id);

function internetShop() {
    const allArrProducs = [dairyProducts, fruits, vegetables, meatProducts,]
    const allArrCategories = {
        'dairy-products': dairyProducts,
        'vegetables': vegetables,
        'fruits': fruits,
        'meat-products': meatProducts,
        'meat-formalino': meatFormalino,
    }

    const producsCategories = getEl('.producs-categories')
    const producsGoods = getEl('.producs-goods')
    const producsInfo = getEl('.producs-info')
    const getForm = getEl('form')

    function createGoods(prod) {
        const elem = document.createElement('p')
        elem.classList.add('goods')
        elem.style.cursor = 'pointer'
        elem.innerHTML = prod.name
        return elem
    }

    function createDescription(el) {
        const elem = document.createElement('div')
        elem.classList.add('info')
        elem.innerHTML = `
          <p class="description">${el.description}</p>
          <p class="price">${el.price ? `${el.price} грн` : 'Ціна не визначена'}<p>
        `
        return elem
    }

    function createBuyButton() {
        const elem = document.createElement('button');
        elem.classList.add('buy-btn');
        elem.style.cursor = 'pointer'
        elem.innerHTML = 'Купити';
        return elem;
    }

    function goProducsCategories(target) {
        if (target === undefined) return;
        producsGoods.innerHTML = '';
        producsInfo.innerHTML = '';
        allArrCategories[target].forEach((item) => producsGoods.appendChild(createGoods(item)))

        getForm.classList.remove('active')
        producsGoods.classList.add('active')
    }

    function goProducsGoods(target) {
        if (target.classList.contains('producs-goods')) return;

        if (target.classList.contains('goods')) {
            producsInfo.classList.add('active')

            const prod = target.innerHTML

            let productFound = false;
            let prodDesc, prodPrice;


            allArrProducs.forEach((el) => {
                const foundProduct = el.find((item) => item.name === prod);
                if (foundProduct) {
                    productFound = true;
                    prodDesc = foundProduct.description;
                    prodPrice = foundProduct.price;
                }
            });

            if (productFound) {
                producsInfo.innerHTML = '';
                producsInfo.appendChild(createDescription({ description: prodDesc, price: prodPrice }));
                producsInfo.appendChild(createBuyButton());

                // визиваємо форму передаючи в неї обраний товар та його ціну
                form(target.innerText, prodPrice)
            }
        }
    }

    function goProducsInfo(e) {
        if (e.target.classList.contains('buy-btn')) {
            alert('Товар додано в корзину. Заповніть будь лака форму для завершення покупки!');
            producsGoods.innerHTML = '';
            producsInfo.innerHTML = '';

            producsGoods.classList.remove('active')
            producsInfo.classList.remove('active')

            getForm.classList.add('active')
        }
    }

    producsCategories.addEventListener('click', (e) => {
        const target = e.target.dataset.action
        goProducsCategories(target)
    });

    producsGoods.addEventListener('click', (e) => {
        const target = e.target
        goProducsGoods(target)
    })

    producsInfo.addEventListener('click', (e) => {
        goProducsInfo(e)


    });

}
internetShop()


// код для форми
function form(prod, price) {
    const form = getElbyID('form');
    const nameInput = form.name
    const lastNameInput = form.last_name
    const surNameInput = form.surname
    const cityInput = form.city
    const storageInput = form.storage
    const paymentInput = form.payment
    const numberInput = form.amount
    const commentInput = form.comment

    const btnSubmitInput = getElbyID('btn-submit')

    const inputs = [
        {
            name: 'Ім`я',
            inputEl: nameInput,
            validationRules: [isNameCheck],
            isValid: false,
        },
        {
            name: 'Прізвище',
            inputEl: lastNameInput,
            validationRules: [isNameCheck],
            isValid: false,
        },
        {
            name: 'По батькові',
            inputEl: surNameInput,
            validationRules: [isNameCheck],
            isValid: false,
        },
        {
            name: 'Місто',
            inputEl: cityInput,
            validationRules: [isEmptySelect],
            isValid: false,
        },
        {
            name: 'Склад Нової Пошти',
            inputEl: storageInput,
            validationRules: [isEmptySelect],
            isValid: false,
        },
        {
            name: 'Спосіб оплати',
            inputEl: paymentInput,
            validationRules: [isEmptySelect],
            isValid: false,
        },
        {
            name: 'Кількість одиниць товару',
            inputEl: numberInput,
            validationRules: [isAmount],
            isValid: false,
        },
        {
            name: 'Коментарі',
            inputEl: commentInput,
            validationRules: [],
            isValid: true,
        },
    ]

    function isEmptySelect(str, inputEl) {
        if (str === cityInput[0].value) {
            error(inputEl, 'Оберіть будь ласка варіант')
            return false
        } else {
            successfully(inputEl)
            return true
        }
    }

    function isAmount(numb, inputEl) {
        let number = Number(numb)
        if (number === 0) {
            error(inputEl, 'Введіть будь ласка число');
            return false;
        }
        successfully(inputEl);
        return true;
    }

    function isNameCheck(str, inputEl) {
        const isValidOne = str ? !!str.trim() : false;
        const isValidTwo = str ? str.length >= 2 : false;

        if (!isValidOne) {
            error(inputEl, 'Введіть будь ласка текст')
            return false
        }

        if (!isValidTwo) {
            error(inputEl, 'Введений текст занадто короткий')
            return false
        }

        successfully(inputEl)
        return true;
    }

    function error(inputEl, message) {
        const el = inputEl.parentNode.querySelector('small');
        el.innerText = message;
        el.style.color = 'red';
        inputEl.style.borderColor = 'red';
    }

    function successfully(inputEl) {
        const el = inputEl.parentNode.querySelector('small');
        inputEl.style.borderColor = 'green';
        el.innerText = '';
    }

    function validation() {
        let valid = []

        inputs.forEach(el => {
            isAllValid = el.validationRules.map((func) => {
                return func(el.inputEl.value, el.inputEl)
            })

            el.isValid = isAllValid.every(el => el === true)
            valid.push(el.isValid)
        })

        let type = valid.every(el => el === true)
        showResult(type)
    }

    function createElProd(prod, price) {
        const resultBuyProd = getEl('.result-buy__prod')
        const elem = document.createElement('p')
        elem.classList.add('result-buy__prod-item')
        elem.innerHTML = `
        <p> Замовлений товар: ${prod}. 
        <p> Ціна: ${price} грн за 1 шт.<p>
        <p>Загальна ціна ${price * inputs[6].inputEl.value} грн<p>`
        resultBuyProd.appendChild(elem)
        return elem
    }

    function createElForm(name, value) {
        const resultBuyForm = getEl('.result-buy__form')
        const elem = document.createElement('li')
        elem.classList.add('result-buy__form-item')
        elem.innerHTML = `${name}: ${value}`
        resultBuyForm.appendChild(elem)
        return elem
    }

    function result() {
        createElProd(prod, price)

        for (let i = 0; i < inputs.length; i++) {
            const name = inputs[i].name
            const value = inputs[i].inputEl.value
            createElForm(name, value)
        }
    }
    
    function showResult(type) {
        // отримуємо усі true із функції isValid
        if (type) {

            result() // генерує результат заповнення форми

            const res = getEl('.result-buy')
            res.style.display = 'block'
            const confirm = getEl('.confirm')

            confirm.addEventListener('click', e => {
                console.log(form)
                form.submit() // відправляє форму на сервер
            })
        }
    }

    btnSubmitInput.addEventListener('click', (e) => {
        e.preventDefault(); // перехоплюємо відправку форми
        validation()
    })

}







