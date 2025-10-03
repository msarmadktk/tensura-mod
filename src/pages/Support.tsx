import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const Support = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="container-main py-16">
      <h1 className="text-4xl font-bold mb-4 text-center text-yellow-600">Support</h1>
      <div className="flex flex-col gap-8 mt-8">
        {/* Patreon Card */}
        <a
          href="https://www.patreon.com/TRBeyond?utm_campaign=creatorshare_creator"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border w-full max-w-3xl mx-auto transition hover:shadow-lg hover:bg-orange-50"
        >
          <div className="flex-1">
            <div className="text-2xl font-bold text-sky-400 mb-1 cursor-pointer">Patreon</div>
            <div className="text-base text-black mb-2">
              Support the project, get access to exclusive sneak peaks and more!
               <br/> <p className="text-primary">Click to visit our Patreon page.</p> 
            </div>
          </div>
          {/* Patreon Logo */}
          <div className="flex flex-col items-center">
            <img
              src="/patreon.png"
              alt="Patreon Logo"
              className="w-20 h-auto object-contain" 
            />
          </div>
        </a>

        {/* More Options Card */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border w-full max-w-3xl mx-auto">
          <div className="flex-1">
            <div className="text-2xl font-bold text-sky-400 mb-1">More Options</div>
            <div className="text-base text-black">Coming Soon</div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Support;
