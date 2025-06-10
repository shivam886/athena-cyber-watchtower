
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

const DetectedProducts = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-athena-teal-400 bg-clip-text text-transparent">
          Detected Products
        </h1>
        <p className="text-muted-foreground text-lg">Discover and manage technology stack</p>
      </div>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Technology Discovery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Product detection system coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetectedProducts;
