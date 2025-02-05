// src/constants/menuItems.ts (or .js)
import { SquareTerminal, Image, Frame, Layers, Images, CreditCard, Settings2 } from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareTerminal,
  },
  {
    title: "Generate Image",
    url: "/image-generation",
    icon: Image,
  },
  {
    title: "My Models",
    url: "/models",
    icon: Frame,
  },
  {
    title: "Train Models",
    url: "/model-training",
    icon: Layers,
  },
  {
    title: "My Images",
    url: "/gallery",
    icon: Images,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/account-settings",
    icon: Settings2,
  },
];
