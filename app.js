// app.js

const metalTypes = [
    "Copper Scrap",
    "Steel Scrap",
    "Aluminium Scrap",
    "Iron Scrap",
    "Mixed Metal Scrap"
];

function getMetalPrice(type) {
    const prices = {
        "Copper Scrap": "KSh 950 per kg",
        "Steel Scrap": "KSh 120 per kg",
        "Aluminium Scrap": "KSh 300 per kg",
        "Iron Scrap": "KSh 100 per kg",
        "Mixed Metal Scrap": "KSh 180 per kg"
    };

    return prices[type] || "KSh 150 per kg";
}

function getRandomLocation() {
    const locations = [
        "Nairobi Industrial Area",
        "Ongata Rongai",
        "Mombasa Road",
        "Thika Yard",
        "Kiambu Scrap Center"
    ];

    return locations[Math.floor(Math.random() * locations.length)];
}

function getMetalImage(type) {
    const images = {
        "Copper Scrap": "copper.jpg",
        "Steel Scrap": "steel.jpg",
        "Aluminium Scrap": "aluminium.jpg",
        "Iron Scrap": "iron.jpg",
        "Mixed Metal Scrap": "mixed.jpg"
    };

    return images[type] || images["Mixed Metal Scrap"];
}

// export for testing
module.exports = {
    getMetalPrice,
    getRandomLocation,
    getMetalImage,
    metalTypes
};