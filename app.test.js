const {
    getMetalPrice,
    getRandomLocation,
    getMetalImage,
    metalTypes
} = require("./app");

describe("Scrap Metal App Tests", () => {

    test("returns correct copper price", () => {
        expect(getMetalPrice("Copper Scrap")).toBe("KSh 950 per kg");
    });

    test("returns default price for unknown type", () => {
        expect(getMetalPrice("Gold")).toBe("KSh 150 per kg");
    });

    test("returns a random location", () => {
        const loc = getRandomLocation();
        expect(typeof loc).toBe("string");
        expect(loc.length).toBeGreaterThan(0);
    });

    test("returns correct image for metal", () => {
        expect(getMetalImage("Steel Scrap")).toBe("steel.jpg");
    });

    test("metalTypes should contain Copper Scrap", () => {
        expect(metalTypes).toContain("Copper Scrap");
    });

});