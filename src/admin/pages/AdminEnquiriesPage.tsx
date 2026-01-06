import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getDemoEnquiries, type DemoEnquiry, type DemoEnquiryStatus } from '@/demo/demoStore';

const statusOptions: (DemoEnquiryStatus | 'all')[] = ['all', 'New', 'Contacted', 'Quoted', 'Won', 'Lost'];

function fmt(d: string) {
  const date = new Date(d);
  return date.toLocaleString();
}

export default function AdminEnquiriesPage() {
  const [status, setStatus] = useState<(typeof statusOptions)[number]>('all');
  const [rows, setRows] = useState<DemoEnquiry[]>([]);

  useEffect(() => {
    setRows(getDemoEnquiries());
  }, []);

  const filtered = useMemo(() => {
    return rows.filter((r) => (status === 'all' ? true : r.status === status));
  }, [rows, status]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="font-display font-bold text-3xl">Enquiries</h1>
          <p className="text-muted-foreground">Inbox + pipeline tracking.</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={status} onValueChange={(v) => setStatus(v as any)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {s === 'all' ? 'All statuses' : s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => setRows(getDemoEnquiries())}>Refresh</Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Inbox</CardTitle>
          <Badge variant="secondary">{filtered.length} shown</Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="text-muted-foreground">{fmt(r.created_at)}</TableCell>
                  <TableCell>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.email}</div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{r.enquiryType}</TableCell>
                  <TableCell>
                    <Badge variant={r.status === 'New' ? 'default' : 'secondary'}>{r.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/admin/enquiries/${r.id}`}>Open</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-10">
                    No enquiries found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
