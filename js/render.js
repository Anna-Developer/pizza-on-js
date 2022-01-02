'use strict'

const render = {
    setStep(value, store) {
        store.setStep(value);
        render.rendering(root, store);
    },
    setName(value, store) {
        store.setName(value);
        render.rendering(root, store);
    },
    setTypeOfDough(value, store) {
        store.setTypeOfDough(value);
        render.rendering(root, store);
    },
    setDiametrOfDough(value, store) {
        store.setDiametrOfDough(value);
        render.rendering(root, store);
    },
    header(store) {
        return (
            `
            <header>
                <div>
                    Итого: <span>${store.getPrice()}</span>₽
                </div>
            </header>
            `
        )
    },
    step_1(root, store) {
        const selectDoughDiametr = (type) => {
            if (type === 'Традиционное') {
                return (
                    `
                    <div class="dough-block">
                        <div data-value="23">23</div>
                        <div data-value="30" class="active">30</div>
                        <div data-value="35">35</div>
                        <div data-value="40">40</div>
                    </div>
                    `
                )
            } else {
                return (
                    `
                    <div class="dough-block">
                        <div data-value="30" class="active">30</div>
                        <div data-value="35">35</div>
                        <div data-value="40">40</div>
                    </div>
                    `
                )
            }
        }

        return (
            `
            <div class="main-block">
                ${render.header(store)}
                <h1 class="main-title">Соберите свою пиццу</h1>
                <img src="./images/pizza_default.png">
                <input type="text" class="main-input"
                value="${(store.state.name === '_My pizza') ? '' : store.state.name}" placeholder="Придумайте название" onchange="render.setName(this.value, store)">
                <div>
                    <div class="dough-block">
                        <div class="active" data-value="Традиционное" onclick="render.setTypeOfDough('Традиционное', store)">
                            Традиционное
                        </div>
                        <div data-value="Тонкое" onclick="render.setTypeOfDough('Тонкое', store)">
                            Тонкое
                        </div>
                    </div>
                    <div onclick="render.setDiametrOfDough(event.target.dataset.value, store)">
                        ${selectDoughDiametr(store.state.dough.type)}
                    </div>
                </div>
                <button class="chooseIngredientsBtn" onclick="render.setStep(2, store)">Выбрать ингредиенты</button>
            </div>
            `
        )
    },
    step_2(root, store) {
        return (
            `
            <div>
                <button onclick="render.setStep(1, store)">Step 1</button>
                <h1>Step 2</h1>
                <button onclick="render.setStep(3, store)">Step 3</button>
            </div>
            `
        )
    },
    step_3(root, store) {
        return (
            `
            <div>
                <button onclick="render.setStep(2, store)">Step 2</button>
                <h1>Step 3</h1>
                <button onclick="render.setStep(4, store)">Step 4</button>
            </div>
            `
        )
    },
    step_4(root, store) {
        return (
            `
            <div>
                <button onclick="render.setStep(3, store)">Go Back</button>
                <h1>Step 4</h1>               
            </div>
            `
        )
    },
    rendering(root, store) {
        const step = (store.step === 1) ? render.step_1(root, store) :
            (store.step === 2) ? render.step_2(root, store) :
                (store.step === 3) ? render.step_3(root, store) :
                    render.step_4(root, store);
        root.innerHTML = step;
    }
}