
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Search, Download, Eye } from "lucide-react";

const leaks = [
  { id: 1, email: 'admin@company.com', source: 'LinkedIn Breach 2021', password: 'Hashed', exposed: '2021-06-20', severity: 'High' },
  { id: 2, email: 'support@company.com', source: 'Collection #1', password: 'Plaintext', exposed: '2019-01-17', severity: 'Critical' },
  { id: 3, email: 'user@company.com', source: 'Dropbox Breach 2012', password: 'Hashed', exposed: '2012-07-01', severity: 'Medium' },
  { id: 4, email: 'dev@company.com', source: 'Adobe Breach 2013', password: 'Encrypted', exposed: '2013-10-03', severity: 'High' },
];

const DataLeaks = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Data Leak Monitoring</h1>
          <p className="text-muted-foreground mt-1">Track credential exposures and data breaches</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Exposures</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">Across all sources</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Leaks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">8</div>
            <p className="text-xs text-muted-foreground">Require immediate action</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Emails</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Company addresses found</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Breaches</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">In the last 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by email or domain..." 
              className="pl-10 bg-background/50 border-border/50"
            />
          </div>
        </CardContent>
      </Card>

      {/* Leaked Credentials */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Exposed Credentials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaks.map((leak) => (
              <div key={leak.id} className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      leak.severity === 'Critical' ? 'bg-red-500/20 text-red-500' :
                      leak.severity === 'High' ? 'bg-orange-500/20 text-orange-500' :
                      'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{leak.email}</p>
                    <p className="text-sm text-muted-foreground">{leak.source}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <Badge variant={
                      leak.password === 'Plaintext' ? 'destructive' :
                      leak.password === 'Hashed' ? 'default' :
                      'secondary'
                    }>
                      {leak.password}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">Password</p>
                  </div>
                  
                  <Badge variant={
                    leak.severity === 'Critical' ? 'destructive' :
                    leak.severity === 'High' ? 'destructive' :
                    'default'
                  }>
                    {leak.severity}
                  </Badge>
                  
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Exposed</p>
                    <p className="text-sm text-foreground">{leak.exposed}</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="border-border/50">
                    <Eye className="h-4 w-4 mr-2" />
                    Details
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

export default DataLeaks;
