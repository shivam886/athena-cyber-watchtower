
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Globe, TrendingUp, TrendingDown, Eye, Activity } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from "recharts";

// Enhanced sample data with more sophisticated structure
const riskTrendData = [
  { month: 'Jan', high: 12, medium: 25, low: 8, total: 45 },
  { month: 'Feb', high: 15, medium: 23, low: 12, total: 50 },
  { month: 'Mar', high: 18, medium: 28, low: 10, total: 56 },
  { month: 'Apr', high: 14, medium: 32, low: 15, total: 61 },
  { month: 'May', high: 11, medium: 29, low: 18, total: 58 },
  { month: 'Jun', high: 9, medium: 31, low: 22, total: 62 },
];

const vendorRiskData = [
  { name: 'Critical', value: 8, color: '#dc2626', percentage: 4 },
  { name: 'High', value: 23, color: '#ea580c', percentage: 11.5 },
  { name: 'Medium', value: 45, color: '#ca8a04', percentage: 22.5 },
  { name: 'Low', value: 124, color: '#16a34a', percentage: 62 },
];

const chartConfig = {
  high: {
    label: "High Risk",
    color: "hsl(var(--destructive))",
  },
  medium: {
    label: "Medium Risk", 
    color: "hsl(var(--primary))",
  },
  low: {
    label: "Low Risk",
    color: "hsl(var(--muted))",
  },
  total: {
    label: "Total Risks",
    color: "hsl(var(--primary))",
  }
};

const recentAlerts = [
  { id: 1, vendor: 'TechCorp Solutions', risk: 'High', issue: 'SSL Certificate Expired', time: '2 hours ago', status: 'active' },
  { id: 2, vendor: 'DataFlow Inc', risk: 'Critical', issue: 'Data Exposure Detected', time: '4 hours ago', status: 'active' },
  { id: 3, vendor: 'CloudServices Ltd', risk: 'Medium', issue: 'Outdated Software Version', time: '6 hours ago', status: 'investigating' },
  { id: 4, vendor: 'SecureVault Co', risk: 'Low', issue: 'Minor Configuration Issue', time: '1 day ago', status: 'resolved' },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Enhanced Header with Gradient */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
            Security Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">Monitor your organization's digital risk landscape</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Activity className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Enhanced Key Metrics with Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-athena-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Vendors</CardTitle>
            <div className="p-2 rounded-lg bg-athena-teal-500/20">
              <Shield className="h-5 w-5 text-athena-teal-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">247</div>
            <p className="text-xs text-muted-foreground flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Risks</CardTitle>
            <div className="p-2 rounded-lg bg-orange-500/20">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">89</div>
            <p className="text-xs text-muted-foreground flex items-center mt-2">
              <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
              -8% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-athena-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Digital Assets</CardTitle>
            <div className="p-2 rounded-lg bg-athena-blue-500/20">
              <Globe className="h-5 w-5 text-athena-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,429</div>
            <p className="text-xs text-muted-foreground flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Alerts</CardTitle>
            <div className="p-2 rounded-lg bg-red-500/20">
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">23</div>
            <p className="text-xs text-muted-foreground flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-red-500" />
              +3 new today
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Charts with Better Design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card group hover:shadow-2xl transition-all duration-500">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-athena-teal-500 to-athena-blue-600 rounded-full" />
              Risk Trends Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={riskTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="highGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="hsl(var(--primary))"
                    fillOpacity={1}
                    fill="url(#totalGradient)"
                    strokeWidth={3}
                  />
                  <Line type="monotone" dataKey="high" stroke="#dc2626" strokeWidth={2} dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass-card group hover:shadow-2xl transition-all duration-500">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
              Vendor Risk Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ChartContainer config={chartConfig} className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <defs>
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.3)" />
                      </filter>
                    </defs>
                    <Pie
                      data={vendorRiskData}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      innerRadius={60}
                      paddingAngle={4}
                      dataKey="value"
                      filter="url(#shadow)"
                    >
                      {vendorRiskData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          stroke={entry.color}
                          strokeWidth={2}
                          className="hover:opacity-80 transition-opacity duration-200"
                        />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
                              <p className="font-semibold text-foreground">{data.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {data.value} vendors ({data.percentage}%)
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            {/* Enhanced Legend */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {vendorRiskData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-200">
                  <div 
                    className="w-3 h-3 rounded-full shadow-sm" 
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1">
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    <div className="text-xs text-muted-foreground">{item.value} ({item.percentage}%)</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Recent Alerts */}
      <Card className="glass-card hover:shadow-2xl transition-all duration-500">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-orange-600 rounded-full" />
            Recent Security Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <div 
                key={alert.id} 
                className="flex items-center justify-between p-4 rounded-xl bg-background/30 border border-border/50 hover:bg-background/50 hover:border-border transition-all duration-200 hover:scale-[1.02] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-lg ${
                      alert.risk === 'Critical' ? 'bg-red-500/20' :
                      alert.risk === 'High' ? 'bg-orange-500/20' :
                      alert.risk === 'Medium' ? 'bg-yellow-500/20' :
                      'bg-green-500/20'
                    }`}>
                      <AlertTriangle className={`h-5 w-5 ${
                        alert.risk === 'Critical' ? 'text-red-500' :
                        alert.risk === 'High' ? 'text-orange-500' :
                        alert.risk === 'Medium' ? 'text-yellow-500' :
                        'text-green-500'
                      }`} />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {alert.vendor}
                    </p>
                    <p className="text-sm text-muted-foreground">{alert.issue}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant={
                      alert.risk === 'Critical' || alert.risk === 'High' ? 'destructive' :
                      alert.risk === 'Medium' ? 'default' : 'secondary'
                    }
                    className="shadow-sm"
                  >
                    {alert.risk}
                  </Badge>
                  <span className="text-sm text-muted-foreground min-w-[80px] text-right">{alert.time}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  >
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
