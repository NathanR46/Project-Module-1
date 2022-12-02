// Array copied and pasted from a website
// used Ctrl+F to add in extra info about each card by replacing
const cards = [{name: "Minions", id: 1, cost: "3", type: "Troop"}, {name: "Archers", id: 2, cost: "3", type: "Troop"}, {name: "Knight", id: 3, cost: "3", type: "Troop"}, {name: "Spear Goblins", id: 4, cost: "2", type: "Troop"}, {name: "Goblins", id: 5, cost: "2", type: "Troop"}, 
{name: "Bomber", id: 6, cost: "2", type: "Troop"}, {name: "Skeletons", id: 7, cost: "1", type: "Troop"}, {name: "Barbarians", id: 8, cost: "5", type: "Troop"}, {name: "Skeleton Dragons", id: 9, cost: "4", type: "Troop"}, {name: "Fire Spirit", id: 10, cost: "1", type: "Troop"}, 
{name: "Bats", id: 11, cost: "2", type: "Troop"}, {name: "Royal Recruits", id: 12, cost: "7", type: "Troop"}, {name: "Royal Giant", id: 13, cost: "6", type: "Troop"}, {name: "Ice Spirit", id: 14, cost: "1", type: "Troop"}, {name: "Goblin Gang", id: 15, cost: "3", type: "Troop"}, 
{name: "Elite Barbarians", id: 16, cost: "6", type: "Troop"}, {name: "Minion Horde", id: 17, cost: "5", type: "Troop"}, {name: "Electro Spirit", id: 18, cost: "1", type: "Troop"}, {name: "Skeleton Barrel", id: 19, cost: "3", type: "Troop"}, {name: "Rascals", id: 20, cost: "5", type: "Troop"}, 
{name: "Firecracker", id: 21, cost: "3", type: "Troop"}, {name: "Mini P.E.K.K.A", id: 22, cost: "4", type: "Troop"}, {name: "Musketeer", id: 23, cost: "4", type: "Troop"}, {name: "Giant", id: 24, cost: "5", type: "Troop"}, {name: "Valkyrie", id: 25, cost: "4", type: "Troop"}, 
{name: "Mega Minion", id: 26, cost: "3", type: "Troop"}, {name: "Battle Ram", id: 27, cost: "4", type: "Troop"}, {name: "Wizard", id: 28, cost: "5", type: "Troop"}, {name: "Hog Rider", id: 29, cost: "4", type: "Troop"}, {name: "Flying Machine", id: 30, cost: "4", type: "Troop"}, 
{name: "Royal Hogs", id: 31, cost: "5", type: "Troop"}, {name: "Three Musketeers", id: 32, cost: "9", type: "Troop"}, {name: "Ice Golem", id: 33, cost: "2", type: "Troop"}, {name: "Dart Goblin", id: 34, cost: "3", type: "Troop"}, {name: "Zappies", id: 35, cost: "4", type: "Troop"}, 
{name: "Heal Spirit", id: 36, cost: "1", type: "Troop"}, {name: "Elixir Golem", id: 37, cost: "3", type: "Troop"}, {name: "Battle Healer", id: 38, cost: "5", type: "Troop"}, {name: "Baby Dragon", id: 39, cost: "4", type: "Troop"}, {name: "Skeleton Army", id: 40, cost: "3", type: "Troop"}, 
{name: "Giant Skeleton", id: 41, cost: "6", type: "Troop"}, {name: "P.E.K.K.A", id: 42, cost: "7", type: "Troop"}, {name: "Wall Breakers", id: 43, cost: "2", type: "Troop"}, {name: "Witch", id: 44, cost: "5", type: "Troop"}, {name: "Balloon", id: 45, cost: "5", type: "Troop"}, 
{name: "Dark Prince", id: 46, cost: "4", type: "Troop"}, {name: "Prince", id: 47, cost: "5", type: "Troop"}, {name: "Goblin Giant", id: 48, cost: "6", type: "Troop"}, {name: "Hunter", id: 49, cost: "4", type: "Troop"}, {name: "Golem", id: 50, cost: "8", type: "Troop"}, 
{name: "Electro Dragon", id: 51, cost: "5", type: "Troop"}, {name: "Electro Giant", id: 52, cost: "7", type: "Troop"}, {name: "Guards", id: 53, cost: "3", type: "Troop"}, {name: "Bowler", id: 54, cost: "5", type: "Troop"}, {name: "Executioner", id: 55, cost: "5", type: "Troop"}, 
{name: "Cannon Cart", id: 56, cost: "5", type: "Troop"}, {name: "Miner", id: 57, cost: "3", type: "Troop"}, {name: "Princess", id: 58, cost: "3", type: "Troop"}, {name: "Mega Knight", id: 59, cost: "7", type: "Troop"}, {name: "Ice Wizard", id: 60, cost: "3", type: "Troop"}, 
{name: "Inferno Dragon", id: 61, cost: "4", type: "Troop"}, {name: "Ram Rider", id: 62, cost: "5", type: "Troop"}, {name: "Lava Hound", id: 63, cost: "7", type: "Troop"}, {name: "Electro Wizard", id: 64, cost: "4", type: "Troop"}, {name: "Sparky", id: 65, cost: "6", type: "Troop"}, 
{name: "Royal Ghost", id: 66, cost: "3", type: "Troop"}, {name: "Magic Archer", id: 67, cost: "4", type: "Troop"}, {name: "Bandit", id: 68, cost: "3", type: "Troop"}, {name: "Night Witch", id: 69, cost: "4", type: "Troop"}, {name: "Lumberjack", id: 70, cost: "4", type: "Troop"}, 
{name: "Mother Witch", id: 71, cost: "4", type: "Troop"}, {name: "Fisherman", id: 72, cost: "3", type: "Troop"}, {name: "Archer Queen", id: 73, cost: "5", type: "Troop"}, {name: "Golden Knight", id: 74, cost: "4", type: "Troop"}, {name: "Skeleton King", id: 75, cost: "4", type: "Troop"}, 
{name: "Mighty Miner", id: 76, cost: "4", type: "Troop"}, {name: "Arrows", id: 77, cost: "3", type: "Spell"}, {name: "Zap", id: 78, cost: "2", type: "Spell"}, {name: "Giant Snowball", id: 79, cost: "2", type: "Spell"}, {name: "Royal Delivery", id: 80, cost: "3", type: "Spell"}, 
{name: "Fireball", id: 81, cost: "4", type: "Spell"}, {name: "Rocket", id: 82, cost: "6", type: "Spell"}, {name: "Earthquake", id: 83, cost: "3", type: "Spell"}, {name: "Barbarian Barrel", id: 84, cost: "2", type: "Spell"}, 
{name: "Goblin Barrel", id: 85, cost: "3", type: "Spell"}, {name: "Lightning", id: 86, cost: "6", type: "Spell"}, {name: "Freeze", id: 87, cost: "4", type: "Spell"}, {name: "Poison", id: 88, cost: "4", type: "Spell"}, {name: "Mirror", id: 89, cost: "?", type: "Spell"}, 
{name: "Rage", id: 90, cost: "2", type: "Spell"}, {name: "Clone", id: 91, cost: "3", type: "Spell"}, {name: "Tornado", id: 92, cost: "3", type: "Spell"}, {name: "The Log", id: 93, cost: "2", type: "Spell"}, {name: "Graveyard", id: 94, cost: "5", type: "Spell"}, 
{name: "Cannon", id: 95, cost: "3", type: "Building"}, {name: "Mortar", id: 96, cost: "4", type: "Building"}, {name: "Tesla", id: 97, cost: "4", type: "Building"}, {name: "Goblin Cage", id: 98, cost: "4", type: "Building"}, {name: "Tombstone", id: 99, cost: "3", type: "Building"}, 
{name: "Inferno Tower", id: 100, cost: "5", type: "Building"}, {name: "Goblin Hut", id: 101, cost: "5", type: "Building"}, {name: "Furnace", id: 102, cost: "4", type: "Building"}, {name: "Bomb Tower", id: 103, cost: "4", type: "Building"}, {name: "Elixir Collector", id: 104, cost: "6", type: "Building"}, 
{name: "Barbarian Hut", id: 105, cost: "7", type: "Building"}, {name: "X-Bow", id: 106, cost: "6", type: "Building"}, {name: "Goblin Drill", id: 107, cost: "4", type: "Building"}]; 

function showCard() { 
    let cardSelection = document.getElementById("User Input");
    console.log(cardSelection.value);
    let result = cards.find( ({ name }) => name === cardSelection.value );
    console.log(result);
    let paragraph = document.getElementById("selection");
    paragraph.innerHTML = ("Card Name: " + result.name + ", Elixir Cost: " + result.cost);
};

function clearData() {
    let paragraph = document.getElementById("selection");
    paragraph.innerHTML = ("");
};
