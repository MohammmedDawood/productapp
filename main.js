Vue.component('product',{
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:`
    <div class="product">

    <div class="product-image">
        <img v-bind:src="image">
    </div>

    <div class="product-info">
        <h1>{{ title }}</h1>
        <h2>I love My {{ product }}</h2>
        <p v-if="inStock">In stock</p>
        <!-- <p v-else-if="inventory < 10 && inventory > 0">Almost sold out</p> -->
        <p v-else>Out of stock</p>
        <p>Shipping :{{ shipping }}</p>

        <ul>
            <li v-for='detail in details'>{{ detail }}</li>
        </ul>
    </div>

    <div v-for='(variant, index) in variants'
            :key='variant.variantID'
            class = 'color-box'
            :style='{backgroundColor:variant.variantColor }'
            @mouseover="updateProduct(index)">
    </div>

    <button v-on:click="addToCart();"
    :disabled="!inStock"
    :class="{disabledButton: !inStock}">Add to cart</button>

    <div>
        <p>Cart({{cart}})</p>
    </div>

</div>`,
data() {
    return {
        brand:'Vue Mastry',
        product: 'Socks',
        selectedVariant: 0,
        details: ['80% cotton', '20% polyster', 'Gender-nuteral'],
        variants:[
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'vmSocks-green-onWhite.jpg',
                variantQuantity:10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'vmSocks-blue-onWhite.jpg',
                variantQuantity:0
            }
        ],
        cart:0
    }
},
methods:{
    addToCart: function() {
        this.cart += 1
        this.variants[this.selectedVariant].variantQuantity -= 1
    },
    updateProduct: function(index) {
        this.selectedVariant = index
        console.log(index)
    }
},
computed: {
    title(){
        return this.brand + ' ' + this.product
    },
    image(){
        return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
        return this.variants[this.selectedVariant].variantQuantity
    },
    shipping(){
        if (this.premium){
            return "free"
        }else{
            return 2.99
        }
    }
}
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})