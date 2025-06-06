
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Shield, AlertTriangle, Search, ExternalLink } from "lucide-react";

const assets = [
  { id: 1, domain: 'api.company.com', type: 'Subdomain', ssl: 'Valid', ports: ['80', '443'], lastScan: '2024-01-15', issues: 0 },
  { id: 2, domain: 'mail.company.com', type: 'Subdomain', ssl: 'Expired', ports: ['25', '587', '993'], lastScan: '2024-01-14', issues: 3 },
  { id: 3, domain: '192.168.1.100', type: 'IP Address', ssl: 'N/A', ports: ['22', '80', '443'], lastScan: '2024-01-13', issues: 1 },
  { id: 4, domain: 'dev.company.com', type: 'Subdomain', ssl: 'Valid', ports: ['80', '443', '8080'], lastScan: '2024-01-12', issues: 2 },
];

const AttackSurface = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attack Surface</h1>
          <p className="text-muted-foreground mt-1">Monitor your external digital assets and exposure</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
          <Search className="h-4 w-4 mr-2" />
          Scan Assets
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Domains</CardTitle>
            <Globe className="h-4 w-4 text-athena-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+3 discovered today</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subdomains</CardTitle>
            <Globe className="h-4 w-4 text-athena-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Across all domains</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SSL Issues</CardTitle>
            <Shield className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Ports</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">High-risk exposures</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search assets by domain, IP, or subdomain..." 
              className="pl-10 bg-background/50 border-border/50"
            />
          </div>
        </CardContent>
      </Card>

      {/* Assets List */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Digital Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assets.map((asset) => (
              <div key={asset.id} className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      asset.type === 'Subdomain' ? 'bg-athena-blue-500/20 text-athena-blue-500' : 'bg-athena-teal-500/20 text-athena-teal-500'
                    }`}>
                      <Globe className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-foreground flex items-center gap-2">
                      {asset.domain}
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </p>
                    <p className="text-sm text-muted-foreground">{asset.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <Badge variant={asset.ssl === 'Valid' ? 'secondary' : asset.ssl === 'Expired' ? 'destructive' : 'outline'}>
                      SSL: {asset.ssl}
                    </Badge>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-foreground">Ports: {asset.ports.join(', ')}</p>
                    <p className="text-xs text-muted-foreground">Open ports</p>
                  </div>
                  
                  <div className="text-center">
                    <Badge variant={asset.issues === 0 ? 'secondary' : asset.issues > 2 ? 'destructive' : 'default'}>
                      {asset.issues} Issues
                    </Badge>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Last Scan</p>
                    <p className="text-sm text-foreground">{asset.lastScan}</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="border-border/50">
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

export default AttackSurface;
