import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Building2,
  Users,
  DollarSign,
  Wrench,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Properties",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Building2,
    color: "emerald",
  },
  {
    title: "Active Tenants",
    value: "28",
    change: "+4",
    trend: "up",
    icon: Users,
    color: "blue",
  },
  {
    title: "Monthly Revenue",
    value: "£24,500",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    color: "purple",
  },
  {
    title: "Open Requests",
    value: "5",
    change: "-2",
    trend: "down",
    icon: Wrench,
    color: "orange",
  },
];

const recentPayments = [
  { tenant: "Sarah Johnson", property: "123 Oak Street, Apt 4B", amount: 1200, status: "paid", date: "Dec 1, 2025" },
  { tenant: "Mike Chen", property: "456 Pine Ave, Unit 2", amount: 950, status: "paid", date: "Dec 1, 2025" },
  { tenant: "Emily Davis", property: "789 Maple Dr", amount: 1450, status: "pending", date: "Due Dec 5" },
  { tenant: "James Wilson", property: "321 Cedar Lane", amount: 1100, status: "overdue", date: "Nov 28, 2025" },
];

const maintenanceRequests = [
  { id: 1, issue: "Leaky faucet", property: "123 Oak Street, Apt 4B", priority: "low", status: "in_progress" },
  { id: 2, issue: "Broken heater", property: "456 Pine Ave, Unit 2", priority: "high", status: "pending" },
  { id: 3, issue: "Door lock replacement", property: "789 Maple Dr", priority: "medium", status: "pending" },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1">Welcome back! Here's your property overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">{stat.title}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <div className="flex items-center gap-1">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-emerald-400" />
                      )}
                      <span className="text-sm text-emerald-400">{stat.change}</span>
                      <span className="text-sm text-slate-500">vs last month</span>
                    </div>
                  </div>
                  <div className={`h-14 w-14 rounded-2xl bg-${stat.color}-500/10 flex items-center justify-center`}>
                    <stat.icon className={`h-7 w-7 text-${stat.color}-400`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Payments */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-emerald-400" />
                Recent Payments
              </CardTitle>
              <a href="/payments" className="text-sm text-emerald-400 hover:text-emerald-300">View all</a>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentPayments.map((payment, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-white">{payment.tenant}</p>
                      <p className="text-sm text-slate-400">{payment.property}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white">£{payment.amount}</p>
                      <div className="flex items-center gap-1 justify-end">
                        {payment.status === "paid" && (
                          <>
                            <CheckCircle className="h-3 w-3 text-emerald-400" />
                            <span className="text-xs text-emerald-400">Paid</span>
                          </>
                        )}
                        {payment.status === "pending" && (
                          <>
                            <AlertCircle className="h-3 w-3 text-yellow-400" />
                            <span className="text-xs text-yellow-400">Pending</span>
                          </>
                        )}
                        {payment.status === "overdue" && (
                          <>
                            <AlertCircle className="h-3 w-3 text-red-400" />
                            <span className="text-xs text-red-400">Overdue</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Requests */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Wrench className="h-5 w-5 text-emerald-400" />
                Maintenance Requests
              </CardTitle>
              <a href="/maintenance" className="text-sm text-emerald-400 hover:text-emerald-300">View all</a>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {maintenanceRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-white">{request.issue}</p>
                      <p className="text-sm text-slate-400">{request.property}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          request.priority === "high"
                            ? "bg-red-500/10 text-red-400"
                            : request.priority === "medium"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-slate-500/10 text-slate-400"
                        }`}
                      >
                        {request.priority}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          request.status === "in_progress"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-slate-500/10 text-slate-400"
                        }`}
                      >
                        {request.status === "in_progress" ? "In Progress" : "Pending"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Occupancy Rate */}
        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Occupancy Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Overall Occupancy Rate</span>
                <span className="text-3xl font-bold text-emerald-400">92%</span>
              </div>
              <Progress value={92} className="h-3 bg-slate-800" />
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center p-6 rounded-xl bg-slate-800/30">
                  <p className="text-3xl font-bold text-white">11</p>
                  <p className="text-sm text-slate-400 mt-1">Occupied Units</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-slate-800/30">
                  <p className="text-3xl font-bold text-white">1</p>
                  <p className="text-sm text-slate-400 mt-1">Vacant Units</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-slate-800/30">
                  <p className="text-3xl font-bold text-yellow-400">2</p>
                  <p className="text-sm text-slate-400 mt-1">Expiring Soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
