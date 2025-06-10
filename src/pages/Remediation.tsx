
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const Remediation = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
          Remediation
        </h1>
        <p className="text-muted-foreground text-lg">Track and manage security remediation efforts</p>
      </div>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Remediation Workflow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Remediation tracking system coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Remediation;
