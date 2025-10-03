import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function InfusionEffects() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16">
        <h1 className="text-5xl font-bold mb-8 text-yellow-600">Infusion Effects</h1>
        <div className="space-y-6 text-lg max-w-3xl">
          <div>
            <span className="font-bold text-red-500">Fire Infusion</span><br />
            <span className="font-bold">Armor:</span> -10% Fire/Earth DMG, +20% Water DMG taken<br />
            <span className="font-bold">Weapon:</span> +20% Fire DMG<br />
            <span className="font-bold">Set Bonus:</span> Lava movement speed
          </div>
          <div>
            <span className="font-bold text-orange-500">Flame Infusion</span><br />
            <span className="font-bold">Armor:</span> -20% Fire/Earth DMG, +20% Water DMG taken<br />
            <span className="font-bold">Weapon:</span> +40% Fire DMG<br />
            <span className="font-bold">Set Bonus:</span> Lava speed + auto-smelt mining
          </div>
          <div>
            <span className="font-bold text-blue-500">Water Infusion</span><br />
            <span className="font-bold">Armor:</span> -20% Water/Fire DMG, +20% Wind DMG taken<br />
            <span className="font-bold">Weapon:</span> +40% Water DMG<br />
            <span className="font-bold">Set Bonus:</span> Water movement + faster underwater mining
          </div>
          <div>
            <span className="font-bold text-green-600">Earth Infusion</span><br />
            <span className="font-bold">Armor:</span> -10% Earth/Space DMG, +20% Fire DMG taken, +25% knockback resist<br />
            <span className="font-bold">Weapon:</span> +20% Earth DMG
          </div>
          <div>
            <span className="font-bold text-green-700">Land Infusion</span><br />
            <span className="font-bold">Armor:</span> -20% Earth/Space DMG, +20% Fire DMG taken, +50% knockback resist (100% with 2 pieces)<br />
            <span className="font-bold">Weapon:</span> +40% Earth DMG
          </div>
          <div>
            <span className="font-bold text-gray-700">Darkness Infusion</span><br />
            <span className="font-bold">Armor:</span> -20% Darkness DMG taken<br />
            <span className="font-bold">Weapon:</span> +20% Darkness DMG<br />
            <span className="font-bold">Set Bonus:</span> -20% damage taken while in the dark
          </div>
          <div>
            <span className="font-bold text-yellow-400">Light Infusion</span><br />
            <span className="font-bold">Armor:</span> -20% Light DMG taken<br />
            <span className="font-bold">Weapon:</span> +20% Light DMG<br />
            <span className="font-bold">Set Bonus:</span> -20% damage taken while in light
          </div>
          <div>
            <span className="font-bold text-green-400">Wind Infusion</span><br />
            <span className="font-bold">Armor:</span> -20% Wind/Water DMG, +20% Space DMG taken<br />
            <span className="font-bold">Weapon:</span> +40% Wind DMG, +20% attack speed<br />
            <span className="font-bold">Set Bonus:</span> +20% movement speed while flying
          </div>
          <div>
            <span className="font-bold text-purple-500">Space Infusion</span><br />
            <span className="font-bold">Armor:</span> -20% Space/Wind DMG, +20% Earth DMG taken<br />
            <span className="font-bold">Weapon:</span> +40% Space DMG<br />
            <span className="font-bold">Set Bonus:</span> Immune to Severance, attacks inflict Severance
          </div>
          <div>
            <span className="font-bold text-pink-700">Battle Infusion</span><br />
            <span className="font-bold">Armor:</span> -10% incoming elemental damage<br />
            <span className="font-bold">Weapon:</span> +20% battlewill damage, +10% base weapon damage<br />
            <span className="font-bold">Set Bonus:</span> All damage taken converted to Physical for resistance calculation<br />
            <span className="font-bold">Special:</span> Cannot use magic aura on weapon, but increases Ogre Sword Guillotine damage by 4x instead of 2x
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
