let params = new URLSearchParams(window.location.search);
let id = parseInt(params.get("id"));

let container = document.getElementById("details");

// get stored API data from listings page
let allData = JSON.parse(localStorage.getItem("scrapData"));

if (!allData) {
    container.innerHTML = "<p>No data found. Please go back to listings.</p>";
} else {

    let item = allData.find(product => product.id === id);

    if (item) {
        container.innerHTML = `
            <div class="detail-container">

                <img src="${item.image}" class="detail-image">

                <div class="detail-info">

                    <h2>${item.name}</h2>

                    <p><strong>Location:</strong> ${item.location}</p>

                    <p><strong>Price:</strong> ${item.price}</p>

                    <p><strong>Description:</strong> High quality verified scrap metal available for purchase.</p>

                    <button onclick="window.location.href='listings.html'" class="back-btn">
                        ← Back to Listings
                    </button>

                </div>

            </div>
        `;
    } else {
        container.innerHTML = "<p>Item not found</p>";
    }
}