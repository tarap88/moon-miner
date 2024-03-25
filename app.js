// add this to click upgrades change name  iglooUpgrade.price += 5;

let clickUpgrades = [
    {
        name: 'iceAxe',
        price: 5,
        quantity: 0,
        multiplier: 1
    },

    {
        name: 'flameThrower',
        price: 100,
        quantity: 0,
        multiplier: 20
    }
];

let automaticUpgrades = [
    {
        name: 'igloo',
        price: 5,
        quantity: 0,
        multiplier: 25
    },
    {
        name: 'blizzard',
        price: 1000,
        quantity: 0,
        multiplier: 30
    },


]

let fish = 0;
let multiplier = 1;

// Cheese Upgrade

function mine() {
    fish += 1 * multiplier;
    update();
}

function update() {
    const cheeseCountElm = document.getElementById('fish-count');
    cheeseCountElm.innerHTML = `<h3><i class="mdi mdi-fish pt-3"></i></h3>${fish}`;

    const multiplierElm = document.getElementById('multiplier');
    multiplierElm.innerHTML = `${multiplier}`;

    const iceAxeQuantity = document.getElementById('iceAxeQuantity');
    iceAxeQuantity.innerHTML = `${clickUpgrades[0].quantity}`;

    const iglooQuantity = document.getElementById('iglooQuantity');
    iglooQuantity.innerHTML = `${clickUpgrades[0].quantity}`;

    const flamethrowerQuantity = document.getElementById('flamethrowerQuantity');
    flamethrowerQuantity.innerHTML = `${clickUpgrades[1].quantity}`;

    const blizzardQuantity = document.getElementById('blizzardQuantity');
    blizzardQuantity.innerHTML = `${clickUpgrades[1].quantity}`;

}
update();
drawIceUpgrades();
drawFlameUpgrades();
// setInterval(automaticIgloo, 3000);
setInterval(automaticBlizzard, 10000);
// setInterval(collectAutoUpgrades, 3000);

// Click Upgrades// 
// REVIEW Could I have done both of these as a forEach so that I don't have so much code?

// Ice Axe

function buyIceAxe() {
    const iceAxeUpgrade = clickUpgrades.find(upgrade => upgrade.name === 'iceAxe');
    if (fish >= iceAxeUpgrade.price) {
        iceAxeUpgrade.quantity++;
        fish -= iceAxeUpgrade.price;
        multiplier += iceAxeUpgrade.multiplier;
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
        multiplier += flamethrowerUpgrade.multiplier;
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
        iglooUpgrade.price += 5;
        multiplier += iglooUpgrade.multiplier;
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
        blizzardUpgrade.price += 5;
        multiplier += blizzardUpgrade.multiplier;
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




/*function collectAutoUpgrades() {
    let totalAutoFish = 0;
    automaticUpgrades.forEach(upgrade => {
        totalAutoFish += upgrade.quantity * upgrade.multiplier;
        console.log('success')
    });
    fish += totalAutoFish;
    update();
}
*/