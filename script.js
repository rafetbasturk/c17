function toggle() {
    let button = document.getElementById("btn");
    let annual = document.getElementsByClassName("annual");
    let monthly = document.getElementsByClassName("monthly");

    if (button.style.float == "left") {
        button.style.float = "right";
    } else {
        button.style.float = "left";
    };

    for (let i = 0; i < monthly.length; i++) {
        monthly[i].classList.toggle("no-display");
        annual[i].classList.toggle("no-display");
    };
}