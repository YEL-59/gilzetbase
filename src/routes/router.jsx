import { createBrowserRouter } from "react-router";

import RootLayout from "@/layouts/rootlayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import NotFound from "@/layouts/NotFound";

// Public pages
import Home from "@/pages/main/home/Home";
import Categorie from "@/pages/main/categorie/Categorie";
import Manifesto from "@/pages/main/manifesto/Manifesto";
import Winner from "@/pages/main/winner/Winner";
import About from "@/pages/main/About/About";
import MegazinePage from "@/pages/main/Magazine/MegazinePage";
import MagazineDetails from "@/pages/main/Magazine/MagazineDetails";
import FAQPage from "@/pages/main/Faq/FAQPage";
import HowitWork from "@/pages/main/howitwork/HowitWork";
import Contest from "@/pages/main/contest/Contest";

// Dashboard pages
import Account from "@/pages/dashboard/Account";
import MySubmissions from "@/pages/dashboard/MySubmissions";
import SubmissionDetails from "@/pages/dashboard/SubmissionDetails";
import SubscriptionPlanPage from "@/pages/dashboard/SubscriptionPlanPage";
import ProfileSettingsPage from "@/pages/dashboard/ProfileSettingsPage";
import SubmitPhotoForm from "@/components/SubmitPhotoForm";
import PasswordSettings from "@/pages/dashboard/ChangesPassword";
import SubscriptionPlan from "@/components/SubscriptionPlan";
import WinnerArchive from "@/pages/winnerarchive/WinnerArchive";

// Jury Pages
import JuryLayout from "@/layouts/jury/JuryLayout";
import JuryDashboard from "@/pages/jury/JuryDashboard";
import JuryArchive from "@/pages/jury/JuryArchive";
import JuryProfile from "@/pages/jury/JuryProfile";
import JuryPhotoDetails from "@/pages/jury/JuryPhotoDetails";

// Affiliate System
import AffiliateLayout from "@/layouts/affiliate/AffiliateLayout";
import AffiliateProgramHome from "@/pages/affiliate/AffiliateProgramHome";
import AffiliateLogin from "@/pages/affiliate/auth/AffiliateLogin";
import AffiliateRegister from "@/pages/affiliate/auth/AffiliateRegister";
import AffiliateOverview from "@/pages/affiliate/dashboard/AffiliateOverview";
import AffiliateCommissions from "@/pages/affiliate/dashboard/AffiliateCommissions";
import AffiliatePromotions from "@/pages/affiliate/dashboard/AffiliatePromotions";
import AffiliateSettings from "@/pages/affiliate/dashboard/AffiliateSettings";

// Admin Panel
import AdminLayout from "@/layouts/admin/AdminLayout";
import AdminAffiliateList from "@/pages/admin/affiliate/AdminAffiliateList";

export const router = createBrowserRouter([
  // 🌐 PUBLIC SITE (with Navbar + Footer)
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categorie /> },
      { path: "manifestos", element: <Manifesto /> },
      { path: "winner", element: <Winner /> },
      { path: "winner-archive", element: <WinnerArchive /> },
      { path: "about", element: <About /> },
      { path: "howitwork", element: <HowitWork /> },
      { path: "contest", element: <Contest /> },
      { path: "megazine", element: <MegazinePage /> },
      { path: "megazine/:id", element: <MagazineDetails /> },
      { path: "faq", element: <FAQPage /> },
      { path: "submit-photo", element: <SubmitPhotoForm /> },
      {
        path: "subscription",
        element: <SubscriptionPlan />,
      },
    ],
  },

  // 📊 DASHBOARD (NO Navbar + Footer)
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // Default route → /dashboard
      { index: true, element: <MySubmissions /> },

      // Submission details
      { path: "submissions/:id", element: <SubmissionDetails /> },

      // Subscription
      { path: "subscription", element: <SubscriptionPlanPage /> },

      // Account group
      {
        path: "account",
        children: [
          { index: true, element: <Account /> }, // /dashboard/account
          { path: "profile", element: <ProfileSettingsPage /> }, // /dashboard/account/profile
          { path: "password", element: <PasswordSettings /> }, // /dashboard/account/password
        ],
      },
    ],
  },

  // ⚖️ JURY PORTAL
  {
    path: "/jury",
    element: <JuryLayout />,
    children: [
      { path: "dashboard", element: <JuryDashboard /> },
      { path: "dashboard/:id", element: <JuryPhotoDetails /> },
      { path: "archive", element: <JuryArchive /> },
      { path: "profile", element: <JuryProfile /> },
    ],
  },

  // 🤝 AFFILIATE SYSTEM
  {
    path: "/affiliate",
    children: [
      { index: true, element: <AffiliateProgramHome /> },
      { path: "register", element: <AffiliateRegister /> },
      { path: "login", element: <AffiliateLogin /> },
      {
        path: "panel",
        element: <AffiliateLayout />,
        children: [
          { index: true, element: <AffiliateOverview /> },
          { path: "commissions", element: <AffiliateCommissions /> },
          { path: "materials", element: <AffiliatePromotions /> },
          { path: "settings", element: <AffiliateSettings /> },
        ]
      }
    ]
  },

  // 👑 ADMIN PANEL
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminAffiliateList /> }, // Temporary placeholder
      { path: "affiliates", element: <AdminAffiliateList /> },
      { path: "commissions", element: <AdminAffiliateList /> }, // Temporary placeholder
      { path: "payouts", element: <AdminAffiliateList /> }, // Temporary placeholder
      { path: "analytics", element: <AdminAffiliateList /> }, // Temporary placeholder
      { path: "settings", element: <AdminAffiliateList /> }, // Temporary placeholder
    ]
  },

  // ❌ 404 PAGE
  {
    path: "*",
    element: <NotFound />,
  },
]);
