import { Loading, ResourcePicker, useAppBridge } from '@shopify/app-bridge-react';
import {Link, AccountConnection, Button} from '@shopify/polaris';
import {useState, useCallback} from 'react';

const OrderCreate = () => {
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


export default OrderCreate