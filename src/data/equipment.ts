export interface Equipment {
  slug: string;
  name: string;
  image: string;
  gallery?: string[];
  tags?: string[];
  description: string;
  grades: string[];
  infusion?: string;
  attackDamage?: string;
  attackSpeed?: string;
  critChance?: string;
  extra?: string[];
  stats?: Record<string, string | number>;
  meta?: Record<string, any>;
}

export const shopWeapons: Equipment[] = [
  {
    slug: "shinboko",
    name: "Shinboko",
    image: "/images/shop/shinboko.png",
    tags: ["Staff", "Wind Infusion", "Extendable"],
    description: "A mystical staff that can extend its reach with wind power. Hold right-click to extend the staff, trading damage for range.",
    grades: ["Unique", "Legend", "God"],
    infusion: "Wind",
    attackDamage: "35/50/75",
    attackSpeed: "1",
    extra: ["Sweeping Chance: +100", "Range: +2", "Extend Staff ability"],
    stats: {
      "Max Range": "+5",
      "Max Damage Debuff": "-50%",
      "Special Ability": "Extend Staff"
    }
  },
  {
    slug: "souei-ninjatos",
    name: "Souei's Ninjatos",
    image: "/images/shop/souei-ninjatos.png",
    tags: ["Dual Wield", "Darkness Infusion", "Critical"],
    description: "Twin blades of shadow that excel in dual-wielding combat. When paired, they unlock devastating critical strike potential.",
    grades: ["Unique", "Legend"],
    infusion: "Darkness",
    attackDamage: "39/55",
    attackSpeed: "1.5",
    critChance: "20%",
    extra: ["Dual Wielding: Attack Speed 2, Crit 40%", "Shadow Striker Enhancement"],
    stats: {
      "Critical Multiplier": "+0.5",
      "Instakill Damage": "×2 (1k SHP)",
      "Special": "Bypasses spiritual resistance"
    }
  },
  {
    slug: "hakuro-katana",
    name: "Hakuro's Katana — Thunder Heaven & Earth",
    image: "/images/shop/hakuro-katana.png",
    tags: ["Katana", "Lightning Infusion", "Teleport"],
    description: "A legendary katana infused with lightning power. Features unique dodge mechanics and devastating follow-up strikes.",
    grades: ["Unique", "Legend"],
    infusion: "Lightning",
    attackDamage: "39/85",
    attackSpeed: "1.6",
    critChance: "25%",
    extra: ["Dodge Lock Slash", "Follow-up Strike (5× damage)"],
    stats: {
      "Dodge Boost": "+50%",
      "Enemy Dodge": "0% for 3 seconds",
      "Special": "Teleport Strike"
    }
  },
  {
    slug: "guren",
    name: "Guren",
    image: "/images/shop/guren.png",
    tags: ["Flame Sword", "Black Flame", "AoE"],
    description: "A blade wreathed in black flames that can lock enemies in place and create devastating tornado attacks.",
    grades: ["Unique", "Legend", "God"],
    infusion: "Flame",
    attackDamage: "46/57/98",
    attackSpeed: "1.2",
    critChance: "25%",
    extra: ["Black Flame Slash (locks for 7s)", "Black Flame Tornado (AoE)"],
    stats: {
      "Flame Damage": "250",
      "Physical Damage": "250",
      "AoE Range": "7×7",
      "Special": "Armor Piercing"
    }
  },
  {
    slug: "meat-crusher",
    name: "Meat Crusher",
    image: "/images/shop/meat-crusher.png",
    tags: ["Earth Infusion", "Summon", "Corruption"],
    description: "A brutal weapon that summons chaos entities and inflicts spiritual corruption on enemies.",
    grades: ["Unique", "Legend", "God"],
    infusion: "Earth",
    attackDamage: "46/57/98",
    attackSpeed: "0.9",
    critChance: "25%",
    extra: ["Chaos Eater Summon (4 entities)", "Rot Effect", "Insanity Gain"],
    stats: {
      "Summon Damage": "50 Physical + 50 Spiritual",
      "Rot": "DoT Effect",
      "Insanity Rate": "+1 per 200 damage"
    }
  }
];

