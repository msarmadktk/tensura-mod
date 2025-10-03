export interface NPC {
  slug: string;
  name: string;
  image: string;
  gallery?: string[];
  tags?: string[];
  description: string;
  role: string;
  services: string[];
  stats?: Record<string, string | number>;
  meta?: Record<string, any>;
}

export const npcs: NPC[] = [
  {
    slug: "kurobee",
    name: "Kurobee",
    image: "/images/npcs/kurobee.png",
    tags: ["Weaponsmith", "Armorer", "Premium Gear"],
    description: "Your go-to weaponsmith and armorer! Kurobee offers premium gear for gold and stellar coins, plus features a daily specialty weapon that rotates based on the day of the week.",
    role: "Weaponsmith & Armorer",
    services: ["Premium Weapons", "Premium Armor", "Daily Specials", "Tsukuyomi Effect Items"],
    stats: {
      "Currency Accepted": "Gold & Stellar Coins",
      "Daily Rotation": "Yes",
      "Auto-Enhancement": "Tsukuyomi Effect"
    }
  },
  {
    slug: "dryad",
    name: "Dryad",
    image: "/images/npcs/dryad.png",
    tags: ["Survival Gear", "Essential Items", "Nature Spirit"],
    description: "This nature spirit specializes in essential dungeon survival gear. Stock up on recording crystals, revival bracelets, and return whistles for your adventures.",
    role: "Survival Gear Specialist",
    services: ["Recording Crystals", "Revival Bracelets", "Return Whistles", "New Player Starter Kit"],
    stats: {
      "Specialty": "Survival Equipment",
      "New Player Bonus": "Free Starter Items",
      "AFK Protection": "Eliminates Idle Players"
    }
  },
  {
    slug: "guild-lady",
    name: "Guild Lady",
    image: "/images/npcs/guild-lady.png",
    tags: ["Crystal Buyer", "Mysterious", "High Tier"],
    description: "The mysterious Guild Lady has a keen eye for valuable magic crystals and will pay top coin for high-tier specimens. Bring her your finest crystal discoveries!",
    role: "Crystal Buyer",
    services: ["Crystal Purchasing", "High-Tier Appraisals", "Future Services (Coming Soon)"],
    stats: {
      "Specialty": "Magic Crystals",
      "Payment": "Top Coin",
      "Status": "Mysterious"
    }
  },
  {
    slug: "mjollmile",
    name: "Mjöllmile",
    image: "/images/npcs/mjollmile.png",
    tags: ["Currency Exchange", "Master Trader", "Conversion"],
    description: "The master of currency exchange! Mjöllmile makes coin conversion simple — whether you're upgrading from bronze to silver, silver to gold, or gold to stellar coins.",
    role: "Currency Exchange Master",
    services: ["Bronze to Silver", "Silver to Gold", "Gold to Stellar", "Currency Conversion"],
    stats: {
      "Exchange Rate": "100:1 Ratio",
      "Conversion Types": "All Coin Tiers",
      "Service Speed": "Instant"
    }
  },
  {
    slug: "yoshida",
    name: "Yoshida",
    image: "/images/npcs/yoshida.png",
    tags: ["Restaurant", "Floor 95", "Buffs & Effects"],
    description: "Welcome to floor 95's finest dining establishment! Yoshida serves up an incredible variety of foods and drinks, each packed with powerful buffs and special effects.",
    role: "Floor 95 Restaurant Owner",
    services: ["Food & Drinks", "Powerful Buffs", "Special Effects", "Fine Dining"],
    stats: {
      "Location": "Floor 95",
      "Establishment": "Restaurant",
      "Warning": "Pace Yourself with Drinks"
    }
  },
  {
    slug: "kaijin",
    name: "Kaijin",
    image: "/images/npcs/kaijin.png",
    tags: ["Schematics", "Blueprints", "Crafting"],
    description: "The ultimate schematic dealer! Kaijin has every blueprint you could ever need, all available for just 1 gold each. Whether you're looking to craft weapons, armor, or special items.",
    role: "Schematic Dealer",
    services: ["Weapon Blueprints", "Armor Schematics", "Special Item Plans", "Complete Crafting Guides"],
    stats: {
      "Price": "1 Gold Each",
      "Inventory": "Complete Collection",
      "Availability": "All Blueprints"
    }
  },
  {
    slug: "koby",
    name: "Koby",
    image: "/images/npcs/koby.png",
    tags: ["Salvage", "Buyback", "Potions"],
    description: "Your dungeon salvage specialist! Koby will buy back any weapons and armor you've found in the depths, with prices varying based on item rarity.",
    role: "Salvage Specialist",
    services: ["Weapon Buyback", "Armor Salvage", "Essential Potions", "Rarity Appraisals"],
    stats: {
      "Pricing": "Based on Rarity",
      "Accepted Items": "All Dungeon Gear",
      "Additional Stock": "Essential Potions"
    }
  }
];