
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("podium").textContent = "Pegassi Zorrusso";
  document.getElementById("podium-img").src = "assets/zorrusso.jpg";

  document.getElementById("prize-ride-content").textContent = "Place top 3 in Pursuit Races for 3 days in a row";
  document.getElementById("prizeride-img").src = "assets/euros.png";

  document.getElementById("discount-list").innerHTML = `
    <li>-40% Pegassi Zorrusso <img src='assets/zorrusso.jpg' width='150'/></li>
    <li>-30% Hydra Jet <img src='assets/hydra.jpg' width='150'/></li>
  `;

  document.getElementById("gunvan-content").innerHTML = `
    <li>Railgun - $400,000</li>
    <li>Tactical SMG - $250,000</li>
    <li>Knife - $500</li>
  `;

  document.getElementById("trials").textContent = "HSW: Pacific Bluffs | RC: Vespucci Canals | Standard: Vinewood Bowl";
  document.getElementById("bonuses").textContent = "Double GTA$ on Mr. Faber Work, Stockpile Adversary Mode";
});
