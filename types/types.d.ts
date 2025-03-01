// types/next-auth.d.ts
import { User } from "@prisma/client";
import "next-auth";
import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & User

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "USER" | "ADMIN";
  }
}

export type IconProps = React.SVGProps<SVGSVGElement>;

export interface MobileNavItem {
  label: string;
  href: string;
  icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  large: boolean
}

export interface Condition {
  value:"ALL" | "NEW" | "GOOD" | "FAIR";
  label: string;
  icon:  React.ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;
}