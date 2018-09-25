var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'vmSocks-green-onWhite.jpg',
        inventory: 15,
        details: ['80% cotton', '20% polyster', 'Gender-nuteral'],
        variants:[
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'vmSocks-blue-onWhite.jpg'
            }
        ],
        cart:0
    },
    methods:{
        addToCart: function() {
            this.cart += 1
            this.inventory -= 1
        },
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    }
})