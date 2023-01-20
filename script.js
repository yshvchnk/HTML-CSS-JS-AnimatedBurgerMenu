const li = document.querySelectorAll("section ul li");
const div = document.querySelector("section ul > div");

Object.keys(li).forEach((key) => {
    li[key].onclick = () => {
        div.classList.remove("menu-1", "menu-2");
        if (key == 1) {
            div.classList.add("menu-1");
        }
        if (key == 2) {
            div.classList.add("menu-2");
        }
    };
});
