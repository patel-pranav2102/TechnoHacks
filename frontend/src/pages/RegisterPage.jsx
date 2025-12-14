import { useNavigate } from "react-router-dom";
import Register from "../Register";

export default function RegisterPage({ onRegister }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 py-12 px-4">
      <div className="max-w-md mx-auto space-y-6">
        <h2 className="text-3xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 tracking-tight">Create Account</h2>
        <Register onRegister={onRegister} />
        <p className="text-center text-gray-700">Already have an account? <button onClick={() => navigate("/login")} className="text-purple-600 font-semibold hover:underline">Sign In</button></p>
      </div>
    </div>
  );
}
