import { Grid, Settings, BarChart2, User, Heart, MessageSquare, Folder, ShoppingCart, LucideIcon } from "lucide-react";

interface SubMenuItem {
    label: string;
    to: string;
  }

interface MenuItem {
    label: string;
    to: string;
    icon: LucideIcon;
    margin?: boolean;
    content?: SubMenuItem[];
  }

  export const menus: MenuItem[] = [
    { 
        label: "dashboard",
        to: "/", 
        icon: Grid 
    },
    { 
        label: "user",
        to: "/", 
        icon: User, 
        content: [
        { 
            label: "Overview", 
            to: "/user/overview" 
        },
        { 
            label: "Settings", 
            to: "/user/settings" 
        }
    ]},
    { 
        label: "messages", 
        to: "/", icon: MessageSquare 
    },
    { 
        label: "analytics", 
        to: "/", 
        icon: BarChart2, 
        content: [
        { 
            label: "Overview", 
            to: "/analytics/overview" 
        },
        { 
            label: "Reports", 
            to: "/analytics/reports" 
        },
        { 
            label: "Data", 
            to: "/analytics/data" 
        }
    ]},
    { 
        label: "File Manager", 
        to: "/", 
        icon: Folder 
    },
    { 
        label: "Cart", 
        to: "/", 
        icon: ShoppingCart 
    },
    {
        label: "Saved", 
        to: "/", 
        icon: Heart 
    },
    { 
        label: "Setting", 
        to: "/", 
        icon: Settings 
    },
  ];

