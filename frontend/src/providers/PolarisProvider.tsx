import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { PropsWithChildren, useCallback } from "react";
import { getPolarisTranslations } from "../utils/i18nUtils";
import { useNavigate } from "react-router-dom";

function AppBridgeLink({ url, children, external, ...rest }: any) {
  const navigate = useNavigate()
  const handleClick = useCallback(() => {
    navigate(url)
  }, [url])

  const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/

  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={url} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export function PolarisProvider({ children }: PropsWithChildren) {
  const translations = getPolarisTranslations();

  return (
    <AppProvider i18n={translations} linkComponent={AppBridgeLink}>
      {children}
    </AppProvider>
  );
}
