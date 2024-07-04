import {  useAppBridge, useAppBridgeState, useToast } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge/utilities";
import {
  Card,
  Page,
  Layout,
  Badge,
  LegacyCard,
  Button,
} from "@shopify/polaris";
// import { useTranslation } from "react-i18next";

const HomePage = () => {
  // const { t } = useTranslation();
  // const sessionToken = getSessionToken(useAppBridge())
  
  // console.log();
  
  const {show} = useToast();
  return (
      <Page 
        fullWidth 
        backAction={{content: 'Products', url: '#'}}
        title="3/4 inch Leather pet collar"
        titleMetadata={<Badge tone="success">Paid</Badge>}
        subtitle="Perfect for any pet"
        compactTitle
        primaryAction={{content: 'Save', disabled: true}}
        secondaryActions={[
          {
            content: 'Duplicate',
            accessibilityLabel: 'Secondary action label',
            onAction: () => alert('Duplicate action'),
          },
          {
            content: 'View on your store',
            onAction: () => alert('View on your store action'),
          },
        ]}
        actionGroups={[
          {
            title: 'Promote',
            actions: [
              {
                content: 'Share on Facebook',
                accessibilityLabel: 'Individual action label',
                onAction: () => alert('Share on Facebook action'),
              },
            ],
          },
        ]}
        pagination={{
          hasPrevious: true,
          hasNext: true,
        }}
      >
        {/* <TitleBar title={t("HomePage.title")} primaryAction={undefined}/> */}
        <Layout>
          <Layout.Section>
            <Card>
              asdasd demo lav
            </Card>
          </Layout.Section>
        </Layout>
        <LegacyCard title="Credit card" sectioned>
        <p>Credit card information</p>
        <Button onClick={() => {
          show('Success! 🎉', {
            duration: 2000,
            onDismiss: () => {
              console.log('👋 Toast dismissed')
            },
          });
        }}>
          Show toast
        </Button>
      </LegacyCard>
      </Page>
  );
}


export default HomePage