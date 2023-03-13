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

const getEl = (selector) => document.querySelector(selector);

function internetShop() {
    const allArrProducs = [dairyProducts, fruits, vegetables, meatProducts,]
    const producsCategories = getEl('.producs-categories')
    const producsGoods = getEl('.producs-goods')
    const producsInfo = getEl('.producs-info')

    function createGoods(prod) {
        const elem = document.createElement('p')
        elem.classList.add('goods')
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
        elem.innerHTML = 'Купити';
        return elem;
    }

    function goProducsCategories(target) {
        if (target === undefined) return;
        producsGoods.innerHTML = '';
        producsInfo.innerHTML = '';

        if (target === 'dairy-products') {
            dairyProducts.forEach((item) => {
                producsGoods.appendChild(createGoods(item));
            })
        }

        if (target === 'vegetables') {
            vegetables.forEach((item) => {
                producsGoods.appendChild(createGoods(item));
            })
        }

        if (target === 'fruits') {
            fruits.forEach((item) => {
                producsGoods.appendChild(createGoods(item));
            })
        }

        if (target === 'meat-products') {
            meatProducts.forEach((item) => {
                producsGoods.appendChild(createGoods(item));
            })
        }
    }

    function goProducsGoods(target) {
        if (target.classList.contains('producs-goods')) return;

        if (target.classList.contains('goods')) {
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
            }
        }
    }

    function goProducsInfo(e) {
        if (e.target.classList.contains('buy-btn')) {
            alert('Товар куплено!');
            producsGoods.innerHTML = '';
            producsInfo.innerHTML = '';
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
internetShop ()



