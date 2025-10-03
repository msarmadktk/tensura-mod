import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bosses from "./pages/Bosses";
import NPCs from "./pages/NPCs";
import Guide from "./pages/Guide";
import Structures from "./pages/Structures";
import Animations from "./pages/Animations";
import Shop from "./pages/Shop";
import BossDrops from "./pages/BossDrops";
import NotFound from "./pages/NotFound";
import Wiki from "./pages/Wiki";
import News from "./pages/News";
import Server from "./pages/Server";
import Community from "./pages/Community";
import About from "./pages/About";
import Support from "./pages/Support";
import DungeonMap from "./pages/wiki/dungeon-map";
import EntryRequirements from "./pages/wiki/entry-requirements";
import EssentialItems from "./pages/wiki/essential-items";
import Kurobee from "./pages/wiki/kurobee";
import Dryad from "./pages/wiki/dryad";
import GuildLady from "./pages/wiki/guild-lady";
import Mjollmile from "./pages/wiki/mjollmile";
import KaoruYoshida from "./pages/wiki/kaoru-yoshida";
import Kaijin from "./pages/wiki/kaijin";
import Koby from "./pages/wiki/koby";
import CoreRules from "./pages/wiki/core-rules";
import SpecialMechanics from "./pages/wiki/special-mechanics";
import InfusionEffects from "./pages/wiki/infusion-effects";
import Floor10BlackSpiderBoss from "./pages/wiki/floor-10-black-spider-boss";
import Floor20EvilCentipedeBoss from "./pages/wiki/floor-20-evil-centipede-boss";
import Floor30OgreLord from "./pages/wiki/floor-30-ogre-lord";
import Floor40TempestSerpentBoss from "./pages/wiki/floor-40-tempest-serpent-boss";
import RegularMobs from "./pages/wiki/regular-mobs";
import TrapsHazards from "./pages/wiki/traps-hazards";
import BossDrop from "./pages/wiki/boss-drop";
import KurobeeGear from "./pages/wiki/kurobee-gear";
import ShrineChallenges from "./pages/wiki/shrine-challenges";
import ServerConfiguration from "./pages/wiki/server-configuration";
import Gozul from "./pages/wiki/floor-50-gozul";
import Mezul from "./pages/wiki/floor-50-mezul";
import SlimeMobs from "./pages/wiki/slime-mobs";
import DungeonDominators from "./pages/wiki/dungeon-dominators";
import ChestTraps from "./pages/wiki/chest-traps";
import EnvironmentalHazards from "./pages/wiki/environmental-hazards";
import SlimeHazards from "./pages/wiki/slime-hazards";
import SpiderDagger from "./pages/wiki/spider-dagger";
import CentipedeDagger from "./pages/wiki/centipede-dagger";
import OgreSet from "./pages/wiki/ogre-set";
import SerpentArmor from "./pages/wiki/serpent-armor";
import MinosSet from "./pages/wiki/minos-set";
import Shinkobo from "./pages/wiki/shinkobo";
import SoueiNinjatosSoueiArmor from "./pages/wiki/souei-ninjatos-souei-armor";
import HakuroKatanaHakuroArmor from "./pages/wiki/hakuro-katana-hakuro-armor";
import GurenBenimaruArmor from "./pages/wiki/guren-benimaru-armor";
import MeatCrusherGeldArmor from "./pages/wiki/meat-crusher-geld-armor";
import GorikimaruShionsArmor from "./pages/wiki/gorikimaru-shions-armor";
import VortexSpearGabirusArmor from "./pages/wiki/vortex-spear-gabirus-armor";
import Shrines from "./pages/wiki/shrines";
import ConfigsGamerules from "./pages/wiki/configs-gamerules";
import GeneralServerTips from "./pages/wiki/general-server-tips";
import DiablosArmor from "./pages/wiki/diablos-armor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bosses" element={<Bosses />} />
          <Route path="/npcs" element={<NPCs />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/structures" element={<Structures />} />
          <Route path="/boss-drops" element={<BossDrops />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/wiki/dungeon-map" element={<DungeonMap />} />
          <Route path="/wiki/entry-requirements" element={<EntryRequirements />} />
          <Route path="/wiki/essential-items" element={<EssentialItems />} />
          <Route path="/wiki/kurobee" element={<Kurobee />} />
          <Route path="/wiki/dryad" element={<Dryad />} />
          <Route path="/wiki/guild-lady" element={<GuildLady />} />
          <Route path="/wiki/mjollmile" element={<Mjollmile />} />
          <Route path="/wiki/kaoru-yoshida" element={<KaoruYoshida />} />
          <Route path="/wiki/kaijin" element={<Kaijin />} />
          <Route path="/wiki/koby" element={<Koby />} />
          <Route path="/wiki/core-rules" element={<CoreRules />} />
          <Route path="/wiki/special-mechanics" element={<SpecialMechanics />} />
          <Route path="/wiki/infusion-effects" element={<InfusionEffects />} />
          <Route path="/wiki/floor-10-black-spider-boss" element={<Floor10BlackSpiderBoss />} />
          <Route path="/wiki/floor-20-evil-centipede-boss" element={<Floor20EvilCentipedeBoss />} />
          <Route path="/wiki/floor-30-ogre-lord" element={<Floor30OgreLord />} />
          <Route path="/wiki/floor-40-tempest-serpent-boss" element={<Floor40TempestSerpentBoss />} />
          <Route path="/wiki/floor-50-mezul" element={<Mezul />} />
          <Route path="/wiki/floor-50-gozul" element={<Gozul />} />
          <Route path="/wiki/slime-mobs" element={<SlimeMobs />} />
          <Route path="/wiki/dungeon-dominators" element={<DungeonDominators />} />
          <Route path="/wiki/chest-traps" element={<ChestTraps />} />
          <Route path="/wiki/environmental-hazards" element={<EnvironmentalHazards />} />
          <Route path="/wiki/slime-hazards" element={<SlimeHazards />} />
          <Route path="/wiki/spider-dagger" element={<SpiderDagger />} />
          <Route path="/wiki/centipede-dagger" element={<CentipedeDagger />} />
          <Route path="/wiki/ogre-set" element={<OgreSet />} />
          <Route path="/wiki/serpent-armor" element={<SerpentArmor />} />
          <Route path="/wiki/minos-set" element={<MinosSet />} />
          <Route path="/wiki/shinkobo" element={<Shinkobo />} />
          <Route path="/wiki/souei-ninjatos-souei-armor" element={<SoueiNinjatosSoueiArmor />} />
          <Route path="/wiki/hakuro-katana-hakuro-armor" element={<HakuroKatanaHakuroArmor />} />
          <Route path="/wiki/guren-benimaru-armor" element={<GurenBenimaruArmor />} />
          <Route path="/wiki/meat-crusher-geld-armor" element={<MeatCrusherGeldArmor />} />
          <Route path="/wiki/gorikimaru-shions-armor" element={<GorikimaruShionsArmor />} />
          <Route path="/wiki/vortex-spear-gabirus-armor" element={<VortexSpearGabirusArmor />} />
          <Route path="/wiki/diablos-armor" element={<DiablosArmor />} />
          <Route path="/wiki/shrines" element={<Shrines />} />
          <Route path="/wiki/configs-gamerules" element={<ConfigsGamerules />} />
          <Route path="/wiki/general-server-tips" element={<GeneralServerTips />} />
          <Route path="/wiki/regular-mobs" element={<RegularMobs />} />
          <Route path="/wiki/traps-hazards" element={<TrapsHazards />} />
          <Route path="/wiki/boss-drop" element={<BossDrop />} />
          <Route path="/wiki/kurobee-gear" element={<KurobeeGear />} />
          <Route path="/wiki/shrine-challenges" element={<ShrineChallenges />} />
          <Route path="/wiki/server-configuration" element={<ServerConfiguration />} />
          <Route path="/news" element={<News />} />
          <Route path="/server" element={<Server />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
