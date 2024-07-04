// import {
//   Card,
//   Page,
//   Layout,
//   Badge,
//   LegacyCard,
// } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation } from "react-i18next";

// const HomePage = () => {
//   const { t } = useTranslation();
//   return (
//       <Page 
//         fullWidth 
//         backAction={{content: 'Products', url: '#'}}
//         title="3/4 inch Leather pet collar"
//         titleMetadata={<Badge tone="success">Paid</Badge>}
//         subtitle="Perfect for any pet"
//         compactTitle
//         primaryAction={{content: 'Save', disabled: true}}
//         secondaryActions={[
//           {
//             content: 'Duplicate',
//             accessibilityLabel: 'Secondary action label',
//             onAction: () => alert('Duplicate action'),
//           },
//           {
//             content: 'View on your store',
//             onAction: () => alert('View on your store action'),
//           },
//         ]}
//         actionGroups={[
//           {
//             title: 'Promote',
//             actions: [
//               {
//                 content: 'Share on Facebook',
//                 accessibilityLabel: 'Individual action label',
//                 onAction: () => alert('Share on Facebook action'),
//               },
//             ],
//           },
//         ]}
//         pagination={{
//           hasPrevious: true,
//           hasNext: true,
//         }}
//       >
//         <TitleBar title={t("HomePage.title")} primaryAction={undefined}/>
//         <Layout>
//           <Layout.Section>
//             <Card>
//               asdasd
//             </Card>
//           </Layout.Section>
//         </Layout>
//         <LegacyCard title="Credit card" sectioned>
//         <p>Credit card information</p>
//       </LegacyCard>
//       </Page>
//   );
// }

// import { ProductsCard } from '@/components/ProductsCard';
import { Loading, ResourcePicker, useAppBridge } from '@shopify/app-bridge-react';
import {Link, AccountConnection, Button} from '@shopify/polaris';
import {useState, useCallback} from 'react';

const HomePage = () => {
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [connected, setConnected] = useState(false);
  const accountName = connected ? 'Jane Appleseed' : '';

  const handleAction = useCallback(() => {
    setConnected((connected) => !connected);
  }, []);

  const buttonText = connected ? 'Disconnect' : 'Connect';
  const details = connected ? 'Account connected' : 'No account connected';
  const terms = connected ? null : (
    <p>
      By clicking <strong>Connect</strong>, you agree to accept Sample App’s{' '}
      <Link url="Example App">terms and conditions</Link>. You’ll pay a
      commission rate of 15% on sales made through Sample App.
    </p>
  );
    ResourcePicker
  const appBridge = useAppBridge();
  console.log(appBridge);
  console.log(1);
  
  let loading = false;
  const loadingComponent = loading ? <Loading /> : null;
  console.log(openModalProduct);
  
  const selectProduct = () => {
    setOpenModalProduct(true)
  }

  return (
    <>
    
      {loadingComponent}
      <Button variant="plain" onClick={selectProduct}>
        Change product
      </Button>
      
      <ResourcePicker resourceType="Product" open={openModalProduct} onCancel={() => {setOpenModalProduct(false)}} />

      <AccountConnection
        accountName={accountName}
        connected={connected}
        title="Example App"
        action={{
          content: buttonText,
          onAction: handleAction,
        }}
        details={details}
        termsOfService={terms}
      />
    </>
  );
}


export default HomePage