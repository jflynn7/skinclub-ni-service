import { UserDTO } from "@/types/user.dto";
import {
  IconCalendar,
  IconDashboard,
  IconHeading,
  IconNeedle,
  IconProps,
  IconSettings,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const user = {
  userProfile: {
    firstName: "Deborah",
    lastName: "Flynn",
  },
  email: "deboarah@skinclubni.com",
  image:
    "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/367446451_10160889804314281_4896301211448177732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vLzHZI4iNngQ7kNvgHAju_A&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=ASNx-quyepOLlrhUj9EZIDr&oh=00_AYAcAb4UDFuX5TH_I97nJHLbaWbv7CxxVAc7O7qDA5Z3cw&oe=677C3977",
};

export const fullName = (user: Partial<UserDTO>) =>
  [user?.userProfile?.firstName, user?.userProfile?.lastName].join(" ");

export interface MenuItem {
  label: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<any>>;
  route: string;
}

export interface MenuObject {
  type: string;
}

export interface UserMenuConfig {
  title: string;
  avatar?: string;
  menuItems: (MenuItem | MenuObject)[];
}

export const userMenuConfig = (
  loggedInUser: UserDTO & { image?: string },
): UserMenuConfig => ({
  title: fullName(loggedInUser),
  avatar: loggedInUser.image,
  menuItems: [
    {
      label: "Dashboard",
      icon: IconDashboard,
      route: "/client/dashboard",
    },
    {
      label: "Appointments",
      icon: IconCalendar,
      route: "/client/appointments",
    },
    {
      label: "Treatment Record",
      icon: IconNeedle,
      route: "/client/dashboard",
    },
    {
      type: "divider",
    },
    {
      label: "Account Settings",
      icon: IconSettings,
      route: "/client/account-settings",
    },
  ],
});
