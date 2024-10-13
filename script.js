var clicks = 0;
var steroids = 0;
var steroidcost = 10;
var ascentions = 0;
var ascentioncost = 15000;
var multiplier = 1;
var machines = 0;
var machinecost = 100000000000000000000000000000000000000;


// Load game data from local storage
function loadGame() {
    clicks = parseInt(localStorage.getItem('clicks')) || 0;
    steroids = parseInt(localStorage.getItem('steroids')) || 0;
    steroidcost = parseInt(localStorage.getItem('steroidcost')) || 10;
    ascentions = parseInt(localStorage.getItem('ascentions')) || 0;
    ascentioncost = parseInt(localStorage.getItem('ascentioncost')) || 15000;
    multiplier = parseInt(localStorage.getItem('multiplier')) || 1;
    machines = parseInt(localStorage.getItem('machines')) || 0;

    // Update the displays
    document.getElementById('cdisplay').value = clicks;
    document.getElementById('cdisp').value = clicks / 1000000000000000000000000000000000000;
    document.getElementById('sdisplay').value = steroids;
    document.getElementById('sdisplay2').value = steroidcost;
    document.getElementById('ascend').value = ascentions;
    document.getElementById('ascendcost').value = ascentioncost;
    document.getElementById('multi').value = multiplier;
    document.getElementById('mdisplay').value = machines;
    document.getElementById('mdisplay2').value = machinformula() / 1000000000000000000000000000000000000;
    let cpz = document.getElementById('cps');
    if (ascentions > 0 && steroids > 0)
        {
            cpz.value = (((steroids * (ascentions * ascentions * 2)) * (steroids * (ascentions * ascentions * 2))) * machines) / 1000000000000000000000000000000000000;
        }
        else 
        {
            cpz.value = (((steroids * steroids) + 1) * machines) / 1000000000000000000000000000000000000;
        }
}

// Save game data to local storage
function saveGame() {
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('steroids', steroids);
    localStorage.setItem('steroidcost', steroidcost);
    localStorage.setItem('ascentions', ascentions);
    localStorage.setItem('ascentioncost', ascentioncost);
    localStorage.setItem('multiplier', multiplier);
    localStorage.setItem('machines', machines);
}

function ResetData() {
    localStorage.setItem('clicks', 0);
    localStorage.setItem('steroids', 0);
    localStorage.setItem('steroidcost', 10);
    localStorage.setItem('ascentions', 0);
    localStorage.setItem('ascentioncost', 15000);
    localStorage.setItem('multiplier', 1);
    localStorage.setItem('machines', 0);

    loadGame();
}

loadGame();

function Clicked()
{
if (ascentions > 0 && steroids > 0)
{
    clicks += ((steroids * (ascentions * ascentions * 2)) * (steroids * (ascentions * ascentions * 2)));
}
else 
{
    clicks += (steroids * steroids) + 1;
}
let display = document.getElementById('cdisplay');
let disp = document.getElementById('cdisp');

display.value = clicks;
disp.value = clicks / 1000000000000000000000000000000000000;
saveGame();
}

function buysteroids()
{
    let displays = document.getElementById('sdisplay');
    let displays2 = document.getElementById('sdisplay2');
    let display = document.getElementById('cdisplay');

    if (clicks >= steroidformula(steroids * multiplier))
    {
        clicks -= steroidformula(steroids * multiplier);
        if (steroids < 250)
        steroids += multiplier;
        else
        steroids += multiplier * steroids;

        steroidcost = steroidformula(steroids * multiplier);
        display.value = clicks;
    }

    displays.value = steroids;
    displays2.value = steroidcost;
    
}

function steroidformula(stoids)
{
return 10 + Math.floor(stoids * 2.5) * stoids * 3;
}

function priceformula()
{
if (ascentions > 3)
    return 150000 * (ascentioncost * (Math.floor(ascentions * 25) * ascentions * 30));
else if (ascentions < 2)
    return 15000 * (Math.floor(ascentions * 2.5) * ascentions * 3);
else
    return 15000 * (Math.floor(ascentions * 10) * ascentions * 3);
}

function machinformula()
{
    return 100000000000000000000000000000000000000 * Math.pow(2, machines);
}

function ascend()
{
if (clicks >= ascentioncost)
{
    let displays = document.getElementById('sdisplay');
    let displays2 = document.getElementById('sdisplay2');
    let display = document.getElementById('cdisplay');
    let screen = document.getElementById('ascend');
    let screen2 = document.getElementById('ascendcost');
    let disp = document.getElementById('cdisp');

    clicks = 0;
    steroids = 0;
    steroidcost = 10;

    ascentions++;
    ascentioncost = priceformula();

    displays.value = steroids;
    displays2.value = steroidcost;
    display.value = clicks;
    screen.value = ascentions;
    screen2.value = ascentioncost;
    disp.value = clicks / 1000000000000000000000000000000000000;
}
}

function Earn(amnt)
{
clicks += amnt;

let display = document.getElementById('cdisplay');

display.value = clicks;
}

function mlti(type)
{
    let display = document.getElementById('multi');
    let displays2 = document.getElementById('sdisplay2');

    if (type == 1)
    {
        multiplier = 1;
    }
    else if (type == 10)
    {
        multiplier = 10;
    }
    else 
    {
        multiplier = 100;
    }

    displays2.value = steroidformula(steroids * multiplier)

    display.value = multiplier;
    
}

function buymachine()
{
    let fis = document.getElementById('mdisplay');
    let fis2 = document.getElementById('mdisplay2');

    if (machines > 0)
    {
        if (clicks >= machinformula())
        {
                clicks -= machinformula();
                machines++;
            
                fis.value = machines;
                fis2.value = machinformula() / 1000000000000000000000000000000000000;
        }
    }
    else if (clicks >= 1000000000000000000000000000000000000)
        {
                clicks -= 1000000000000000000000000000000000000;
                machines++;
            
                fis.value = machines;
                fis2.value = machinformula() / 1000000000000000000000000000000000000;
        }
}


function startCPS()
{
    setInterval(function()
{
let cpz = document.getElementById('cps');

var i = 0;
while (i < machines)
{
    Clicked();
    i++;
}
if (ascentions > 0 && steroids > 0)
    {
        cpz.value = (((steroids * (ascentions * ascentions * 2)) * (steroids * (ascentions * ascentions * 2))) * machines) / 1000000000000000000000000000000000000;
    }
    else 
    {
        cpz.value = (((steroids * steroids) + 1) * machines) / 1000000000000000000000000000000000000;
    }
}, 1000)
}

startCPS();