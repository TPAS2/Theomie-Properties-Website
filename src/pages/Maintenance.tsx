import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Wrench, Plus, Search, Clock, CheckCircle, AlertTriangle, User, Building2, Calendar, MessageSquare } from "lucide-react";

interface MaintenanceRequest {
  id: number;
  title: string;
  description: string;
  property: string;
  unit: string;
  tenant: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "pending" | "in_progress" | "completed";
  createdAt: string;
  assignedTo?: string;
  category: string;
}

const maintenanceRequests: MaintenanceRequest[] = [
  {
    id: 1,
    title: "Leaky faucet in bathroom",
    description: "The bathroom sink faucet has been dripping constantly for the past week.",
    property: "Oak Street Apartments",
    unit: "4B",
    tenant: "Sarah Johnson",
    priority: "low",
    status: "in_progress",
    createdAt: "2025-11-28",
    assignedTo: "Mike's Plumbing",
    category: "Plumbing",
  },
  {
    id: 2,
    title: "Broken heater - No heat",
    description: "Heater stopped working completely. Temperature in apartment is very cold.",
    property: "Pine Avenue Duplex",
    unit: "Unit 2",
    tenant: "Mike Chen",
    priority: "urgent",
    status: "pending",
    createdAt: "2025-12-01",
    category: "HVAC",
  },
  {
    id: 3,
    title: "Door lock replacement needed",
    description: "Front door lock is sticking and difficult to open. Security concern.",
    property: "Maple Drive House",
    unit: "Main",
    tenant: "Emily Davis",
    priority: "high",
    status: "pending",
    createdAt: "2025-11-30",
    category: "Security",
  },
  {
    id: 4,
    title: "Garbage disposal not working",
    description: "Kitchen garbage disposal makes humming noise but doesn't work.",
    property: "Cedar Lane Townhouse",
    unit: "Main",
    tenant: "James Wilson",
    priority: "medium",
    status: "in_progress",
    createdAt: "2025-11-25",
    assignedTo: "ABC Appliance Repair",
    category: "Appliance",
  },
  {
    id: 5,
    title: "Water stain on ceiling",
    description: "Brown water stain appeared on bedroom ceiling. Possible leak from above.",
    property: "Elm Court Complex",
    unit: "3A",
    tenant: "Lisa Martinez",
    priority: "high",
    status: "pending",
    createdAt: "2025-12-01",
    category: "Plumbing",
  },
  {
    id: 6,
    title: "Light fixture replacement",
    description: "Dining room light fixture stopped working. Changed bulbs but still not working.",
    property: "Oak Street Apartments",
    unit: "2C",
    tenant: "Robert Brown",
    priority: "low",
    status: "completed",
    createdAt: "2025-11-20",
    assignedTo: "Joe's Electric",
    category: "Electrical",
  },
];

const priorityColors = {
  low: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  high: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  urgent: "bg-red-500/10 text-red-400 border-red-500/20",
};

const statusColors = {
  pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  in_progress: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function Maintenance() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const filteredRequests = maintenanceRequests.filter((request) => {
    const matchesSearch =
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.tenant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || request.status === filterStatus;
    const matchesPriority = filterPriority === "all" || request.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const pendingCount = maintenanceRequests.filter((r) => r.status === "pending").length;
  const inProgressCount = maintenanceRequests.filter((r) => r.status === "in_progress").length;
  const completedCount = maintenanceRequests.filter((r) => r.status === "completed").length;
  const urgentCount = maintenanceRequests.filter((r) => r.priority === "urgent" && r.status !== "completed").length;

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Maintenance</h1>
            <p className="text-slate-400 mt-1">Track and manage maintenance requests</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-lg">
              <DialogHeader>
                <DialogTitle>Create Maintenance Request</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Title</Label>
                  <Input placeholder="Brief description of the issue" className="bg-slate-800 border-slate-700" />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">Description</Label>
                  <Textarea placeholder="Detailed description..." className="bg-slate-800 border-slate-700 min-h-24" />
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
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Priority</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-700">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Create Request</Button>
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
                  <p className="text-sm text-slate-400">Pending</p>
                  <p className="text-3xl font-bold text-white mt-1">{pendingCount}</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">In Progress</p>
                  <p className="text-3xl font-bold text-white mt-1">{inProgressCount}</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Wrench className="h-7 w-7 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Completed</p>
                  <p className="text-3xl font-bold text-white mt-1">{completedCount}</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-500/20 to-red-600/10 border-red-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-300/80">Urgent</p>
                  <p className="text-3xl font-bold text-white mt-1">{urgentCount}</p>
                  <p className="text-sm text-red-400 mt-1">Needs attention</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="h-7 w-7 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-64 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search requests..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterPriority} onValueChange={setFilterPriority}>
            <SelectTrigger className="w-40 bg-slate-900 border-slate-800 text-white">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-800">
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <Card
              key={request.id}
              className={`bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ${
                request.priority === "urgent" && request.status !== "completed" ? "border-l-4 border-l-red-500" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{request.title}</h3>
                        <p className="text-sm text-slate-400 mt-1">{request.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={priorityColors[request.priority]}>
                          {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                        </Badge>
                        <Badge className={statusColors[request.status]}>
                          {request.status === "in_progress" ? "In Progress" : request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-4 w-4" />
                        <span>
                          {request.property} • Unit {request.unit}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        <span>{request.tenant}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(request.createdAt).toLocaleDateString()}</span>
                      </div>
                      <Badge variant="outline" className="border-slate-700 text-slate-400">
                        {request.category}
                      </Badge>
                    </div>

                    {request.assignedTo && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-slate-500">Assigned to:</span>
                        <span className="text-emerald-400">{request.assignedTo}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    {request.status === "pending" && (
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                        Assign
                      </Button>
                    )}
                    {request.status === "in_progress" && (
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                        Complete
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="border-slate-700 text-slate-300">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Notes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <Wrench className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No maintenance requests found.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
