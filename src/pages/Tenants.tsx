import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Search, Phone, Mail, Building2, Calendar, MoreVertical, CheckCircle, AlertCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Tenant {
  id: number;
  name: string;
  email: string;
  phone: string;
  property: string;
  unit: string;
  leaseEnd: string;
  rent: number;
  status: "active" | "expiring" | "ended";
  balance: number;
  avatar: string;
}

const tenants: Tenant[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+44 7700 900001",
    property: "Oak Street Apartments",
    unit: "4B",
    leaseEnd: "2025-05-31",
    rent: 1200,
    status: "active",
    balance: 0,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike.chen@email.com",
    phone: "+44 7700 900002",
    property: "Pine Avenue Duplex",
    unit: "Unit 2",
    leaseEnd: "2025-02-28",
    rent: 950,
    status: "expiring",
    balance: 0,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.d@email.com",
    phone: "+44 7700 900003",
    property: "Maple Drive House",
    unit: "Main",
    leaseEnd: "2025-08-31",
    rent: 1450,
    status: "active",
    balance: 1450,
    avatar: "ED",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "james.w@email.com",
    phone: "+44 7700 900004",
    property: "Cedar Lane Townhouse",
    unit: "Main",
    leaseEnd: "2025-01-14",
    rent: 1100,
    status: "expiring",
    balance: 1100,
    avatar: "JW",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    email: "lisa.m@email.com",
    phone: "+44 7700 900005",
    property: "Elm Court Complex",
    unit: "3A",
    leaseEnd: "2025-06-30",
    rent: 1350,
    status: "active",
    balance: 0,
    avatar: "LM",
  },
  {
    id: 6,
    name: "Robert Brown",
    email: "robert.b@email.com",
    phone: "+44 7700 900006",
    property: "Oak Street Apartments",
    unit: "2C",
    leaseEnd: "2025-03-31",
    rent: 1200,
    status: "active",
    balance: 0,
    avatar: "RB",
  },
];

export default function Tenants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || tenant.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const activeTenants = tenants.filter((t) => t.status === "active").length;
  const expiringLeases = tenants.filter((t) => t.status === "expiring").length;
  const totalBalance = tenants.reduce((sum, t) => sum + t.balance, 0);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Tenants</h1>
            <p className="text-slate-400 mt-1">Manage your tenant information</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Tenant
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Tenant</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Full Name</Label>
                  <Input placeholder="John Doe" className="bg-slate-800 border-slate-700" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Email</Label>
                    <Input type="email" placeholder="john@email.com" className="bg-slate-800 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Phone</Label>
                    <Input placeholder="+44 7700 900000" className="bg-slate-800 border-slate-700" />
                  </div>
                </div>
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
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Unit</Label>
                    <Input placeholder="4B" className="bg-slate-800 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Monthly Rent (£)</Label>
                    <Input type="number" placeholder="1200" className="bg-slate-800 border-slate-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">Lease End Date</Label>
                  <Input type="date" className="bg-slate-800 border-slate-700" />
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Add Tenant</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Active Tenants</p>
                  <p className="text-3xl font-bold text-white mt-1">{activeTenants}</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Expiring Leases</p>
                  <p className="text-3xl font-bold text-white mt-1">{expiringLeases}</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                  <Calendar className="h-7 w-7 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Outstanding Balance</p>
                  <p className="text-3xl font-bold text-white mt-1">£{totalBalance.toLocaleString()}</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="h-7 w-7 text-red-400" />
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
              placeholder="Search tenants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-900 border-slate-800 text-white"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48 bg-slate-900 border-slate-800 text-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-800">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="expiring">Expiring Soon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tenants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTenants.map((tenant) => (
            <Card key={tenant.id} className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">{tenant.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{tenant.name}</h3>
                      <Badge
                        className={`mt-1 ${
                          tenant.status === "active"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                        }`}
                      >
                        {tenant.status === "active" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {tenant.status === "expiring" && <AlertCircle className="h-3 w-3 mr-1" />}
                        {tenant.status === "active" ? "Active" : "Expiring"}
                      </Badge>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700">
                      <DropdownMenuItem className="text-white hover:bg-slate-700">View Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-slate-700">Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-slate-700">Send Message</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Mail className="h-4 w-4" />
                    <span>{tenant.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Phone className="h-4 w-4" />
                    <span>{tenant.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Building2 className="h-4 w-4" />
                    <span>{tenant.property} • Unit {tenant.unit}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Monthly Rent</p>
                    <p className="text-lg font-bold text-white">£{tenant.rent}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Balance</p>
                    <p className={`text-lg font-bold ${tenant.balance > 0 ? "text-red-400" : "text-emerald-400"}`}>
                      £{tenant.balance}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTenants.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No tenants found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
