import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import ChurnAnalytics from "./pages/ChurnAnalytics";
import ChurnAnalyticsOverview from "./pages/ChurnAnalyticsOverview";
import ChurnAnalyticsSegmentation from "./pages/ChurnAnalyticsSegmentation";
import ChurnAnalyticsPredictiveChurn from "./pages/ChurnAnalyticsPredictiveChurn";
import ChurnAnalyticsChurnReasons from "./pages/ChurnAnalyticsChurnReasons";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";
import Settings from "./pages/Settings";
import SettingsUserManagement from "./pages/SettingsUserManagement";
import SettingsAccountSettings from "./pages/SettingsAccountSettings";
import SettingsApiKeys from "./pages/SettingsApiKeys";
import HelpSupport from "./pages/HelpSupport";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/churn-analytics" element={<ChurnAnalytics />} />
      <Route path="/churn-analytics/overview" element={<ChurnAnalyticsOverview />} />
      <Route path="/churn-analytics/segmentation" element={<ChurnAnalyticsSegmentation />} />
      <Route path="/churn-analytics/predictive-churn" element={<ChurnAnalyticsPredictiveChurn />} />
      <Route path="/churn-analytics/churn-reasons" element={<ChurnAnalyticsChurnReasons />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/user-management" element={<SettingsUserManagement />} />
      <Route path="/settings/account-settings" element={<SettingsAccountSettings />} />
      <Route path="/settings/api-keys" element={<SettingsApiKeys />} />
      <Route path="/help-support" element={<HelpSupport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;