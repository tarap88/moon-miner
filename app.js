
let clickUpgrades = [
    {
        name: 'iceAxe',
        price: 5,
        quantity: 0,
        multiplier: 1
    },

    {
        name: 'flameThrower',
        price: 10,
        quantity: 0,
        multiplier: 20
    }
];

let automaticUpgrades = [
    {
        name: 'igloo',
        price: 5,
        quantity: 0,
        multiplier: 20
    },
    {
        name: 'blizzard',
        price: 10,
        quantity: 0,
        multiplier: 20
    },


]

let cheese = 0;


// Cheese Upgrade

function mine() {
    cheese++;
    update();
}

function update() {
    const cheeseCountElm = document.getElementById('cheese-count');
    cheeseCountElm.innerHTML = `<h3><i class="mdi mdi-cheese pt-3"></i></h3>${cheese}`;

}
update();

// Click Upgrades// 
// REVIEW Could I have done both of these as a forEach so that I don't have so much code?

// Ice Axe

function buyIceAxe() {
    const iceAxeUpgrade = clickUpgrades.find(upgrade => upgrade.name === 'iceAxe');
    if (cheese >= iceAxeUpgrade.price) {
        iceAxeUpgrade.quantity++;
        cheese -= iceAxeUpgrade.price;
        console.log('Purchased Ice Axe');
        drawUpgrades();
        update();
    } else {
        console.log('No funds, No Ice Axe For You!')
    }

}


// Flamethrower Axe

function buyFlamethrower() {
    const flamethrowerUpgrade = clickUpgrades.find(upgrade => upgrade.name === 'flameThrower');
    if (cheese >= flamethrowerUpgrade.price) {
        flamethrowerUpgrade.quantity++;
        cheese -= flamethrowerUpgrade.price;
        console.log('Purchased Flamethrower');
        update();
    } else {
        console.log('No funds, No Flamethrower For You!')
    }
}
update();

function drawUpgrades() {
    console.log('drawing upgrades');
    clickUpgrades.forEach(upgrade => {
        let iceAxeElm = document.getElementById(upgrade.name);
        // console.log('success', iceAxeElm);
        iceAxeElm.innerHTML = `<span><i class="mdi mdi-cheese"></i></span>${upgrade.name}: ${upgrade.quantity}`
    })

}
drawUpgrades();

// use the functions above to make the automatic functions, then set an interval for them