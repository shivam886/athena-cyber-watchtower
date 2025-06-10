
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserX } from "lucide-react";

const IdentityBreaches = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
          Identity Breaches
        </h1>
        <p className="text-muted-foreground text-lg">Monitor credential exposures and breaches</p>
      </div>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserX className="h-5 w-5" />
            Breach Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Identity breach monitoring coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdentityBreaches;
