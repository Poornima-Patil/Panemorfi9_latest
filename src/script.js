function menuClick() {
    let menuBar = document.getElementById("menu-bars");
    let xBar = document.getElementById("x-bars");
    let menuList = document.getElementById("menu-list");

    menuBar.classList.toggle("hidden");
    xBar.classList.toggle("hidden");
    menuList.classList.toggle("hidden");
}