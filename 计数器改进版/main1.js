const { ref, createApp, computed } = Vue;
createApp({
    setup() {
        const width = ref(0);
        const num = ref(0);

        const bg = ref('');
        const add = () => {
            num.value++;
            width.value += 1;
            if (count.value > 100) {
                count.value = 100;
                width.value = 100;
                alert('当前是100%');
            }
        };
        const less = () => {
            num.value--;
            width.value -= 1;
        };
        const reset = () => {
            num.value = 0;
            width.value = 0;
        };
        const changeColor = computed(() => {
            if (num.value < 0) {
                bg.value = 'red'
            } else if (num.value >= 0 && num.value < 10) {
                bg.value = 'gray';
            }
            else {
                bg.value = 'green';
            }
            return bg.value;
        });
        return {
            width,
            num,
            bg,
            add,
            less,
            reset,
            changeColor,
        }
    }
}).mount('#app')
