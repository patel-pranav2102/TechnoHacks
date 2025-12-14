import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { me } from "./api";

export default function App(){
  const [user, setUser] = useState(null);
  useEffect(()=>{ (async ()=>{ const r = await me(); if(r.user) setUser(r.user); })(); }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={!user ? <RegisterPage onRegister={u=>setUser(u)} /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={!user ? <LoginPage onLogin={u=>setUser(u)} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <DashboardPage user={user} onLogout={()=>setUser(null)} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}
