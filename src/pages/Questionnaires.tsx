
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileSearch, Plus, Send, Eye } from "lucide-react";

const questionnaires = [
  { id: 1, vendor: 'TechCorp Solutions', title: 'Security Assessment Q4 2024', status: 'Completed', progress: 100, sent: '2024-01-10', due: '2024-01-20' },
  { id: 2, vendor: 'DataFlow Inc', title: 'Third-Party Risk Assessment', status: 'In Progress', progress: 65, sent: '2024-01-12', due: '2024-01-22' },
  { id: 3, vendor: 'CloudServices Ltd', title: 'Annual Security Review', status: 'Pending', progress: 0, sent: '2024-01-15', due: '2024-01-25' },
  { id: 4, vendor: 'SecureVault Co', title: 'Compliance Questionnaire', status: 'Overdue', progress: 30, sent: '2024-01-05', due: '2024-01-15' },
];

const Questionnaires = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Security Questionnaires</h1>
          <p className="text-muted-foreground mt-1">Manage vendor security assessments and compliance forms</p>
        </div>
        <Button className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:from-athena-teal-600 hover:to-athena-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Questionnaire
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
            <Send className="h-4 w-4 text-athena-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <FileSearch className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <p className="text-xs text-muted-foreground">76% completion rate</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <FileSearch className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">Awaiting responses</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <FileSearch className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Require follow-up</p>
          </CardContent>
        </Card>
      </div>

      {/* Questionnaire List */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recent Questionnaires</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {questionnaires.map((questionnaire) => (
              <div key={questionnaire.id} className="p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{questionnaire.title}</h3>
                    <p className="text-sm text-muted-foreground">{questionnaire.vendor}</p>
                  </div>
                  <Badge variant={
                    questionnaire.status === 'Completed' ? 'secondary' :
                    questionnaire.status === 'In Progress' ? 'default' :
                    questionnaire.status === 'Overdue' ? 'destructive' :
                    'outline'
                  }>
                    {questionnaire.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{questionnaire.progress}%</span>
                  </div>
                  <Progress value={questionnaire.progress} className="h-2" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>Sent: {questionnaire.sent}</span>
                    <span>Due: {questionnaire.due}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-border/50">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="border-border/50">
                      <Send className="h-4 w-4 mr-2" />
                      Remind
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Questionnaires;
