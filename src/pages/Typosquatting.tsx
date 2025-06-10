
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";

const Typosquatting = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
          Typosquatting
        </h1>
        <p className="text-muted-foreground text-lg">Detect domain impersonation attempts</p>
      </div>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Copy className="h-5 w-5" />
            Domain Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Typosquatting detection coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Typosquatting;
