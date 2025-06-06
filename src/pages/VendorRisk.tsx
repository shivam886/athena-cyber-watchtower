
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Eye, Plus } from "lucide-react";

const vendors = [
  { id: 1, name: 'TechCorp Solutions', domain: 'techcorp.com', score: 78, risk: 'Medium', industry: 'Technology', lastAssessed: '2024-01-15' },
  { id: 2, name: 'DataFlow Inc', domain: 'dataflow.com', score: 45, risk: 'High', industry: 'Data Analytics', lastAssessed: '2024-01-14' },
  { id: 3, name: 'CloudServices Ltd', domain: 'cloudservices.co.uk', score: 92, risk: 'Low', industry: 'Cloud Computing', lastAssessed: '2024-01-13' },
  { id: 4, name: 'SecureVault Co', domain: 'securevault.io', score: 25, risk: 'Critical', industry: 'Security', lastAssessed: '2024-01-12' },
  { id: 5, name: 'WebDesign Pro', domain: 'webdesignpro.net', score: 85, risk: 'Low', industry: 'Design', lastAssessed: '2024-01-11' },
];

const VendorRisk = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vendor Risk Management</h1>
          <p className="text-muted-foreground mt-1">Monitor and assess third-party security risks</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Vendor
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search vendors by name or domain..." 
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48 bg-background/50 border-border/50">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk Levels</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48 bg-background/50 border-border/50">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-border/50">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Vendor List */}
      <div className="grid gap-4">
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="glass-card hover:bg-card/70 transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg ${
                      vendor.risk === 'Critical' ? 'bg-red-500' :
                      vendor.risk === 'High' ? 'bg-orange-500' :
                      vendor.risk === 'Medium' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}>
                      {vendor.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{vendor.name}</h3>
                    <p className="text-sm text-muted-foreground">{vendor.domain}</p>
                    <p className="text-xs text-muted-foreground mt-1">{vendor.industry}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${
                      vendor.score >= 80 ? 'text-green-500' :
                      vendor.score >= 60 ? 'text-yellow-500' :
                      vendor.score >= 40 ? 'text-orange-500' :
                      'text-red-500'
                    }`}>
                      {vendor.score}
                    </div>
                    <p className="text-xs text-muted-foreground">Risk Score</p>
                  </div>
                  
                  <Badge variant={
                    vendor.risk === 'Critical' ? 'destructive' :
                    vendor.risk === 'High' ? 'destructive' :
                    vendor.risk === 'Medium' ? 'default' :
                    'secondary'
                  }>
                    {vendor.risk}
                  </Badge>
                  
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Last Assessed</p>
                    <p className="text-sm text-foreground">{vendor.lastAssessed}</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="border-border/50">
                    <Eye className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VendorRisk;
