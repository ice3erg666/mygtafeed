
// Live GTA Online Tunables Script
async function fetchTunables() {
    const bonuses = document.getElementById("bonuses");
    const podium = document.getElementById("podium");
    const prizeRide = document.getElementById("prize-ride-content");
    const discounts = document.getElementById("discount-list");
    const gunVan = document.getElementById("gunvan-content");
    const trials = document.getElementById("trials");

    try {
        // Placeholder: Rockstar's tunables URL (requires CORS bypass for front-end)
        const proxy = "https://api.allorigins.win/get?url=";
        const url = "https://prod.cloud.rockstargames.com/titles/gta5/pcros/0/tunables.json";
        const response = await fetch(proxy + encodeURIComponent(url));
        const data = JSON.parse(JSON.parse(await response.text()).contents);

        // Simulated structure (normally you'd extract actual keys here)
        podium.innerText = data.PODIUM_CAR || "Podium Car: Unknown";
        prizeRide.innerText = data.PRIZE_RIDE || "Prize Ride: Unknown";
        bonuses.innerText = data.DOUBLE_REWARDS || "Double GTA$: Unknown";
        discounts.innerText = data.DISCOUNTS || "Discounts: Unknown";
        gunVan.innerText = data.GUN_VAN || "Gun Van Stock: Unknown";
        trials.innerText = data.TIME_TRIALS || "Time Trials: Unknown";

    } catch (error) {
        bonuses.innerText = "Failed to load data.";
        console.error("Error fetching tunables:", error);
    }
}

fetchTunables();
