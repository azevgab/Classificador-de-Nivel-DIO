// 2️⃣ Ranked Matches Calculator

function rankedBalance(wins, losses) {
    let balance = wins - losses;
    let rank = "";

    if (wins < 10) {
        rank = "Iron";
    } else if (wins >= 11 && wins <= 20) {
        rank = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        rank = "Silver";
    } else if (wins >= 51 && wins <= 80) {
        rank = "Gold";
    } else if (wins >= 81 && wins <= 90) {
        rank = "Diamond";
    } else if (wins >= 91 && wins <= 100) {
        rank = "Legendary";
    } else {
        rank = "Immortal";
    }

    return `The Hero has a balance of ${balance} and is at the level of ${rank}.`;
}

// Example usage (change numbers here)
let wins = 75;
let losses = 20;

console.log(rankedBalance(wins, losses));

