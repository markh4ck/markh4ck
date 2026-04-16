import React, { useState } from "react";
import { loginAdmin } from "../services/AuthService";

function AdminLogin({ onLoginSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (loginAdmin(password)) {
      setPassword("");
      onLoginSuccess();
    } else {
      setError("Contraseña incorrecta");
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-[#131315] border border-white/10 rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Acceso Admin</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#8a8a93] text-sm mb-2 font-mono">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="Ingresa la contraseña"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a93] focus:outline-none focus:border-[#ff5e1a] transition-colors disabled:opacity-50"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm font-mono">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full py-3 bg-[#ff5e1a] hover:bg-[#e14d0f] disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono font-bold rounded-lg transition-colors"
          >
            {isLoading ? "Verificando..." : "Acceder"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
