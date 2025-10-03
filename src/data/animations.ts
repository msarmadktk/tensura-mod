export interface Animation {
  slug: string;
  name: string;
  image: string;
  gallery?: string[];
  tags?: string[];
  description: string;
  stats?: Record<string, string | number>;
  meta?: Record<string, any>;
}

export const animations: Animation[] = [
  {
    slug: "sky-walk",
    name: "Sky Walk Animation",
    image: "/images/animations/sky-walk.png",
    tags: ["Battlewill", "Wind", "Aerial"],
    description: "Master Wind Domination to gain aerial foothold abilities. This animation allows players to create footholds in the sky and perform weapon attacks while airborne.",
    stats: {
      "Requirement": "Wind Domination Mastery",
      "Type": "Battlewill Learnable",
      "Effect": "Aerial Combat Support"
    }
  },
  {
    slug: "combat-stances",
    name: "Combat Stances",
    image: "/images/animations/combat-stances.png",
    tags: ["Combat", "Weapons", "Stances"],
    description: "Various weapon-specific combat animations that enhance your fighting style. Each weapon type features unique stance animations for different attack patterns.",
    stats: {
      "Weapon Types": "All Weapon Categories",
      "Stance Variety": "Multiple per Weapon",
      "Combat Enhancement": "Visual & Functional"
    }
  },
  {
    slug: "magic-casting",
    name: "Magic Casting",
    image: "/images/animations/magic-casting.png",
    tags: ["Magic", "Elements", "Skills"],
    description: "Elemental magic and skill activation animations. Features different casting styles for various magical abilities and elemental infusions.",
    stats: {
      "Element Types": "Fire, Water, Wind, Earth, Lightning, Darkness",
      "Cast Styles": "Element-Specific Animations",
      "Visual Effects": "Particle Systems"
    }
  },
  {
    slug: "weapon-arts",
    name: "Weapon Arts",
    image: "/images/animations/weapon-arts.png",
    tags: ["Special Attacks", "Weapons", "Arts"],
    description: "Special weapon art animations for ultimate attacks. Includes signature moves like Black Flame Slash, Ultra Spear, and Chaos Eater Summon.",
    stats: {
      "Art Types": "Weapon-Specific Ultimate Moves",
      "Animation Length": "3-5 Seconds",
      "Damage Multiplier": "Varies by Art"
    }
  },
  {
    slug: "transformation",
    name: "Transformation Sequences",
    image: "/images/animations/transformation.png",
    tags: ["Transformation", "Forms", "Evolution"],
    description: "Dramatic transformation animations for race evolution and form changes. Features particle effects and visual enhancements.",
    stats: {
      "Race Support": "All Available Races",
      "Form Types": "Multiple Evolution Stages",
      "Duration": "2-4 Seconds"
    }
  },
  {
    slug: "movement-abilities",
    name: "Movement Abilities",
    image: "/images/animations/movement-abilities.png",
    tags: ["Movement", "Teleport", "Speed"],
    description: "Advanced movement animations including teleportation, dashing, and high-speed movement abilities with visual trails and effects.",
    stats: {
      "Movement Types": "Teleport, Dash, Speed Boost",
      "Visual Effects": "Trail Particles",
      "Cooldown": "Ability-Dependent"
    }
  }
];