export const shopArmor: Equipment[] = [
  {
    slug: "gelds-armor",
    name: "Geld's Armor",
    image: "/images/shop/gelds-armor.png",
    tags: ["Earth Infusion", "Heavy Armor", "High Defense"],
    description: "Masterfully crafted armor set providing exceptional protection and earth-based enhancement.",
    grades: ["Unique", "Legend", "God"],
    infusion: "Earth (God only)",
    extra: ["1,000,000 magicules capacity", "Complete set bonus"],
    stats: {
      "Helmet": "9/10/12 Armor",
      "Chestplate": "13/15/17 Armor",
      "Leggings": "11/13/15 Armor",
      "Boots": "9/10/12 Armor",
      "Toughness": "7/8/10",
      "KB Resistance": "6/8/10"
    }
  },
  {
    slug: "souei-armor",
    name: "Souei's Armor",
    image: "/images/shop/souei-armor.png",
    tags: ["Darkness Infusion", "Ninja Gear", "Stealth"],
    description: "Traditional ninja attire enhanced with darkness infusion for stealth and agility.",
    grades: ["Unique", "Legend", "God"],
    infusion: "Darkness (God)",
    extra: ["1,000,000 magicules capacity", "Ninja aesthetics"],
    stats: {
      "Haori": "9/11/14 Armor",
      "Hakama": "7/9/12 Armor",
      "Sandals": "Cosmetic",
      "Toughness": "4/6/8",
      "KB Resistance": "3/6/8"
    }
  },
  {
    slug: "diablo-clothes",
    name: "Diablo's Clothes",
    image: "/images/shop/diablo-clothes.png",
    tags: ["Darkness Infusion", "Formal Wear", "Demon Lord"],
    description: "Elegant formal attire befitting a demon lord, infused with dark power.",
    grades: ["Legend", "God"],
    infusion: "Darkness (God)",
    extra: ["1,000,000 magicules capacity", "Formal aesthetics"],
    stats: {
      "Suit": "12/15 Armor",
      "Pants": "10/13 Armor",
      "Boots": "Cosmetic",
      "Toughness": "6/8",
      "KB Resistance": "6/8"
    }
  }
];

export const bossDrops: Equipment[] = [
  {
    slug: "spider-dagger",
    name: "Spider Dagger",
    image: "/images/drops/spider-dagger.png",
    tags: ["Dagger", "Venom", "Fatal Poison"],
    description: "A venom-coated blade that builds Fatal Poison with repeated strikes. Higher grades increase maximum poison level.",
    grades: ["Special", "Rare", "Unique", "Legend"],
    attackDamage: "13/24/36/58",
    attackSpeed: "2",
    critChance: "20%",
    extra: ["Venom coating", "Fatal Poison buildup", "Duration refresh"],
    stats: {
      "Critical Multiplier": "+0.5",
      "Range": "-0.75",
      "Effect": "Fatal Poison (stacking)"
    }
  },
  {
    slug: "centipede-dagger",
    name: "Centipede Dagger",
    image: "/images/drops/centipede-dagger.png",
    tags: ["Dagger", "Paralysis", "Status Effect"],
    description: "A paralytic blade that inflicts paralysis on hit. Stacks after cooldown with temporary immunity at max paralysis.",
    grades: ["Special", "Rare", "Unique", "Legend"],
    attackDamage: "13/24/36/58",
    attackSpeed: "2",
    critChance: "20%",
    extra: ["Paralysis on hit", "Stacking effect", "Temporary immunity"],
    stats: {
      "Critical Multiplier": "+0.5",
      "Range": "-0.75",
      "Effect": "Paralysis (stacking)"
    }
  },
  {
    slug: "serpent-armor",
    name: "Serpent Armor",
    image: "/images/drops/serpent-armor.png",
    tags: ["Water Infusion", "Corrosion Immunity", "Sturdy"],
    description: "Armor crafted from serpent scales, providing complete corrosion immunity and pre-engraved with Sturdy enhancement.",
    grades: ["Rare", "Unique", "Legend", "God"],
    infusion: "Water",
    extra: ["Corrosion Immunity", "Pre-engraved Sturdy", "Full set upgrades to Sturdy II"],
    stats: {
      "Helmet": "5/6/7/11 Armor",
      "Chestplate": "8/9/10/15 Armor",
      "Leggings": "7/8/9/13 Armor",
      "Boots": "4/5/6/10 Armor",
      "Special": "No additional engravings needed"
    }
  },
  {
    slug: "minos-trident",
    name: "Minos Trident",
    image: "/images/drops/minos-trident.png",
    tags: ["Trident", "Ultra Spear", "Holy Coat"],
    description: "The legendary trident of the Minos guardian, capable of devastating Ultra Spear attacks.",
    grades: ["Unique", "Legend", "God"],
    attackDamage: "32/43/75",
    attackSpeed: "1.4",
    critChance: "15%",
    extra: ["Ultra Spear (10-12 rapid strikes)", "Holy Coat", "2×2 block range"],
    stats: {
      "Ultra Spear": "Hold Right Click 4s",
      "Holy Coat": "2 equipped, 3 with full set",
      "Range": "2×2 blocks"
    }
  }
];