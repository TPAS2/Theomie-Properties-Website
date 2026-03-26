import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Plus, Search, Calendar, Building2, Download, Eye, RefreshCw, AlertCircle, CheckCircle, Clock } from "lucide-react";

interface Lease {
  id: number;
  tenant: string;
  property: string;
  unit: string;
  startDate: string;
  endDate: string;
  rent: number;
  deposit: number;
  status: "active" | "expiring" | "expired" | "pending";
  daysRemaining: number;
  progress: number;
}

const leases: Lease[] = [
  {
    id: 1,
    tenant: "Sarah Johnson",
    property: "Oak Street Apartments",
    unit: "4B",
    startDate: "2024-06-01",
    endDate: "2025-05-31",
    rent: 1200,
    deposit: 1200,
    status: "active",
    daysRemaining: 180,
    progress: 50,
  },
  {
    id: 2,
    tenant: "Mike Chen",
    property: "Pine Avenue Duplex",
    unit: "Unit 2",
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    rent: 950,
    deposit: 950,
    status: "expiring",
    daysRemaining: 88,
    progress: 76,
  },
  {
    id: 3,
    tenant: "Emily Davis",
    property: "Maple Drive House",
    unit: "Main",
    startDate: "2024-09-01",
    endDate: "2025-08-31",
    rent: 1450,
    deposit: 2900,
    status: "active",
    daysRemaining: 272,
    progress: 25,
  },
  {
    id: 4,
    tenant: "James Wilson",
    property: "Cedar Lane Townhouse",
    unit: "Main",
    startDate: "2024-01-15",
    endDate: "2025-01-14",
    rent: 1100,
    deposit: 1100,
    status: "expiring",
    daysRemaining: 43,
    progress: 88,
  },
  {
    id: 5,
    tenant: "Lisa Martinez",
    property: "Elm Court Complex",
    unit: "3A",
    startDate: "2024-07-01",
    endDate: "2025-06-30",
    rent: 1350,
    deposit: 1350,
    status: "active",
    daysRemaining: 210,
    progress: 42,
  },
  {
    id: 6,
    tenant: "Robert Brown",
    property: "Oak Street Apartments",
    unit: "2C",
    startDate: "2024-04-01",
    endDate: "2025-03-31",
    rent: 1200,
    deposit: 1200,
    status: "active",
    daysRemaining: 119,
    progress: 67,
  },
  {
    id: 7,
    tenant: "New Tenant",
    property: "Birch Boulevard Villa",
    unit: "Main",
    startDate: "2025-01-01",
    endDate: "2026-01-01",
    rent: 2200,
    deposit: 4400,
    status: "pending",
    daysRemaining: 395,
    progress: 0,
  },
];

const statusConfig = {
  active: { color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", icon: CheckCircle },
  expiring: { color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", icon: AlertCircle },
  expired: { color: "bg-red-500/10 text-red-400 border-red-500/20", icon: AlertCircle },
  pending: { color: "bg-blue-500/10 text-blue-400 border-blue-500/20", icon: Clock },
};

export default function Leases() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const filteredLeases = leases.filter((lease) => {
    const matchesSearch =
      lease.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lease.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || lease.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const activeLeases = leases.filter((l) => l.status === "active").length;
  const expiringLeases = leases.filter((l) => l.status === "expiring").length;
  const totalMonthlyRent = leases.filter((l) => l.status === "active" || l.status === "expiring").reduce((sum, l) => sum + l.rent, 0);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Leases</h1>
            <p className="text-slate-400 mt-1">Manage lease agreements and renewals</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Lease
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-lg">
              <DialogHeader>
                <DialogTitle>Create New Lease</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Tenant Name</Label>
                  <Input placeholder="Full name" className="bg-slate-800 border-slate-700" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Property</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-700">
                        <SelectValue placeholder="Select property" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="oak">Oak Street Apartments</SelectItem>
                        <SelectItem value="pine">Pine Avenue Duplex</SelectItem>
                        <SelectItem value="maple">Maple Drive House</SelectItem>
                        <SelectItem value="birch">Birch Boulevard Villa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Unit</Label>
                    <Input placeholder="Unit number" className="bg-slate-800 border-slate-700" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Start Date</Label>
                    <Input type="date" className="bg-slate-800 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">End Date</Label>
                    <Input type="date" className="bg-slate-800 border-slate-700" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Monthly Rent (£)</Label>
                    <Input type="number" placeholder="1200" className="bg-slate-800 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Security Deposit (£)</Label>
                    <Input type="number" placeholder="1200" className="bg-slate-800 border-slate-700" />
                  </div>
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Create Lease</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Active Leases</p>
                  <p className="text-3xl font-bold text-white mt-1">{activeLeases}</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <FileText className="h-7 w-7 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-yellow-300/80">Expiring Soon</p>
                  <p className="text-3xl font-bold text-white mt-1">{expiringLeases}</p>
                  <p className="text-sm text-yellow-400 mt-1">Within 90 days</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                  <AlertCircle className="h-7 w-7 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Total Monthly Rent</p>
                  <p className="text-3xl font-bold text-white mt-1">£{totalMonthlyRent.toLocaleString()}</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Calendar className="h-7 w-7 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Avg Lease Duration</p>
                  <p className="text-3xl font-bold text-white mt-1">12</p>
                  <p className="text-sm text-slate-500 mt-1">months</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                  <RefreshCw className="h-7 w-7 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search leases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-900 border-slate-800 text-white"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-40 bg-slate-900 border-slate-800 text-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-800">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="expiring">Expiring</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Leases List */}
        <div className="space-y-4">
          {filteredLeases.map((lease) => {
            const StatusIcon = statusConfig[lease.status].icon;
            return (
              <Card
                key={lease.id}
                className={`bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ${
                  lease.status === "expiring" ? "border-l-4 border-l-yellow-500" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center">
                        <FileText className="h-7 w-7 text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-white">{lease.tenant}</h3>
                          <Badge className={statusConfig[lease.status].color}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {lease.status.charAt(0).toUpperCase() + lease.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {lease.property} • Unit {lease.unit}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-sm text-slate-400">Lease Period</p>
                        <p className="text-white font-medium">
                          {new Date(lease.startDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" })} -{" "}
                          {new Date(lease.endDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-slate-400">Monthly Rent</p>
                        <p className="text-white font-bold text-lg">£{lease.rent.toLocaleString()}</p>
                      </div>

                      <div className="w-32">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-400">Progress</span>
                          <span className="text-xs text-slate-400">{lease.progress}%</span>
                        </div>
                        <Progress value={lease.progress} className="h-2 bg-slate-800" />
                        <p className="text-xs text-slate-500 mt-1">{lease.daysRemaining} days left</p>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-slate-700 text-slate-300">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-700 text-slate-300">
                          <Download className="h-4 w-4" />
                        </Button>
                        {lease.status === "expiring" && (
                          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                            <RefreshCw className="h-4 w-4 mr-1" />
                            Renew
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredLeases.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No leases found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
