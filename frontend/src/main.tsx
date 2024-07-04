import { createRoot } from "react-dom/client";
import App from "./App";
import { initI18n } from "./utils/i18nUtils";

const container = document.getElementById("root")!;
const root = createRoot(container);

// Ensure that locales are loaded before rendering the app
initI18n().then(() => {
  root.render(<App />);
});