
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Download, BarChart3 } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, RadialBarChart, RadialBar, PieChart, Pie, Cell } from "recharts";

const riskTrendData = [
  { month: 'Jan', score: 745, industry: 720 },
  { month: 'Feb', score: 752, industry: 725 },
  { month: 'Mar', score: 768, industry: 730 },
  { month: 'Apr', score: 775, industry: 735 },
  { month: 'May', score: 782, industry: 740 },
  { month: 'Jun', score: 795, industry: 745 },
];

const categoryScores = [
  { category: 'Website Security', score: 85, maxScore: 100 },
  { category: 'Email Security', score: 92, maxScore: 100 },
  { category: 'Network Security', score: 78, maxScore: 100 },
  { category: 'Endpoint Security', score: 88, maxScore: 100 },
  { category: 'Application Security', score: 73, maxScore: 100 },
];

const competitorData = [
  { name: 'Your Organization', score: 795, color: '#14b8a6' },
  { name: 'Competitor A', score: 742, color: '#64748b' },
  { name: 'Competitor B', score: 768, color: '#64748b' },
  { name: 'Industry Average', score: 745, color: '#64748b' },
];

const riskDistribution = [
  { name: 'Low Risk', value: 45, color: '#16a34a' },
  { name: 'Medium Risk', value: 35, color: '#ca8a04' },
  { name: 'High Risk', value: 15, color: '#ea580c' },
  { name: 'Critical Risk', value: 5, color: '#dc2626' },
];

const ExecutiveSummary = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
            Executive Summary
          </h1>
          <p className="text-muted-foreground text-lg">Comprehensive security posture overview</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Overall Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">795</div>
            <p className="text-xs text-muted-foreground flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +13 points this month
            </p>
            <Badge variant="secondary" className="mt-2">Grade A</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Industry Ranking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">Top 15%</div>
            <p className="text-xs text-muted-foreground flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +2% improvement
            </p>
            <Badge variant="default" className="mt-2">Above Average</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Vulnerabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">23</div>
            <p className="text-xs text-muted-foreground flex items-center mt-2">
              <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
              -8 from last month
            </p>
            <Badge variant="destructive" className="mt-2">5 Critical</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Remediation Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">78%</div>
            <p className="text-xs text-muted-foreground flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +12% this quarter
            </p>
            <Badge variant="secondary" className="mt-2">On Track</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Risk Trend Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-athena-teal-500 to-athena-blue-600 rounded-full" />
              Risk Score Trend (6 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={riskTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="score" stroke="#14b8a6" strokeWidth={3} dot={{ fill: '#14b8a6', strokeWidth: 2, r: 6 }} />
                  <Line type="monotone" dataKey="industry" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#64748b', strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
              Security Category Scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryScores} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                  <YAxis type="category" dataKey="category" stroke="hsl(var(--muted-foreground))" width={120} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="score" fill="#14b8a6" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Competitor Comparison */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              Competitive Benchmark
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={competitorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="score" fill="#14b8a6" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Risk Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-blue-600 rounded-full" />
              Risk Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ChartContainer config={{}} className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={40}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {riskDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {riskDistribution.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
