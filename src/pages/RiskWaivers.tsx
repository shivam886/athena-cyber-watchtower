
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileX } from "lucide-react";

const RiskWaivers = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
          Risk Waivers
        </h1>
        <p className="text-muted-foreground text-lg">Manage approved risk exceptions and waivers</p>
      </div>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileX className="h-5 w-5" />
            Risk Waiver Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Risk waiver system coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskWaivers;
