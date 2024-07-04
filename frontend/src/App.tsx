import { BrowserRouter } from "react-router-dom";
import { AppBridgeProvider, PolarisProvider, QueryProvider } from "./providers";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes, { Route } from "./Routes";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryView from "./components/ErrorView";
import { useTranslation } from "react-i18next";

export default function App() {
  const pages = import.meta.glob<Route>(
    "./pages/**/!(*.test.[jt]sx)*.([jt]sx)",
    {
      eager: true,
    }
  );
  
  const {t} = useTranslation();
  console.log(t);
  return (
    <PolarisProvider>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={ErrorBoundaryView}
            onReset={reset}
            onError={(error, info) => {
              console.log(error, info);              
            }}
          >
            <BrowserRouter>
              <AppBridgeProvider>
                <QueryProvider>
                  <NavigationMenu
                    navigationLinks={[
                      {
                        label: "Settings",
                        destination: "/settings",
                      },
                      {
                        label: "NavigationMenu.pageName",
                        destination: "/pagename",
                      },
                      {
                        label: "Products",
                        destination: "/products",
                      },
                      {
                        label: "Qr",
                        destination: "/qr-code",
                      },
                      {
                        label: t("Test"),
                        destination: "/test",
                      },
                    ]}
                  />
                  <Routes pages={pages} />
                </QueryProvider>
              </AppBridgeProvider>
            </BrowserRouter>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </PolarisProvider>
  );
}
