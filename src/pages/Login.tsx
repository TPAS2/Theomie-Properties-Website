import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, AlertCircle } from "lucide-react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "TPAS217") {
      sessionStorage.setItem("authenticated", "true");
      navigate("/dashboard");
    } else if (password === "PocoLoco") {
      navigate("/kyriloco");
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md bg-slate-900/80 border-slate-700 backdrop-blur-lg relative z-10">
        <CardHeader className="text-center">
          <a href="/" className="flex justify-center mb-4">
            <img
              src="/logo.png"
              alt="Theomie Properties"
              className="h-20 w-auto"
              style={{ mixBlendMode: 'lighten' }}
            />
          </a>
          <CardTitle className="text-2xl font-bold text-white">Portal Login</CardTitle>
          <p className="text-slate-400 text-sm mt-2">Enter your password to access the dashboard</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>Incorrect password. Please try again.</span>
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
            >
              Login
            </Button>
          </form>
          <div className="mt-6 text-center">
            <a href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
              Back to Home
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
