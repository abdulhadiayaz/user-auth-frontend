import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import InventoryTwoToneIcon from "@mui/icons-material/InventoryTwoTone";
import PaidIcon from "@mui/icons-material/Paid";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import WidgetsIcon from "@mui/icons-material/Widgets";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";

export const ACTIONS = {
  SET_SUCCESS: "setOemSuccess",
};

export const SIDENAV_ITEMS = [
  {
    to: "/users/dashboard",
    iconActive: <DashboardIcon className="sidebar-icon" size={25} />,
    iconInActive: <DashboardOutlinedIcon className="sidebar-icon" size={25} />,
    name: "Dashboard",
  },
  {
    to: "/users/products",
    iconActive: <CategoryIcon className="sidebar-icon" size={25} />,
    iconInActive: <CategoryOutlinedIcon className="sidebar-icon" size={25} />,
    name: "Products",
  },
  {
    to: "/users/orders",
    iconActive: <InventoryTwoToneIcon className="sidebar-icon" size={25} />,
    iconInActive: <InventoryOutlinedIcon className="sidebar-icon" size={25} />,
    name: "Orders",
  },
  {
    to: "/users/pricings",
    iconActive: <PaidIcon className="sidebar-icon" size={25} />,
    iconInActive: <PaidOutlinedIcon className="sidebar-icon" size={25} />,
    name: "Pricing",
    params: [
      "/users/pricings",
      "/users/packages",
      "/users/priceList",
      "/users/policyCards",
    ],
    subMenus: [
      {
        to: "/users/pricings",
        iconActive: <PaidIcon className="sidebar-icon" size={25} />,
        iconInActive: <PaidOutlinedIcon className="sidebar-icon" size={25} />,
        name: "Base Price",
      },
      {
        to: "/users/packages",
        iconActive: <WidgetsIcon className="sidebar-icon" size={25} />,
        iconInActive: (
          <WidgetsOutlinedIcon className="sidebar-icon" size={25} />
        ),
        name: "Packages",
      },
      {
        to: "/users/priceLists",
        iconActive: <PriceChangeIcon className="sidebar-icon" size={25} />,
        iconInActive: (
          <PriceChangeOutlinedIcon className="sidebar-icon" size={25} />
        ),
        name: "Price Lists",
      },
      {
        to: "/users/policyCards",
        iconActive: <PriceChangeIcon className="sidebar-icon" size={25} />,
        iconInActive: (
          <PriceChangeOutlinedIcon className="sidebar-icon" size={25} />
        ),
        name: "Policy Cards",
      },
    ],
  },
  {
    to: "/users/dealers",
    iconActive: <SupervisedUserCircleIcon className="sidebar-icon" size={25} />,
    iconInActive: (
      <SupervisedUserCircleOutlinedIcon className="sidebar-icon" size={25} />
    ),
    name: "Dealers",
    params: [
      "/users/dealers",
      "/users/dealerRequests",
      "/users/dealerDirectories",
      "/users/tags",
    ],
    subMenus: [
      {
        to: "/users/dealers",
        iconActive: (
          <SupervisedUserCircleIcon className="sidebar-icon" size={25} />
        ),
        iconInActive: (
          <SupervisedUserCircleOutlinedIcon
            className="sidebar-icon"
            size={25}
          />
        ),
        name: "Dealers",
      },
      {
        to: "/users/dealerDirectories",
        iconActive: <GroupsIcon className="sidebar-icon" size={25} />,
        iconInActive: <GroupsOutlinedIcon className="sidebar-icon" size={25} />,
        name: "Dealer Directory",
      },
      {
        to: "/users/dealerRequests",
        iconActive: <EmojiPeopleIcon className="sidebar-icon" size={25} />,
        iconInActive: (
          <EmojiPeopleOutlinedIcon className="sidebar-icon" size={25} />
        ),
        name: "Dealer Requests",
      },
      {
        to: "/users/tags",
        iconActive: <EmojiPeopleIcon className="sidebar-icon" size={25} />,
        iconInActive: (
          <EmojiPeopleOutlinedIcon className="sidebar-icon" size={25} />
        ),
        name: "Tags",
      },
    ],
  },
  {
    to: "/users/sales",
    iconActive: <PointOfSaleIcon className="sidebar-icon" size={25} />,
    iconInActive: (
      <PointOfSaleOutlinedIcon className="sidebar-icon" size={25} />
    ),
    name: "Sales",
  },
];
