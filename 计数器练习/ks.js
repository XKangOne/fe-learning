let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count -= 1;
        } else if (styles.contains("increase")) {
            count += 1;
        } else {
            count = 0;
        }
        if (count < 0) {
            value.style.color = "red";
        } else if (count > 10) {
            value.style.color = "green";
        } else {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});