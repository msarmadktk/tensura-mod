export interface Structure {
  slug: string;
  name: string;
  image: string;
  gallery?: string[];
  tags?: string[];
  description: string;
  stats?: Record<string, string | number>;
  meta?: Record<string, any>;
}

export const structures: Structure[] = [
  {
    slug: "colosseum-entrance",
    name: "Colosseum Entrance",
    image: "/images/structures/colosseum-entrance.png",
    tags: ["Entrance", "Portal", "Dungeon"],
    description: "The grand entrance to the 50-floor dungeon challenge. This massive stone archway is where your journey begins, requiring either 3 Silver Coins or a Dungeon Voucher for entry.",
    stats: {
      "Entry Fee": "3 Silver Coins or Dungeon Voucher",
      "Floors": "50",
      "Location": "Found via Cartographer Map"
    }
  },
  {
    slug: "dungeon-lobby",
    name: "Dungeon Lobby",
    image: "/images/structures/dungeon-lobby.png",
    tags: ["Safe Zone", "NPCs", "Hub"],
    description: "The central hub where all NPCs reside. This safe zone protects players from death mechanics and serves as your base of operations.",
    stats: {
      "Safety": "No Death Mechanics",
      "NPCs": "7 Essential Characters",
      "Services": "Complete Outfitting"
    }
  },
  {
    slug: "shrine-chamber",
    name: "Shrine Chambers",
    image: "/images/structures/shrine-chamber.png",
    tags: ["Challenges", "Daily", "Rewards"],
    description: "Daily challenge rooms with tiered rewards. Complete various objectives across Bronze, Silver, Gold, and Stellar difficulty tiers.",
    stats: {
      "Tiers": "Bronze, Silver, Gold, Stellar",
      "Reset": "Every 24 Hours",
      "Challenge Types": "5 Different Types"
    }
  },
  {
    slug: "restaurant-floor-95",
    name: "Floor 95 Restaurant",
    image: "/images/structures/restaurant.png",
    tags: ["Floor 95", "Restaurant", "Buffs"],
    description: "Yoshida's fine dining establishment located on Floor 95. Offers a variety of foods and drinks with powerful buffs and special effects.",
    stats: {
      "Location": "Floor 95",
      "Owner": "Yoshida",
      "Service": "Food & Drink Buffs"
    }
  },
  {
    slug: "boss-arena",
    name: "Boss Arenas",
    image: "/images/structures/boss-arena.png",
    tags: ["Combat", "Bosses", "Floors"],
    description: "Specialized combat chambers designed for epic boss encounters. Each floor features unique environmental challenges and atmospheric design.",
    stats: {
      "Boss Floors": "10, 20, 30, 40, 50",
      "Environment": "Floor-Specific Themes",
      "Mechanics": "Environmental Hazards"
    }
  },
  {
    slug: "trap-corridors",
    name: "Trap Corridors",
    image: "/images/structures/trap-corridors.png",
    tags: ["Hazards", "Traps", "Navigation"],
    description: "Dangerous passages filled with various traps and hazards. Features cutting threads, moving tiles, exploding chests, and environmental dangers.",
    stats: {
      "Trap Types": "10+ Different Varieties",
      "Difficulty": "Scales by Floor",
      "Damage": "Up to 200 per trap"
    }
  }
];