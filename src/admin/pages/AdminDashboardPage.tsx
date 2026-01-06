import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { demoCatalogueItems, demoMediaPosts, demoProjects } from '@/demo/demoData';
import { getDemoEnquiries } from '@/demo/demoStore';

export default function AdminDashboardPage() {
  const enquiries = useMemo(() => getDemoEnquiries(), []);

  const enquiriesToday = enquiries.filter((e) => {
    const d = new Date(e.created_at);
    const now = new Date();
    return d.toDateString() === now.toDateString();
  }).length;

  const newCount = enquiries.filter((e) => e.status === 'New').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-3xl">Dashboard</h1>
          <p className="text-muted-foreground">Admin overview (demo mode).</p>
        </div>
        <Badge variant="secondary">Demo</Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Enquiries today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{enquiriesToday}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{newCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Catalogue items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{demoCatalogueItems.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Published media</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{demoMediaPosts.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick context</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>Projects available for demo: <span className="text-foreground font-medium">{demoProjects.length}</span></p>
          <p>Tip: Use <span className="font-mono text-foreground">/admin/enquiries</span> to show enquiry workflow (status + notes).</p>
          <p>Everything here is stored locally in the browser for demo purposes. Swap to Supabase later.</p>
        </CardContent>
      </Card>
    </div>
  );
}
