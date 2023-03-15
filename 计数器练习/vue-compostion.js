const { ref, createApp } = Vue;
createApp({
    setup() {
        const count = ref(0);
        const resColor = ref("grey");
        const increment = () => {
            count.value += 1;
            if (count.value > 10) {
                resColor.value = "green";
            }else if(count.value>=0 && count.value<10){
                resColor.value="grey";
            }
        };
        const decrement = () => {
            count.value -= 1;
            if (count.value < 0) {
                resColor.value = "red";
            }else if(count.value>=0 && count.value<10){
                resColor.value="grey";
            }
        };
        const reset = () => {
            count.value = 0;
        };
        return {
            count,
            resColor,
            increment,
            decrement,
            reset,
        };
    },
}).mount("#app");
