const words = [
  // Minecraft
  "creeper",
  "diamond",
  "enderman",
  "ghast",
  "iron",
  "lava",
  "obsidian",
  "pig",
  "redstone",
  "zombie",
  "blaze",
  "skeleton",
  "spider",
  "cave",
  "emerald",
  "gold",
  "nether",
  "villager",
  "witch",
  "armor",
  "bow",
  "arrow",
  "enchantment",
  "torch",
  "minecart",
  "coal",
  "furnace",
  "pickaxe",
  "shovel",

  // Hypixel Network
  "bedwars",
  "skywars",
  "buildbattle",
  "duels",
  "murdermystery",
  "skyblock",
  "bazaar",
  "hypixel",
  "thirtyvirus",
  "tntgames",
  "refraction",
  "rat",
  "duck",
  "Kloxified",
  "ducky",
  "skyhelper",
  "skycrypt",
  "flexingchimps",
  "fcontop",
  "capturetheflag",
  "survivalgames",
  "thebridge",
  "paintball",
  "arcade",
  "rank",
  "tournament",
  "hyperion",
  "terminator",
  "dungeons",
  "catacombs",
  "voidgloom",
  "revenant",
  "tarantula",
  "valkyrie",
  "astraea",
  "scylla",
  "storm",
  "goldor",
  "necron",
  "maxor",
  "kuudra",
  "simon",
  "hypixel",
  "minion",
  "farming",
  "fishing",
  "combat",
  "alchemy",
  "enchanting",
  "foraging",
  "mining",
  "taming",
  "social",
  "runecrafting",
  "garden",
  "gauntlet",
  "minikloon",
  "dctr_space_helmet",
  "networth",
  "ratfraction",
  "mattthecuber",
  "altpapier",
  "headhunter",
  "anderle02",
  "nomtheratter",
  "nom",
  "nomthethirtyvirus2.0",
  "enderdragon",
  "dragon",
  "goldendragon",
  "bal",
  "sheep",
  "phoenix",
  "crimson",
  "creativemind",
  "claymore",
  "clover",
  "bingo",
  "duckyfie",
  "divan",
  "sosflare",
  "hypixelskyblock",
  "ihatedowntime",
  "adminsfixbugs",
  "newupdatewhen",
  "veteran",
  "level",
  "aurora",
  "bat",
  "downtime",
  "grass",
  "girl",
  "woman",
  "backpack",
  "jujunons",
  "juju",
  "nons",
  "youtuber",
  "contraband",
  "spotify",
  "youtube",
  "twitch",
  "skillaverage",
  "classes",
  "monkeyfinder",
  "monkefinder",
  "monke",
  "euclid",
  "scythe",
  "drill",
  "cookie",
  "p2w",
  "skyblockgems",
  "gems",
  "coins",
  "bits",
  "shower",
  "sleep",
  "axe",
  "inferno",
  "katana",
  "bad_dev",
  "pioneer",
  "pickaxe",
  "wisp",
  "shrooms",
  "snow",
  "artifact",

  // Basic English
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "fish",
  "grape",
  "happy",
  "jump",
  "kite",
  "lion",
  "music",
  "new",
  "orange",
  "queen",
  "red",
  "sun",
  "tree",
  "umbrella",
  "vase",
  "water",
  "yellow",
  "zoo",
  "book",
  "chair",
  "desk",
  "eraser",
  "flower",
  "garden",
  "hat",
  "ice",
  "jungle",
  "key",
  "lake",
  "moon",
  "night",
  "ocean",
  "pizza",
  "quiet",
  "river",
  "snake",
  "table",
  "umbrella",
  "volcano",
  "window",
  "yellow",
  "zebra",

  // Other random words
  "basket",
  "candle",
  "dolphin",
  "eleven",
  "fridge",
  "guitar",
  "hamburger",
  "island",
  "jacket",
  "kangaroo",
  "lemon",
  "mountain",
  "notebook",
  "ocean",
  "pencil",
  "quilt",
  "rainbow",
  "sunglasses",
  "telephone",
  "vegetable",
  "xylophone",
  "yogurt",
  "zebra",
  "airport",
  "backpack",
  "calendar",
  "diamond",
  "electricity",
  "festival",
  "garden",
  "history",
  "internet",
  "jellyfish",
  "kitchen",
  "language",
  "medicine",
  "notebook",
  "oxygen",
  "parade",
  "question",
  "restaurant",
  "science",
  "telephone",
  "university",
  "vegetarian",
  "window",
];

function getRandomWord(length) {
  if (length !== undefined) {
    const filteredWords = words.filter((word) => word.length == length);

    if (filteredWords.length === 0) {
      // eslint-disable-next-line no-throw-literal
      throw `No words found with the ${length} characters.`;
    }

    return filteredWords[Math.floor(Math.random() * filteredWords.length)];
  } else {
    return words[Math.floor(Math.random() * words.length)];
  }
}

function scrambleWord(word) {
  const chars = word.split("");

  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return word === chars.join("") ? scrambleWord(word) : chars.join("");
}

module.exports = { getRandomWord, scrambleWord };
