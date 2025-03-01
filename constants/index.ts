import All from "@/components/ui/icons/All";
import Cart from "@/components/ui/icons/Cart";
import Fair from "@/components/ui/icons/Fair";
import Good from "@/components/ui/icons/Good";
import Home from "@/components/ui/icons/Home";
import New from "@/components/ui/icons/New";
import Saved from "@/components/ui/icons/Saved";
import Shop from "@/components/ui/icons/Shop";
import Support from "@/components/ui/icons/Support";
import { Condition, MobileNavItem } from "@/types/types";

export const mobileNavItems: MobileNavItem[] = [
    {
        label: "خانه",
        href:"/",
        icon: Home,
        large: false
    },
    {
        label: "سبد خرید",
        href:"/cart",
        icon: Cart,
        large: false
    },
    {
        label: "فروشگاه",
        href:"/shop",
        icon: Shop,
        large:true
    },
    {
        label: "نشان شده",
        href:"/saved",
        icon: Saved,
        large: false

    },
    {
        label: "پشتیبانی",
        href:"/support",
        icon: Support,
        large: false

    },
]

export const conditions : Condition[] = [
    { value: "ALL", label: "همه", icon:All },
    { value: "NEW", label: "نو", icon: New },
    { value: "GOOD", label: "در حد نو", icon: Good },
    { value: "FAIR", label: "کارکرده", icon: Fair },
  ];