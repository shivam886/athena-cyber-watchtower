
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Globe, TrendingUp, TrendingDown, Eye } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Sample data
const riskTrendData = [
  { month: 'Jan', high: 12, medium: 25, low: 8 },
  { month: 'Feb', high: 15, medium: 23, low: 12 },
  { month: 'Mar', high: 18, medium: 28, low: 10 },
  { month: 'Apr', high: 14, medium: 32, low: 15 },
  { month: 'May', high: 11, medium: 29, low: 18 },
  { month: 'Jun', high: 9, medium: 31, low: 22 },
];

const vendorRiskData = [
  { name: 'Critical', value: 8, color: '#ef4444' },
  { name: 'High', value: 23, color: '#f97316' },
  { name: 'Medium', value: 45, color: '#eab308' },
  { name: 'Low', value: 124, color: '#22c55e' },
];

const recentAlerts = [
  { id: 1, vendor: 'TechCorp Solutions', risk: 'High', issue: 'SSL Certificate Expired', time: '2 hours ago', status: 'active' },
  { id: 2, vendor: 'DataFlow Inc', risk: 'Critical', issue: 'Data Exposure Detected', time: '4 hours ago', status: 'active' },
  { id: 3, vendor: 'CloudServices Ltd', risk: 'Medium', issue: 'Outdated Software Version', time: '6 hours ago', status: 'investigating' },
  { id: 4, vendor: 'SecureVault Co', risk: 'Low', issue: 'Minor Configuration Issue', time: '1 day ago', status: 'resolved' },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Security Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor your organization's digital risk landscape</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
          Generate Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
            <Shield className="h-4 w-4 text-athena-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Risks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
              -8% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Digital Assets</CardTitle>
            <Globe className="h-4 w-4 text-athena-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,429</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-red-500" />
              +3 new today
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Risk Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={riskTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="high" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="medium" stroke="#f97316" strokeWidth={2} />
                <Line type="monotone" dataKey="low" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Vendor Risk Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={vendorRiskData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {vendorRiskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recent Security Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className={`h-5 w-5 ${
                      alert.risk === 'Critical' ? 'text-red-500' :
                      alert.risk === 'High' ? 'text-orange-500' :
                      alert.risk === 'Medium' ? 'text-yellow-500' :
                      'text-green-500'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{alert.vendor}</p>
                    <p className="text-sm text-muted-foreground">{alert.issue}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={
                    alert.risk === 'Critical' ? 'destructive' :
                    alert.risk === 'High' ? 'destructive' :
                    alert.risk === 'Medium' ? 'default' :
                    'secondary'
                  }>
                    {alert.risk}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{alert.time}</span>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
