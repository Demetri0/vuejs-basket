Vue.component('basket', {
    template: '#basket-template',
    methods: {
        togglePopup: function(){
            this.showPopup = !this.showPopup
        }
    },
    props: ['products'],
    data: function(){
        return {
            showPopup: true
        }
    }
})
Vue.component('product-item', {
    template: '#product-item-template',
    props: ['item'],
    methods: {
        addFour: function(){
            this.$emit('add', this.item, 4)
        },
        addEight: function(){
            this.$emit('add', this.item, 8)
        }
    }
})
Vue.component('products-list', {
    template: '#products-list-template',
    props: ['items'],
    methods: {
        addToBasket: function(item, count){
            this.$emit('buy', item, count)
        }
    },
    data: function () {
        return {}
    }
})

var app = new Vue({
    el: "#root",
    data: {
        basket: [],
        store: (function(){
            let items = []
            for(let i = 0; i < 8; ++i){
                items.push({
                    id: faker.random.number(),
                    title: faker.commerce.productName(),
                    text: faker.lorem.paragraph()
                })
            }
            return items
        })()
    },
    methods: {
        toBasket: function(product, count){
            //*
            this.basket.push({
                product: product,
                count: count
            })
            //*/
            /*
            this.basket.push(product)
            this.basket['hash-'+product.id] = {
                product: product,
                count: (this.basket[product.id])
                    ? this.basket[product.id].count + count
                    : count
            }
            console.log(this.basket.length);
            //*/
        }
    }
});

function AObject(){
    this.length = 0;
}
AObject.prototype.push = function(item){
    this[this.length] = item;
    this[item.id] = item;
    this.length += 1;
}
