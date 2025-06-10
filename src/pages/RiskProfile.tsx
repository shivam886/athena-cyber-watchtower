
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Filter, TrendingUp } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

const scoreHistoryData = [
  { date: '2024-01', score: 720 },
  { date: '2024-02', score: 735 },
  { date: '2024-03', score: 748 },
  { date: '2024-04', score: 765 },
  { date: '2024-05', score: 782 },
  { date: '2024-06', score: 795 },
];

const riskCategories = [
  { name: 'Network Security', score: 850, maxScore: 950, percentage: 89 },
  { name: 'Application Security', score: 720, maxScore: 950, percentage: 76 },
  { name: 'Data Protection', score: 810, maxScore: 950, percentage: 85 },
  { name: 'Endpoint Security', score: 765, maxScore: 950, percentage: 81 },
  { name: 'Identity & Access', score: 880, maxScore: 950, percentage: 93 },
];

const RiskProfile = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
            Risk Profile
          </h1>
          <p className="text-muted-foreground text-lg">Detailed security risk assessment and scoring</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter Categories
          </Button>
          <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Profile
          </Button>
        </div>
      </div>

      {/* Overall Score Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Overall Risk Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-6xl font-bold text-foreground">795</div>
              <div className="text-lg text-muted-foreground">out of 950</div>
              <Badge variant="secondary" className="mt-2 text-lg px-3 py-1">Grade A</Badge>
            </div>
            <div className="flex items-center">
              <ChartContainer config={{}} className="h-[200px] w-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={[{ score: 795, maxScore: 950 }]}>
                    <RadialBar
                      dataKey="score"
                      cornerRadius={10}
                      fill="#14b8a6"
                      background={{ fill: 'hsl(var(--muted))' }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span>+13 points improvement this month</span>
          </div>
        </CardContent>
      </Card>

      {/* Score History Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-2 h-6 bg-gradient-to-b from-athena-teal-500 to-athena-blue-600 rounded-full" />
            Risk Score History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreHistoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" domain={[700, 850]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#14b8a6" 
                  strokeWidth={4} 
                  dot={{ fill: '#14b8a6', strokeWidth: 2, r: 8 }}
                  activeDot={{ r: 10, fill: '#14b8a6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Risk Categories Breakdown */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
            Risk Categories Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {riskCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{category.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{category.score}/{category.maxScore}</span>
                    <Badge variant={category.percentage >= 85 ? "default" : category.percentage >= 70 ? "secondary" : "destructive"}>
                      {category.percentage}%
                    </Badge>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskProfile;
