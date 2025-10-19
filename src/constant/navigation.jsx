import { HiClipboardList, HiOutlineCog, HiOutlineDocumentText, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { SlPeople, SlScreenDesktop } from "react-icons/sl";

export const SIDEBAR_LINKS = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/",
        icon: <SlScreenDesktop size={26} />,


    },
    {
        key: "report",
        label: "Report",
        path: "/add_data",
        icon: <HiClipboardList size={24} />,

    },
    {
        key: "database",
        label: "Database",
        path: "/database",
        icon: <HiOutlineDocumentText size={24} />,

    },
    {
        key: "users",
        label: "Users",
        path: "/users",
        icon: <SlPeople size={24} />,
        isRole: true
    }
]

export const SIDEBAR_BOTTOM_LINKS = [
    {
        key: "settings",
        label: "Settings",
        path: "/settings",
        icon: <HiOutlineCog />,
    },
    {
        key: "support",
        label: "Help & Support",
        path: "/support",
        icon: <HiOutlineQuestionMarkCircle />,
    }
]