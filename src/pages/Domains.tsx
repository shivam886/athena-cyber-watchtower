
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Globe, Activity, Calendar, Tag } from "lucide-react";

const domainsData = [
  {
    id: 1,
    domain: "example.com",
    score: 795,
    status: "Active",
    lastScanned: "2024-06-10",
    labels: ["Production", "Critical"],
    subdomains: 12,
  },
  {
    id: 2,
    domain: "api.example.com",
    score: 742,
    status: "Active",
    lastScanned: "2024-06-09",
    labels: ["API", "External"],
    subdomains: 5,
  },
  {
    id: 3,
    domain: "staging.example.com",
    score: 680,
    status: "Inactive",
    lastScanned: "2024-06-05",
    labels: ["Staging", "Internal"],
    subdomains: 3,
  },
  {
    id: 4,
    domain: "cdn.example.com",
    score: 820,
    status: "Active",
    lastScanned: "2024-06-10",
    labels: ["CDN", "Infrastructure"],
    subdomains: 8,
  },
];

const Domains = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("table"); // table or tree

  const filteredDomains = domainsData.filter(domain =>
    domain.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
    domain.labels.some(label => label.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getScoreColor = (score: number) => {
    if (score >= 800) return "text-green-500";
    if (score >= 700) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 800) return "default";
    if (score >= 700) return "secondary";
    return "destructive";
  };

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
            Domains
          </h1>
          <p className="text-muted-foreground text-lg">Monitor and manage your domain portfolio</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Domain
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Domains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{domainsData.length}</div>
            <div className="flex items-center gap-2 mt-2">
              <Activity className="h-4 w-4 text-green-500" />
              <span className="text-sm text-muted-foreground">
                {domainsData.filter(d => d.status === "Active").length} Active
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {Math.round(domainsData.reduce((sum, d) => sum + d.score, 0) / domainsData.length)}
            </div>
            <Badge variant="default" className="mt-2">Good Security</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Subdomains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {domainsData.reduce((sum, d) => sum + d.subdomains, 0)}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="h-4 w-4 text-athena-teal-500" />
              <span className="text-sm text-muted-foreground">Discovered</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Last Scanned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">Today</div>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-muted-foreground">Automated</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Domain Management */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Domain Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search domains or labels..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={viewMode === "table" ? "default" : "outline"}
                onClick={() => setViewMode("table")}
              >
                Table View
              </Button>
              <Button 
                variant={viewMode === "tree" ? "default" : "outline"}
                onClick={() => setViewMode("tree")}
              >
                Tree View
              </Button>
            </div>
          </div>

          {/* Domains Table */}
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead>Domain</TableHead>
                  <TableHead>Security Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Subdomains</TableHead>
                  <TableHead>Last Scanned</TableHead>
                  <TableHead>Labels</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDomains.map((domain) => (
                  <TableRow key={domain.id} className="hover:bg-muted/20">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-athena-teal-500" />
                        {domain.domain}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${getScoreColor(domain.score)}`}>
                          {domain.score}
                        </span>
                        <Badge variant={getScoreBadge(domain.score)}>
                          {domain.score >= 800 ? "A" : domain.score >= 700 ? "B" : "C"}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={domain.status === "Active" ? "default" : "secondary"}>
                        {domain.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{domain.subdomains}</TableCell>
                    <TableCell>{domain.lastScanned}</TableCell>
                    <TableCell>
                      <div className="flex gap-1 flex-wrap">
                        {domain.labels.map((label, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {label}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Scan
                        </Button>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Domains;
