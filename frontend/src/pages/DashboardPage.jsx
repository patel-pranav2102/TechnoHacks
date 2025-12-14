import { logout } from "../api";

export default function DashboardPage({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="p-8 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 rounded-2xl shadow-xl border-2 border-orange-300 text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">Welcome, {user.username}!</h2>
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white font-bold rounded-xl hover:from-red-700 hover:via-pink-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-2xl" onClick={async () => { await logout(); onLogout(); }}>Logout</button>
        </div>
      </div>
    </div>
  );
}
