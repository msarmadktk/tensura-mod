export interface Boss {
  slug: string;
  name: string;
  image: string;
  gallery?: string[];
  tags?: string[];
  description: string;
  floor: number;
  ep?: string;
  hp?: string;
  armor?: string;
  attack?: string;
  abilities?: string[];
  rewards?: string[];
  stats?: Record<string, string | number>;
  meta?: Record<string, any>;
}

export const bosses: Boss[] = [
  {
    slug: "black-spider",
    name: "Black Spider Boss",
    image: "/images/bosses/black-spider.png",
    tags: ["Floor 10", "Web Specialist", "Poison"],
    description: "A massive arachnid that controls the web-covered chambers of Floor 10. This venomous beast uses its webbing to trap victims before delivering fatal poison attacks.",
    floor: 10,
    ep: "70,000–80,000",
    hp: "250",
    armor: "10",
    attack: "25",
    abilities: [
      "Web Trap + Drag (0 damage, webs player for 30 seconds)",
      "Egg Drop (spawns smaller black spiders)",
      "Web Shot (projectile that slows movement by 50% for 5 seconds)",
      "Bite/Jump/Slam Attacks (various poison-inflicting attacks)"
    ],
    rewards: ["3 Gold Coins (first kill)", "Spider Dagger"],
    stats: {
      "Difficulty": "Beginner",
      "Primary Threat": "Web Control",
      "Weakness": "Ranged Combat"
    }
  },
  {
    slug: "evil-centipede",
    name: "Evil Centipede Boss",
    image: "/images/bosses/evil-centipede.png",
    tags: ["Floor 20", "Paralysis", "Continuous Damage"],
    description: "A nightmarish arthropod that burrows through Floor 20's rocky terrain. Its segmented body allows for devastating slam attacks and paralytic bites.",
    floor: 20,
    ep: "80,000–90,000",
    hp: "500",
    armor: "15",
    attack: "50",
    abilities: [
      "Slam (grabs and slams players for massive fall damage)",
      "Rush (latches on for continuous damage over time)",
      "Bite Attack (inflicts paralysis for 7 seconds)"
    ],
    rewards: ["5 Gold Coins (first kill)", "Centipede Dagger"],
    stats: {
      "Difficulty": "Intermediate",
      "Primary Threat": "Paralysis Control",
      "Weakness": "Mobility Disruption"
    }
  },
  {
    slug: "ogre-lord",
    name: "Ogre Lord Boss",
    image: "/images/bosses/ogre-lord.png",
    tags: ["Floor 30", "Fire Master", "Heavy Hitter"],
    description: "The brutal ruler of Floor 30's fiery domain. This massive ogre wields devastating flame attacks and commands lesser ogre subordinates in battle.",
    floor: 30,
    ep: "50,000",
    hp: "250",
    armor: "30",
    attack: "100",
    abilities: [
      "Axe Block (stuns attackers, triggers counter-attack)",
      "Meteor Strike (4× damage in 4×4 area)",
      "Double Strike (two consecutive axe swings)",
      "Ogre Flame (ignores resistances, spams at range)"
    ],
    rewards: ["10 Gold Coins (first kill)", "Ogre Series equipment"],
    stats: {
      "Difficulty": "Advanced",
      "Primary Threat": "Area Damage",
      "Subordinates": "Ogre Minions (HP: 100, Armor: 10, Attack: 20)"
    }
  },
  {
    slug: "tempest-serpent",
    name: "Tempest Serpent Boss",
    image: "/images/bosses/tempest-serpent.png",
    tags: ["Floor 40", "Poison Master", "Storm Controller"],
    description: "A colossal serpent that rules the storm-wracked chambers of Floor 40. Its venomous breath creates deadly poison clouds while its massive coils deliver crushing attacks.",
    floor: 40,
    ep: "90,000–100,000",
    hp: "1,000",
    armor: "100",
    attack: "200",
    abilities: [
      "Poison Cloud (100 DPS in 7×7 area with massive corrosion)",
      "Tail Swipe (AoE knockback attack)",
      "Bite Attack (1.5× damage with fatal poison)",
      "Constrict (15-second suffocation grab)"
    ],
    rewards: ["20 Gold Coins (first kill)", "Serpent Armor"],
    stats: {
      "Difficulty": "Expert",
      "Primary Threat": "Poison Area Control",
      "Weakness": "Long Range Combat"
    }
  },
  {
    slug: "mezul",
    name: "Mezul",
    image: "/images/bosses/mezul.png",
    tags: ["Floor 50", "Limiter Skill", "Elite Boss"],
    description: "One of the twin guardians of Floor 50. Mezul wields the terrifying Limiter skill that forces 1v1 combat and applies debuffs based on EP comparison.",
    floor: 50,
    ep: "130,000",
    hp: "2,000",
    armor: "200",
    attack: "500",
    abilities: [
      "Limiter (forces 1v1 battles based on EP comparison)",
      "Self Regen",
      "Magic Jamming",
      "Strike, Backspin Strike (2× damage), Horse Kick",
      "Ultra Spear (9,000 total damage)",
      "Block (25% chance), Whirlwind Strike"
    ],
    rewards: ["Minos Armor", "Minos Trident"],
    stats: {
      "Difficulty": "Master",
      "Primary Threat": "EP-Based Combat System",
      "Unique Skill": "Limiter (Boss-Only)"
    }
  },
  {
    slug: "gozul",
    name: "Gozul",
    image: "/images/bosses/gozul.png",
    tags: ["Floor 50", "Lightning Master", "Elite Boss"],
    description: "The second twin guardian of Floor 50. Gozul possesses Ultraspeed Regen and devastating lightning enhancement attacks that grow stronger as the battle progresses.",
    floor: 50,
    ep: "130,000",
    hp: "2,000",
    armor: "200",
    attack: "500",
    abilities: [
      "Limiter (forces 1v1 battles based on EP comparison)",
      "Ultraspeed Regen (HP won't decrease until EP reaches 0%)",
      "Lightning Enhancement at 75% EP (+lightning damage, Shocked status)",
      "Jump Strike, Electricity Horn, Lightning Charge",
      "Axe Throw, Block, Strike"
    ],
    rewards: ["Minos Armor", "Minos Bardiche"],
    stats: {
      "Difficulty": "Master",
      "Primary Threat": "Regenerative Lightning Combat",
      "Special Enhancement": "Lightning at 75% EP"
    }
  }
];