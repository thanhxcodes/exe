import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import CustomerProfile from "./pages/customer/CustomerProfile";
import CustomerOrders from "./pages/customer/CustomerOrders";
import CustomerOrderDetail from "./pages/customer/CustomerOrderDetail";
import CheckoutPage from "./pages/customer/CheckoutPage";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorProducts from "./pages/vendor/VendorProducts";
import VendorOrders from "./pages/vendor/VendorOrders";
import VendorOrderDetail from "./pages/vendor/VendorOrderDetail";
import VendorFinancials from "./pages/vendor/VendorFinancials";
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";
import DeliveryDetail from "./pages/delivery/DeliveryDetail";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminVendors from "./pages/admin/AdminVendors";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminVouchers from "./pages/admin/AdminVouchers";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/products",
    Component: ProductListingPage,
  },
  {
    path: "/products/:id",
    Component: ProductDetailPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/customer/dashboard",
    Component: CustomerDashboard,
  },
  {
    path: "/customer/profile",
    Component: CustomerProfile,
  },
  {
    path: "/customer/orders",
    Component: CustomerOrders,
  },
  {
    path: "/customer/orders/:id",
    Component: CustomerOrderDetail,
  },
  {
    path: "/checkout",
    Component: CheckoutPage,
  },
  {
    path: "/vendor/dashboard",
    Component: VendorDashboard,
  },
  {
    path: "/vendor/products",
    Component: VendorProducts,
  },
  {
    path: "/vendor/orders",
    Component: VendorOrders,
  },
  {
    path: "/vendor/orders/:id",
    Component: VendorOrderDetail,
  },
  {
    path: "/vendor/financials",
    Component: VendorFinancials,
  },
  {
    path: "/delivery/dashboard",
    Component: DeliveryDashboard,
  },
  {
    path: "/delivery/:id",
    Component: DeliveryDetail,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
  {
    path: "/admin/users",
    Component: AdminUsers,
  },
  {
    path: "/admin/vendors",
    Component: AdminVendors,
  },
  {
    path: "/admin/categories",
    Component: AdminCategories,
  },
  {
    path: "/admin/vouchers",
    Component: AdminVouchers,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
