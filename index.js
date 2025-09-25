// Hero Level Classifier Challenge

// Variables
let heroName = "Arthas";  
let heroXP = 7540;  
let heroLevel = "";

// Decision Structure
if (heroXP < 1000) {
    heroLevel = "Iron";
} else if (heroXP >= 1001 && heroXP <= 2000) {
    heroLevel = "Bronze";
} else if (heroXP >= 2001 && heroXP <= 5000) {
    heroLevel = "Silver";
} else if (heroXP >= 5001 && heroXP <= 7000) {
    heroLevel = "Gold";
} else if (heroXP >= 7001 && heroXP <= 8000) {
    heroLevel = "Platinum";
} else if (heroXP >= 8001 && heroXP <= 9000) {
    heroLevel = "Ascendant";
} else if (heroXP >= 9001 && heroXP <= 10000) {
    heroLevel = "Immortal";
} else if (heroXP >= 10001) {
    heroLevel = "Radiant";
}

// Output
console.log(`The Hero named ${heroName} is at level ${heroLevel}`);