import FolderSharedIcon from "@mui/icons-material/FolderShared";
import BadgeIcon from "@mui/icons-material/Badge";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import StoreIcon from "@mui/icons-material/Store";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const DASHBOARD_CARDS_DATA = [
  {
    redirectUrl: "dealerDirectories",
    iconClass: "icon-wrapper-3",
    textClass: "text-wrapper-3",
    dataKey: "totalDealers",
    text: "Dealers in Directory",
    icon: <FolderSharedIcon className="dashboard-icon" />,
  },
  {
    redirectUrl: "dealers",
    iconClass: "icon-wrapper-1",
    textClass: "text-wrapper-1",
    dataKey: "dealersCount",
    text: "Dealers Registered",
    icon: <BadgeIcon className="dashboard-icon" />,
  },
  {
    redirectUrl: "dealerRequests",
    iconClass: "icon-wrapper-4",
    textClass: "text-wrapper-4",
    dataKey: "dealerRequestsCount",
    text: "Dealer Requests Pending",
    icon: <HourglassFullIcon className="dashboard-icon" />,
  },
  {
    redirectUrl: "products",
    iconClass: "icon-wrapper-2",
    textClass: "text-wrapper-2",
    dataKey: "productsCount",
    text: "Products",
    icon: <StoreIcon className="dashboard-icon" />,
  },
  {
    redirectUrl: "orders",
    iconClass: "icon-wrapper-9",
    textClass: "text-wrapper-9",
    dataKey: "pendingOrders",
    text: "Pending Orders",
    icon: <PendingActionsIcon className="dashboard-icon" />,
  },
  {
    redirectUrl: "orders",
    iconClass: "icon-wrapper-6",
    textClass: "text-wrapper-6",
    dataKey: "awaitingApprovalOrders",
    text: "Awaiting Approval Orders",
    icon: <HistoryToggleOffIcon className="dashboard-icon" />,
  },
  {
    redirectUrl: "orders",
    iconClass: "icon-wrapper-7",
    textClass: "text-wrapper-7",
    dataKey: "approvedOrders",
    text: "Orders Approved",
    icon: <FactCheckIcon className="dashboard-icon" />,
  },
  {
    redirectUrl: "orders",
    iconClass: "icon-wrapper-8",
    textClass: "text-wrapper-8",
    dataKey: "deliveredOrders",
    text: "Delivered Orders",
    icon: <AssignmentTurnedInIcon className="dashboard-icon" />,
  },
  {
    redirectUrl: "dashboard",
    iconClass: "icon-wrapper-5",
    textClass: "text-wrapper-5",
    dataKey: "version",
    text: "Version",
    icon: <VerifiedUserIcon className="dashboard-icon" />,
  },
];
