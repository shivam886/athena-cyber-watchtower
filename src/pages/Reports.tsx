
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Plus } from "lucide-react";

const reports = [
  { id: 1, title: 'Q4 2024 Security Assessment', type: 'Quarterly Report', created: '2024-01-15', size: '2.4 MB', status: 'Ready' },
  { id: 2, title: 'Vendor Risk Summary - December', type: 'Monthly Report', created: '2024-01-01', size: '1.8 MB', status: 'Ready' },
  { id: 3, title: 'Attack Surface Analysis', type: 'Ad-hoc Report', created: '2023-12-28', size: '3.1 MB', status: 'Ready' },
  { id: 4, title: 'Data Breach Impact Assessment', type: 'Incident Report', created: '2023-12-20', size: '956 KB', status: 'Processing' },
];

const Reports = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">Generate and download security reports</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card cursor-pointer hover:bg-card/70 transition-all duration-200">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 text-athena-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Executive Summary</h3>
            <p className="text-sm text-muted-foreground">High-level security overview for leadership</p>
          </CardContent>
        </Card>

        <Card className="glass-card cursor-pointer hover:bg-card/70 transition-all duration-200">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 text-athena-teal-500 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Vendor Risk Report</h3>
            <p className="text-sm text-muted-foreground">Detailed third-party risk analysis</p>
          </CardContent>
        </Card>

        <Card className="glass-card cursor-pointer hover:bg-card/70 transition-all duration-200">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 text-athena-silver-400 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Compliance Report</h3>
            <p className="text-sm text-muted-foreground">Regulatory compliance status</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-athena-blue-500/20 text-athena-blue-500 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{report.title}</h3>
                    <p className="text-sm text-muted-foreground">{report.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-foreground">{report.size}</p>
                    <p className="text-xs text-muted-foreground">File size</p>
                  </div>
                  
                  <Badge variant={report.status === 'Ready' ? 'secondary' : 'default'}>
                    {report.status}
                  </Badge>
                  
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {report.created}
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-border/50"
                    disabled={report.status !== 'Ready'}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
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

export default Reports;
