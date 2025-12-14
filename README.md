Auth Backend + Frontend (Option B)
==================================

Structure:
- backend/: Node + Express + Passport.js auth server
- frontend/: Vite + React minimal UI (Register/Login)

Quick start:
1. Backend
   cd backend
   npm install
   copy .env.example to .env and fill MONGO_URI & SESSION_SECRET
   npm run dev

2. Frontend
   cd frontend
   npm install
   npm run dev

Note: Frontend expects backend at http://localhost:5000 and will include cookies (credentials: include).
