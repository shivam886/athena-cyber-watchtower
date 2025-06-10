
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, Eye, EyeOff, AlertTriangle } from "lucide-react";

const vulnerabilitiesData = [
  {
    id: 1,
    cveId: "CVE-2024-1234",
    cvss: 9.8,
    epss: 0.95,
    status: "Active",
    software: "Apache HTTP Server",
    domain: "api.example.com",
    severity: "Critical",
    dateDetected: "2024-06-01",
  },
  {
    id: 2,
    cveId: "CVE-2024-5678",
    cvss: 7.5,
    epss: 0.67,
    status: "Active",
    software: "MySQL Database",
    domain: "db.example.com",
    severity: "High",
    dateDetected: "2024-06-03",
  },
  {
    id: 3,
    cveId: "CVE-2024-9012",
    cvss: 5.4,
    epss: 0.23,
    status: "Ignored",
    software: "Node.js",
    domain: "app.example.com",
    severity: "Medium",
    dateDetected: "2024-05-28",
  },
  {
    id: 4,
    cveId: "CVE-2024-3456",
    cvss: 3.1,
    epss: 0.08,
    status: "Active",
    software: "OpenSSL",
    domain: "secure.example.com",
    severity: "Low",
    dateDetected: "2024-06-05",
  },
];

const Vulnerabilities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showIgnored, setShowIgnored] = useState(true);

  const filteredVulnerabilities = vulnerabilitiesData.filter(vuln => {
    const matchesSearch = vuln.cveId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vuln.software.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vuln.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || vuln.status === statusFilter;
    const matchesIgnored = showIgnored || vuln.status !== "Ignored";
    
    return matchesSearch && matchesStatus && matchesIgnored;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
            Vulnerabilities
          </h1>
          <p className="text-muted-foreground text-lg">Monitor and manage security vulnerabilities</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="outline" onClick={() => setShowIgnored(!showIgnored)}>
            {showIgnored ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
            {showIgnored ? "Hide Ignored" : "Show Ignored"}
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Vulnerabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{vulnerabilitiesData.length}</div>
            <Badge variant="secondary" className="mt-2">Active Monitoring</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Critical & High</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {vulnerabilitiesData.filter(v => v.severity === "Critical" || v.severity === "High").length}
            </div>
            <Badge variant="destructive" className="mt-2">Requires Attention</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average CVSS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {(vulnerabilitiesData.reduce((sum, v) => sum + v.cvss, 0) / vulnerabilitiesData.length).toFixed(1)}
            </div>
            <Badge variant="default" className="mt-2">Risk Score</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ignored</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {vulnerabilitiesData.filter(v => v.status === "Ignored").length}
            </div>
            <Badge variant="secondary" className="mt-2">Waived</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Vulnerability Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by CVE ID, software, or domain..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={statusFilter === "All" ? "default" : "outline"}
                onClick={() => setStatusFilter("All")}
              >
                All
              </Button>
              <Button 
                variant={statusFilter === "Active" ? "default" : "outline"}
                onClick={() => setStatusFilter("Active")}
              >
                Active
              </Button>
              <Button 
                variant={statusFilter === "Ignored" ? "default" : "outline"}
                onClick={() => setStatusFilter("Ignored")}
              >
                Ignored
              </Button>
            </div>
          </div>

          {/* Vulnerabilities Table */}
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead>CVE ID</TableHead>
                  <TableHead>CVSS</TableHead>
                  <TableHead>EPSS</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Software</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date Detected</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVulnerabilities.map((vuln) => (
                  <TableRow key={vuln.id} className="hover:bg-muted/20">
                    <TableCell className="font-medium">{vuln.cveId}</TableCell>
                    <TableCell>
                      <Badge variant={vuln.cvss >= 7 ? "destructive" : vuln.cvss >= 4 ? "default" : "secondary"}>
                        {vuln.cvss}
                      </Badge>
                    </TableCell>
                    <TableCell>{(vuln.epss * 100).toFixed(1)}%</TableCell>
                    <TableCell>
                      <Badge variant={getSeverityColor(vuln.severity)}>
                        {vuln.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{vuln.software}</TableCell>
                    <TableCell>{vuln.domain}</TableCell>
                    <TableCell>
                      <Badge variant={vuln.status === "Active" ? "default" : "secondary"}>
                        {vuln.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{vuln.dateDetected}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {vuln.status === "Active" && (
                          <Button variant="ghost" size="sm">
                            <EyeOff className="h-4 w-4" />
                          </Button>
                        )}
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

export default Vulnerabilities;
