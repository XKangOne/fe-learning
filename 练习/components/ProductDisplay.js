app.component('product-display', {
    props: {
        free: {
            type: Boolean,
            required: true,
        }
    },
    template: `
        <div class="product-display">
                <p>{{msg}}</p>
            <div class="product-container">
                <div class="product-image">
                    <img :src="image">
                </div>

                <div class="product-info">
                    <h1>{{product}}</h1>
                    <p>{{description}}</p>
                    <p v-show="inStock">In Stock</p>
                    <p style="display:none">In Stock</p>
                    <a :href="url">Vue3 官网</a>
                    <p v-if="inStock">in stock</p>
                    <p v-else-if ="inventory<=10 && inventory >0">Almost sold out</p>
                    <p v-else>Out of stock</p>
                    <ul>
                        <li v-for="detail in details">{{detail}}</li>
                    </ul>

                    <div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)" class="color-circle" :style="{backgroundColor:variant.color}">
                        <!-- {{variant.color}} -->
                    </div>
                    <button class="button" :class="{disalbeButton:!inStock}" :disabled="!inStock" v-on:click="addTochart">Add to Cart</button>
                    <button class="button" @click="removechart">Remove Item</button>
                </div>
            </div>
        </div>`,
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpg',
            url: 'https://cn.vuejs.org',
            inStock: true,
            inventory: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg'
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg'
                }
            ],
            cart: 0
        }
    },
    methods: {
        addTochart() {
            this.cart += 1
        },
        removechart() {
            this.cart -= 1
            if (this.cart = 0) {
                this.cart = 0
            }
        },
        updateImage(variantsImage) {
            this.image = variantsImage
        },
    },
    computed: {
        msg() {
            if (this.free === true) {
                return '免费';
            }
            return '收费'
        }
    }

});