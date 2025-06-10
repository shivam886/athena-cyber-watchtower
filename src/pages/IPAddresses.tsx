
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const IPAddresses = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
          IP Addresses
        </h1>
        <p className="text-muted-foreground text-lg">Monitor IP address inventory and security</p>
      </div>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            IP Address Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">IP address management coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IPAddresses;
