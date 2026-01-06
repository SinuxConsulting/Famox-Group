import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { data, type SiteSettings } from '@/data';

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const s = await data.settings.get();
      if (!mounted) return;
      setSettings(s);
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const save = async () => {
    if (!settings) return;
    setSaving(true);
    const next = await data.settings.update(settings);
    setSettings(next);
    setSaving(false);
  };

  if (loading) return <div className="text-muted-foreground">Loading…</div>;
  if (!settings) return <div className="text-muted-foreground">No settings found.</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-bold text-3xl">Settings</h1>
        <p className="text-muted-foreground">Update public contact info used across the website.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Company details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Company name</Label>
              <Input value={settings.companyName} onChange={(e) => setSettings({ ...settings, companyName: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={settings.email} onChange={(e) => setSettings({ ...settings, email: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>WhatsApp (digits only, incl country code)</Label>
              <Input value={settings.whatsapp} onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Primary phone</Label>
              <Input value={settings.phonePrimary} onChange={(e) => setSettings({ ...settings, phonePrimary: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Google review URL</Label>
              <Input value={settings.googleReviewUrl || ''} onChange={(e) => setSettings({ ...settings, googleReviewUrl: e.target.value })} placeholder="https://..." />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Address lines (comma separated)</Label>
            <Input
              value={settings.addressLines.join(', ')}
              onChange={(e) => setSettings({ ...settings, addressLines: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save'}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
