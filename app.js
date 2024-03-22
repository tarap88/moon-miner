let cheese = 0;

function mine() {
    cheese++;
    update();
}

function update() {
    const cheeseCountElm = document.getElementById('cheese-count');
    cheeseCountElm.innerHTML = `<h3><i class="mdi mdi-cheese pt-3"></i></h3>${cheese}`;
}