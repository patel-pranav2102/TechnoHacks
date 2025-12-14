import { useNavigate } from "react-router-dom";
import Login from "../Login";

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 py-12 px-4">
      <div className="max-w-md mx-auto space-y-6">
        <h2 className="text-3xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-tight">Sign In</h2>
        <Login onLogin={onLogin} />
        <p className="text-center text-gray-700">Don't have an account? <button onClick={() => navigate("/register")} className="text-teal-600 font-semibold hover:underline">Create Account</button></p>
      </div>
    </div>
  );
}
