import { Grid, Settings, BarChart2, User, Heart, MessageSquare, Folder, ShoppingCart } from "lucide-react";

import { MenuItem } from "@/@Typings/interface";


export const menus: MenuItem[] = [
  { 
    label: "dashboard",
    to: "/dashboard", 
    icon: Grid 
  },
  { 
    label: "user",
    icon: User, 
    content: [
      { 
        label: "Add", 
        to: "/" 
      },
      { 
        label: "List", 
        to: "/user/list" 
      }
    ]
  },
  { 
    label: "messages", 
    to: "/", 
    icon: MessageSquare 
  },
  { 
    label: "analytics", 
    icon: BarChart2, 
    content: [
      { 
        label: "Overview", 
        to: "/" 
      },
      { 
        label: "Reports", 
        to: "/" 
      },
      { 
        label: "Data", 
        to: "/" 
      }
    ]
  },
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
