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
      { path: "about", element: <About /> },
      { path: "howitwork", element: <HowitWork /> },
      { path: "contest", element: <Contest /> },
      { path: "megazine", element: <MegazinePage /> },
      { path: "megazine/:id", element: <MagazineDetails /> },
      { path: "faq", element: <FAQPage /> },
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
          // { path: "password", element: <PasswordPage /> }, // /dashboard/account/password
        ],
      },
    ],
  },

  // ❌ 404 PAGE
  {
    path: "*",
    element: <NotFound />,
  },
]);
