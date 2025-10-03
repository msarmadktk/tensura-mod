import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const Community = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="container-main py-16">
      <h1 className="text-4xl font-bold mb-4 text-center text-yellow-600">
        Community
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">

        {/* Discord Card */}
        <a
          href="https://discord.gg/E8ZRbA8X3J"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-md bg-white rounded-xl shadow p-6 flex items-center gap-4 border transition hover:shadow-lg hover:bg-blue-50"
        >
          <div>
            <h2 className="text-2xl font-bold text-sky-400 mb-1">Join Discord</h2>
            <p className="text-base text-black mb-2">
              This is our hub for everything Trbeyond. If you have questions or
              suggestions, this is the place to ask.
            </p>
          </div>
          <img
            src="/discord.png"
            alt="Discord"
            className="w-28 h-28 object-contain ml-auto"
          />
        </a>

        {/* YouTube Card */}
        <a
          href="https://youtube.com/@tr-beyond?si=7qbHZEbgmeWJGnsT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-md bg-white rounded-xl shadow p-6 flex items-center gap-4 border transition hover:shadow-lg hover:bg-red-50"
        >
          <div>
            <h2 className="text-2xl font-bold text-sky-400 mb-1">YouTube</h2>
            <p className="text-base text-black mb-2">
              Including trailers, sneak peeks, guides, and more. Feel free to
              subscribe.
            </p>
          </div>
          <img
            src="/youtube.png"
            alt="YouTube"
            className="w-28 h-28 object-contain ml-auto"
          />
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Community;
