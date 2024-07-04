import { useTranslation } from "react-i18next";

const {t} = useTranslation();
console.log(t);

export const SHOPIFY_MENU = [
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
    label: "Test",
    destination: "/test",
  },
];