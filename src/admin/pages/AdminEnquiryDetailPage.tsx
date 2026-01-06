import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { data } from '@/data';

const statuses = ['New', 'Contacted', 'Quoted', 'Won', 'Lost'] as const;

function fmt(d: string) {
  const date = new Date(d);
  return date.toLocaleString();
}

export default function AdminEnquiryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [enquiry, setEnquiry] = useState<any | null>(null);
  const [status, setStatus] = useState<(typeof statuses)[number]>('New');
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!id) return;
      const e = await data.enquiries.getById(id);
      if (!mounted) return;
      setEnquiry(e);
      setStatus((e?.status as any) || 'New');
      setNotes(e?.notes || '');
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  const badgeVariant = useMemo(() => {
    if (status === 'New') return 'default';
    if (status === 'Won') return 'secondary';
    return 'outline';
  }, [status]);

  const save = async () => {
    if (!id) return;
    setSaving(true);
    const updated = await data.enquiries.update(id, { status, notes });
    setEnquiry(updated);
    setSaving(false);
  };

  if (loading) {
    return <div className="text-muted-foreground">Loading…</div>;
  }

  if (!enquiry) {
    return (
      <div className="space-y-4">
        <div className="text-muted-foreground">Enquiry not found.</div>
        <Button variant="outline" onClick={() => navigate('/admin/enquiries')}>Back</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-muted-foreground">
            <Link to="/admin/enquiries" className="hover:underline">Enquiries</Link>
            <span className="mx-2">/</span>
            <span>{enquiry.id}</span>
          </div>
          <h1 className="font-display font-bold text-3xl">{enquiry.name}</h1>
          <div className="text-muted-foreground">Submitted: {fmt(enquiry.created_at)}</div>
        </div>
        <Badge variant={badgeVariant as any}>{status}</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-border p-4 bg-muted/30">
              <div className="text-sm text-muted-foreground mb-1">Enquiry Type</div>
              <div className="font-medium">{enquiry.enquiryType}</div>
              {enquiry.itemSlug && (
                <div className="text-sm text-muted-foreground mt-2">Item: {enquiry.itemSlug}</div>
              )}
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Message</div>
              <div className="whitespace-pre-wrap">{enquiry.message}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">{enquiry.email}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <div className="font-medium">{enquiry.phone || '-'}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Company</div>
              <div className="font-medium">{enquiry.company || '-'}</div>
            </div>

            <div className="pt-2 space-y-2">
              <Label>Status</Label>
              <Select value={status} onValueChange={(v) => setStatus(v as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Internal notes</Label>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add notes for your team…" rows={6} />
            </div>

            <div className="flex gap-2">
              <Button onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save'}</Button>
              <Button variant="outline" onClick={() => navigate('/admin/enquiries')}>Back</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
