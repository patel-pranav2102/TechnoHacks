import { useState } from "react";
import { login } from "./api";

export default function Login({ onLogin }){
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    if (res.user) { setMsg("Logged in"); if(onLogin) onLogin(res.user); } else setMsg(res.message || "Login failed");
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-5 p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl shadow-xl border-2 border-purple-300">
      <input className="px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200 placeholder:text-purple-400 bg-white" placeholder="Username" value={form.username} onChange={e=>setForm({...form,username:e.target.value})} />
      <input className="px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200 placeholder:text-purple-400 bg-white" type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
      <button className="px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-2xl">Login</button>
      {msg && <div className="text-sm text-center font-medium text-purple-700 bg-purple-50 py-2 px-4 rounded-lg border border-purple-200">{msg}</div>}
    </form>
  );
}
