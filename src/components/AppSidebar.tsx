
import { Shield, BarChart3, Globe, AlertTriangle, FileSearch, Settings, FileText, Search, Home, TrendingUp, Shield as ShieldIcon, Bug, Wrench, FileX, Wifi, MapPin, Package, UserX, Copy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Executive Summary",
    url: "/executive-summary",
    icon: BarChart3,
  },
  {
    title: "Risk Profile",
    url: "/risk-profile",
    icon: TrendingUp,
  },
  {
    title: "Vulnerabilities",
    url: "/vulnerabilities",
    icon: Bug,
  },
  {
    title: "Remediation",
    url: "/remediation",
    icon: Wrench,
  },
  {
    title: "Risk Waivers",
    url: "/risk-waivers",
    icon: FileX,
  },
  {
    title: "Domains",
    url: "/domains",
    icon: Globe,
  },
  {
    title: "IP Addresses",
    url: "/ip-addresses",
    icon: MapPin,
  },
  {
    title: "Detected Products",
    url: "/detected-products",
    icon: Package,
  },
  {
    title: "Identity Breaches",
    url: "/identity-breaches",
    icon: UserX,
  },
  {
    title: "Typosquatting",
    url: "/typosquatting",
    icon: Copy,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-border/50 bg-sidebar">
      <SidebarHeader className="border-b border-border/50 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-athena-teal-500 to-athena-blue-600">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Athena</h1>
            <p className="text-xs text-muted-foreground">Cyber Risk Monitoring</p>
          </div>
        </div>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Risk Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="transition-all duration-200 hover:bg-sidebar-accent"
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
