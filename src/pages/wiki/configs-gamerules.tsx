import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";


export default function ConfigsGamerules() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-main py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">Configs/Gamerules</h1>
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Gamerules</h2>
          <div className="mb-4 text-base">
            <ul className="list-disc ml-6">
              <li><span className="font-bold">/gamerule colosseumGeneration true/false</span> – Toggles Colosseum generation</li>
              <li><span className="font-bold">/gamerule mobsSpawnWithDungeon true/false</span> – Controls automatic mob spawning with dungeon generation</li>
              <li><span className="font-bold">/gamerule uniqueMonsterChance [value]</span> – Sets chance for mobs to spawn as Unique Monsters</li>
              <li><span className="font-bold">/gamerule lootExplosionChance [value]</span> – Adjusts loot explosion chance for chests</li>
              <li><span className="font-bold">/gamerule dungeonfloorsize [number]</span> – Number of dungeon pieces per floor (Default: 100)</li>
              <li><span className="font-bold">/gamerule ambientmobspawnrate [value]</span> – Reduces ambient mob spawn rate in dungeon</li>
              <li><span className="font-bold">/gamerule uniqueMonsterOverworld true/false</span> – Toggles Unique Monster spawning in overworld</li>
              <li><span className="font-bold">/gamerule uniqueMonsterParticles true/false</span> – Toggles particle effects on Unique Monsters</li>
              <li><span className="font-bold">Nightmare Mode</span></li>
              <li><span className="font-bold">/gamerule nightmareMode true/false</span> – Enables hardcore difficulty where all bosses gain:</li>
            </ul>
            <ul className="list-disc ml-12">
              <li>All Resistances</li>
              <li>All Bosses are unique</li>
              <li>Resistance Shred</li>
              <li>Anti-Skill effects</li>
              <li>Disabled Flight (includes race-based flight)</li>
              <li>Spatial Movement Disabled</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Configs</h2>
          <div className="mb-4 text-base">
            Boss stats – All boss stats are configurable<br />
            <span className="font-bold">trapSpawnChance</span> – Sets the overall chance for traps to generate<br />
            <span className="font-bold">maxPlayersInDungeon</span> – Limit how many players can be in the dungeon at once<br />
            <span className="font-bold">dungeonReentryCooldown</span> – Cooldown before a player can re-enter the dungeon<br />
            <span className="font-bold">disableSkillsInDungeon</span> – List of skill IDs or categories to disable during dungeon runs<br />
            <span className="font-bold">npcShopConfigs</span> – Set which NPCs sell items in the dungeon shop/lobby<br />
            <span className="font-bold">coinReplacement</span> – Replace Bronze/Silver/Gold/Stellar Coins with custom items or values<br />
            <span className="font-bold">chestRefreshTimers</span> – Set timers for how often dungeon chests refresh<br />
            <span className="font-bold">specialMobSpawnChances</span> – Configure rare mob spawn chances (like Dungeon Dominators)<br />
            <span className="font-bold">disablechallenges</span> – Turns off dungeon challenges<br />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
