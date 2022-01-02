'use strict'

const store = {
    state: {
        name: '_My pizza',
        dough: {
            type: 'Традиционное',
            diametr: 30,
        },
        price: {
            dough: 299,
        }

    },
    getPrice() {
        let result = 0;
        for (let item in this.state.price) {
            result += this.state.price[item];
        }
        return result
    },
    setName(value) {
        this.state.name = value;
    },
    step: 1,
    setStep(value) {
        this.step = value;
    },
    setTypeOfDough(value) {
        this.state.dough.type = value;
    },
    setDiametrOfDough(value) {
        this.state.dough.diametr = value;
        switch (value) {
            case '23':
                this.state.price.dough = 299;
                break
            case '30':
                this.state.price.dough = 449;
                break
            case '35':
                this.state.price.dough = 599;
                break
            case '40':
                this.state.price.dough = 759;
                break
        }
    },
}