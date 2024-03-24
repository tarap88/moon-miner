

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

let fish = 0;


// Cheese Upgrade

function mine() {
    fish++;
    update();
}

function update() {
    const cheeseCountElm = document.getElementById('fish-count');
    cheeseCountElm.innerHTML = `<h3><i class="mdi mdi-fish pt-3"></i></h3>${fish}`;

}
update();
drawIceUpgrades();
drawFlameUpgrades();
setInterval(automaticIgloo, 3000);
setInterval(automaticBlizzard, 3000);

// Click Upgrades// 
// REVIEW Could I have done both of these as a forEach so that I don't have so much code?

// Ice Axe

function buyIceAxe() {
    const iceAxeUpgrade = clickUpgrades.find(upgrade => upgrade.name === 'iceAxe');
    if (fish >= iceAxeUpgrade.price) {
        iceAxeUpgrade.quantity++;
        fish -= iceAxeUpgrade.price;
        // console.log('Purchased Ice Axe');
        drawIceUpgrades();
        update();
    } else {
        window.alert('Not Enough Fish');
        // console.log('No funds, No Ice Axe For You!')
    }

}


// Flamethrower Axe

function buyFlamethrower() {
    const flamethrowerUpgrade = clickUpgrades.find(upgrade => upgrade.name === 'flameThrower');
    if (fish >= flamethrowerUpgrade.price) {
        flamethrowerUpgrade.quantity++;
        fish -= flamethrowerUpgrade.price;
        // console.log('Purchased Flamethrower');
        drawFlameUpgrades();
        update();
    } else {
        window.alert('Not Enough Fish');
        // console.log('No funds, No Flamethrower For You!')
    }
}

function automaticIgloo() {
    const iglooUpgrade = automaticUpgrades.find(upgrade => upgrade.name === 'igloo');
    if (fish >= iglooUpgrade.price) {
        iglooUpgrade.quantity++;
        fish -= iglooUpgrade.price;
        // console.log('You got an Igloo!');
        drawIglooUpgrades();
        update();
    } else {
        // console.log('No funds, No Igloo For You!')
        update();
    }
}

function automaticBlizzard() {
    const blizzardUpgrade = automaticUpgrades.find(upgrade => upgrade.name === 'blizzard');
    if (fish >= blizzardUpgrade.price) {
        blizzardUpgrade.quantity++;
        fish -= blizzardUpgrade.price;
        // console.log('Wow! You got a blizzard');
        drawIglooUpgrades();
        update();
    } else {
        // console.log('No funds, No Blizzard For You!')
        update();
    }
}


function drawIceUpgrades() {
    console.log('drawing upgrades');
    clickUpgrades.forEach(upgrade => {
        let iceAxeElm = document.getElementById(upgrade.name);
        // console.log('success', iceAxeElm);
        iceAxeElm.innerHTML = `<span><i class="mdi mdi-fish"></i></span>${upgrade.quantity}`
    })

}


function drawFlameUpgrades() {
    console.log('drawing upgrades');
    clickUpgrades.forEach(upgrade => {
        let flameThrowerElm = document.getElementById(upgrade.name);
        // console.log('success', flameThrowerElm);
        flameThrowerElm.innerHTML = `<span><i class="mdi mdi-fish"></i></span>${upgrade.quantity}`
    })

}

function drawIglooUpgrades() {
    console.log('drawing upgrades');
    automaticUpgrades.forEach(upgrade => {
        let iglooElm = document.getElementById(upgrade.name);
        // console.log('success', iglooElm);
        iglooElm.innerHTML = `<span><i class="mdi mdi-fish"></i></span>${upgrade.quantity}`
    })

}

function drawBlizzardUpgrades() {
    console.log('drawing upgrades');
    automaticUpgrades.forEach(upgrade => {
        let blizzardElm = document.getElementById(upgrade.name);
        // console.log('success', blizzardElm);
        blizzardElm.innerHTML = `<span><i class="mdi mdi-fish"></i></span>${upgrade.quantity}`
    })

}

