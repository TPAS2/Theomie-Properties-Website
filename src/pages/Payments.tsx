import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Plus, Search, Download, TrendingUp, CheckCircle, AlertCircle, Clock, ArrowUpRight, Calendar } from "lucide-react";

interface Payment {
  id: number;
  tenant: string;
  property: string;
  unit: string;
  amount: number;
  date: string;
  status: "paid" | "pending" | "overdue";
  method?: string;
}

const payments: Payment[] = [
  { id: 1, tenant: "Sarah Johnson", property: "Oak Street Apartments", unit: "4B", amount: 1200, date: "2025-12-01", status: "paid", method: "Bank Transfer" },
  { id: 2, tenant: "Mike Chen", property: "Pine Avenue Duplex", unit: "Unit 2", amount: 950, date: "2025-12-01", status: "paid", method: "Credit Card" },
  { id: 3, tenant: "Emily Davis", property: "Maple Drive House", unit: "Main", amount: 1450, date: "2025-12-05", status: "pending" },
  { id: 4, tenant: "James Wilson", property: "Cedar Lane Townhouse", unit: "Main", amount: 1100, date: "2025-11-28", status: "overdue" },
  { id: 5, tenant: "Lisa Martinez", property: "Elm Court Complex", unit: "3A", amount: 1350, date: "2025-12-01", status: "paid", method: "Direct Debit" },
  { id: 6, tenant: "Robert Brown", property: "Oak Street Apartments", unit: "2C", amount: 1200, date: "2025-12-01", status: "paid", method: "Bank Transfer" },
  { id: 7, tenant: "Anna Thompson", property: "Elm Court Complex", unit: "5D", amount: 1350, date: "2025-12-03", status: "pending" },
  { id: 8, tenant: "David Lee", property: "Oak Street Apartments", unit: "1A", amount: 1200, date: "2025-11-25", status: "overdue" },
];

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRecordDialogOpen, setIsRecordDialogOpen] = useState(false);

  const filteredPayments = (status?: string) =>
    payments.filter((payment) => {
      const matchesSearch =
        payment.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.property.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = !status || status === "all" || payment.status === status;
      return matchesSearch && matchesStatus;
    });

  const totalCollected = payments.filter((p) => p.status === "paid").reduce((sum, p) => sum + p.amount, 0);
  const totalPending = payments.filter((p) => p.status === "pending").reduce((sum, p) => sum + p.amount, 0);
  const totalOverdue = payments.filter((p) => p.status === "overdue").reduce((sum, p) => sum + p.amount, 0);

  const PaymentCard = ({ payment }: { payment: Payment }) => (
    <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                payment.status === "paid"
                  ? "bg-emerald-500/10"
                  : payment.status === "pending"
                  ? "bg-yellow-500/10"
                  : "bg-red-500/10"
              }`}
            >
              <DollarSign
                className={`h-6 w-6 ${
                  payment.status === "paid"
                    ? "text-emerald-400"
                    : payment.status === "pending"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              />
            </div>
            <div>
              <p className="font-semibold text-white">{payment.tenant}</p>
              <p className="text-sm text-slate-400">
                {payment.property} • Unit {payment.unit}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-lg font-bold text-white">£{payment.amount.toLocaleString()}</p>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <Calendar className="h-3 w-3" />
                {new Date(payment.date).toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" })}
              </div>
            </div>
            <Badge
              className={`${
                payment.status === "paid"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : payment.status === "pending"
                  ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                  : "bg-red-500/10 text-red-400 border-red-500/20"
              }`}
            >
              {payment.status === "paid" && <CheckCircle className="h-3 w-3 mr-1" />}
              {payment.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
              {payment.status === "overdue" && <AlertCircle className="h-3 w-3 mr-1" />}
              {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
            </Badge>
            {payment.status !== "paid" && (
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Record
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Payments</h1>
            <p className="text-slate-400 mt-1">Track rent payments and revenue</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Dialog open={isRecordDialogOpen} onOpenChange={setIsRecordDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Record Payment
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle>Record Payment</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Tenant</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-700">
                        <SelectValue placeholder="Select tenant" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="emily">Emily Davis - Maple Drive House</SelectItem>
                        <SelectItem value="james">James Wilson - Cedar Lane</SelectItem>
                        <SelectItem value="anna">Anna Thompson - Elm Court 5D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-slate-300">Amount (£)</Label>
                      <Input type="number" placeholder="1200" className="bg-slate-800 border-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Date</Label>
                      <Input type="date" className="bg-slate-800 border-slate-700" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Payment Method</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-700">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="card">Credit Card</SelectItem>
                        <SelectItem value="dd">Direct Debit</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Record Payment</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-300/80">Collected This Month</p>
                  <p className="text-3xl font-bold text-white mt-1">£{totalCollected.toLocaleString()}</p>
                  <div className="flex items-center gap-1 mt-2 text-emerald-400">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-sm">+12% vs last month</span>
                  </div>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Pending</p>
                  <p className="text-3xl font-bold text-white mt-1">£{totalPending.toLocaleString()}</p>
                  <p className="text-sm text-slate-500 mt-2">{payments.filter((p) => p.status === "pending").length} payments</p>
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
                  <p className="text-sm text-slate-400">Overdue</p>
                  <p className="text-3xl font-bold text-white mt-1">£{totalOverdue.toLocaleString()}</p>
                  <p className="text-sm text-red-400 mt-2">{payments.filter((p) => p.status === "overdue").length} payments late</p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="h-7 w-7 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Collection Rate</p>
                  <p className="text-3xl font-bold text-white mt-1">87%</p>
                  <div className="flex items-center gap-1 mt-2 text-emerald-400">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-sm">+5% vs last month</span>
                  </div>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="bg-slate-900 border border-slate-800">
              <TabsTrigger value="all" className="data-[state=active]:bg-slate-800">
                All
              </TabsTrigger>
              <TabsTrigger value="paid" className="data-[state=active]:bg-slate-800">
                Paid
              </TabsTrigger>
              <TabsTrigger value="pending" className="data-[state=active]:bg-slate-800">
                Pending
              </TabsTrigger>
              <TabsTrigger value="overdue" className="data-[state=active]:bg-slate-800">
                Overdue
              </TabsTrigger>
            </TabsList>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search payments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 bg-slate-900 border-slate-800 text-white"
              />
            </div>
          </div>

          <TabsContent value="all" className="space-y-4">
            {filteredPayments().map((payment) => (
              <PaymentCard key={payment.id} payment={payment} />
            ))}
          </TabsContent>
          <TabsContent value="paid" className="space-y-4">
            {filteredPayments("paid").map((payment) => (
              <PaymentCard key={payment.id} payment={payment} />
            ))}
          </TabsContent>
          <TabsContent value="pending" className="space-y-4">
            {filteredPayments("pending").map((payment) => (
              <PaymentCard key={payment.id} payment={payment} />
            ))}
          </TabsContent>
          <TabsContent value="overdue" className="space-y-4">
            {filteredPayments("overdue").map((payment) => (
              <PaymentCard key={payment.id} payment={payment} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
