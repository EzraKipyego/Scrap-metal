let allData = [];


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
        "Copper Scrap": "https://images.unsplash.com/photo-1580810734898-5e1753f23337?q=80&w=435",
        "Steel Scrap": "https://plus.unsplash.com/premium_photo-1661963247622-be10e1ea2c25?q=80&w=871&auto=format&fit=crop",
        "Aluminium Scrap": "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?q=80&w=326",
        "Iron Scrap": "https://media.istockphoto.com/id/613101492/photo/iron-pipe.jpg",
        "Mixed Metal Scrap": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e"
    };

    return images[type] || images["Mixed Metal Scrap"];
}


window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("listings");
    if (container) {
        container.innerHTML = "<p>Loading scrap listings...</p>";
    }
});


fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {

        let used = [];

        allData = data.map(item => {

            let metalType = metalTypes[Math.floor(Math.random() * metalTypes.length)];

            // reduce repetition slightly
            if (used.slice(-2).every(t => t === metalType)) {
                metalType = metalTypes[Math.floor(Math.random() * metalTypes.length)];
            }

            used.push(metalType);

            return {
                id: item.id,
                name: `${metalType} - Grade ${Math.floor(Math.random() * 5) + 1}`,
                location: getRandomLocation(),
                price: getMetalPrice(metalType),
                image: getMetalImage(metalType)
            };
        });

        localStorage.setItem("scrapData", JSON.stringify(allData));

        showItems(allData);
    })
    .catch(err => {
        document.getElementById("listings").innerHTML =
            "<p style='color:red;'>Failed to load listings</p>";
        console.log(err);
    });


function showItems(items) {
    let container = document.getElementById("listings");
    container.innerHTML = "";

    items.forEach(item => {

        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = item.image;

        let name = document.createElement("h3");
        name.textContent = item.name;

        let location = document.createElement("p");
        location.textContent = "Location: " + item.location;

        let price = document.createElement("p");
        price.textContent = "Price: " + item.price;

        let btn = document.createElement("button");
        btn.textContent = "View";
        btn.onclick = () => {
            window.location.href = "details.html?id=" + item.id;
        };

        card.append(img, name, location, price, btn);
        container.appendChild(card);
    });
}

/* =========================
   SEARCH (IMPROVED UX)
========================= */
function searchItems() {
    let input = document.getElementById("search");
    let value = input.value.trim().toLowerCase();

    if (value === "") {
        showItems(allData);
        return;
    }

    let results = allData.filter(item => {
        return (
            item.location.toLowerCase().includes(value) ||
            item.name.toLowerCase().includes(value) ||
            item.price.toLowerCase().includes(value)
        );
    });

    showItems(results);
}

/* LIVE SEARCH */
document.addEventListener("DOMContentLoaded", () => {
    let search = document.getElementById("search");
    if (search) {
        search.addEventListener("input", searchItems);
    }
});