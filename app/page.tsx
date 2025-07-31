export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-800 p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to ChangePal</h1>
        <p className="text-lg mb-8">
          Your friendly helper for updating your address everywhere. Simple, secure, and done in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow">
            Start Your Change
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-2xl shadow">
            See How It Works
          </button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <img
          src="/logo-smiley.png"
          alt="ChangePal logo"
          className="w-28 h-28 rounded-full shadow-md mx-auto"
        />
        <p className="mt-4 text-sm text-gray-500">
          Built with heart in Canada 🇨🇦
        </p>
      </div>
    </main>
  );
}

