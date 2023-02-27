var greyArr = [
    'A wandering Tonic Salesman strolls into town on a horse pulling a carriage who\'s insides are only illuminated by the bright glow of the many potions inside.',
    '1d4 thugs attempt to mug you on the street.',
    'A poor beggar pleads to the party to guide him through nearby dangers to visit his father\'s grave. He dissapears once the grave is found, leaving a good deal of money behind. The grave has the beggar\'s name on it.',
    'A pan goes flying by one of the party member\'s heads. A nearby angry wife is throwing her husbands things out of the house.'
]

var greenArr = [
    'forst',
    'forrust',
    'p'
]

var redArr = [
    'fire',
    'desert',
    'e'
]

var blueArr = [
    'blue',
    'ocean',
    'wortor'
]

var purpleArr = [
    'purple',
    'shrek',
    'unga bunga'
]

var brownArr = [
    'dirt',
    'spooky cave',
    '1d4 spooky things'
]

var cyanArr = [
    'cold',
    'chilly',
    'brr'
]

function generateGrey() {
    var ranNum = Math.floor(Math.random() * (greyArr.length));
    document.getElementById('display').innerHTML = greyArr[ranNum];
}

function generateGreen() {
    var ranNum = Math.floor(Math.random() * (greenArr.length));
    document.getElementById('display').innerHTML = greenArr[ranNum];
}

function generateRed() {
    var ranNum = Math.floor(Math.random() * (redArr.length));
    document.getElementById('display').innerHTML = redArr[ranNum];
}

function generateBlue() {
    var ranNum = Math.floor(Math.random() * (blueArr.length));
    document.getElementById('display').innerHTML = blueArr[ranNum];
}

function generatePurple() {
    var ranNum = Math.floor(Math.random() * (purpleArr.length));
    document.getElementById('display').innerHTML = purpleArr[ranNum];
}

function generateBrown() {
    var ranNum = Math.floor(Math.random() * (brownArr.length));
    document.getElementById('display').innerHTML = brownArr[ranNum];
}

function generateCyan() {
    var ranNum = Math.floor(Math.random() * (cyanArr.length));
    document.getElementById('display').innerHTML = cyanArr[ranNum];
}
