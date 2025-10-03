
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";


export default function Shop() {
  const coinPacks = [
    { img: "s1.png", price: "$1.99", coins: "15 Coins" },
    { img: "s2.png", price: "$4.99", coins: "75 Coins" },
    { img: "s3.png", price: "$9.99", coins: "150 Coins" },
    { img: "s4.png", price: "$19.99", coins: "375 Coins" },
    { img: "s5.png", price: "$29.99", coins: "600 Coins" },
    { img: "s6.png", price: "$49.99", coins: "975 Coins" },
    { img: "s7.png", price: "$99.99", coins: "2,025 Coins" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-10">
          <div className="container-main">
            <h1 className="text-5xl font-bold text-yellow-600 text-center mb-10">Shop</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-12 gap-x-8 max-w-2xl mx-auto">
              {coinPacks.map((pack, i) => (
                <div
                  key={pack.img}
                  className="bg-white rounded-2xl shadow flex flex-col items-center p-6 border hover:shadow-lg transition"
                >
                  <div className="w-28 h-28 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={`/shop/${pack.img}`}
                      alt={pack.coins}
                      className="w-full h-full object-contain"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                  <div className="text-sky-400 font-bold text-xl mb-1">{pack.price}</div>
                  <div className="text-black font-medium text-lg">{pack.coins}</div>
                  <div className="text-muted-foreground text-sm">Coming Soon</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
              