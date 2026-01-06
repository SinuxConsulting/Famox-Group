import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { demoAdminLogin } from '@/demo/demoStore';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // small delay for UX
    await new Promise((r) => setTimeout(r, 300));

    const ok = demoAdminLogin(password);
    setSubmitting(false);

    if (!ok) {
      toast({
        title: 'Login failed',
        description: 'Incorrect password.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Welcome back',
      description: 'You are now logged into the admin.',
    });

    const next = location?.state?.from && typeof location.state.from === 'string'
      ? location.state.from
      : '/admin';

    navigate(next, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md border border-border rounded-2xl p-8 bg-card shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display font-bold text-xl">Admin Login</div>
            <div className="text-sm text-muted-foreground">Password protected</div>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={submitting}>
            <LogIn className="h-4 w-4" />
            {submitting ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
      </div>
    </div>
  );
}
