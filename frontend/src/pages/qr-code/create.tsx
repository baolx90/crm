import { useState } from "react";
import {
  Card,
  Bleed,
  Button,
  Divider,
  InlineStack,
  Layout,
  Page,
  Text,
  TextField,
  BlockStack,
} from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import ProductsCard from "@/components/ProductsCard";

const initialValues : DATA_TYPE = {
  title: "bao"
}

export default function QRCodeForm() {
  const [formData, setFormData] = useState(initialValues);  
  const [openModalProduct, setOpenModalProduct] = useState(false);
  let rs: PRODUCT_DATA[] = [];
  const onSelectionProduct = (selectionProducts : any) => {
    selectionProducts.selection.map(function(product : any) {
      const { images, id, variants, title, handle } = product;
      return rs.push({ images, id, variants, title, handle });
      // setFormData({ ...formData, products })
      // return <p key={idx}>{data}</p>
    });
    // const productData : PRODUCT_DATA = {
    //   id : selectionProducts.selection
    // }
    // console.log(selectionProducts);
    setFormData({
      ...formData,
      products: rs
    });
    setOpenModalProduct(false); 
  }
  const changeProductBtn = () => {

  }
  return (
    <>
      <ResourcePicker 
        resourceType="Product" 
        open={openModalProduct} 
        onCancel={() => {setOpenModalProduct(false)}} 
        onSelection={onSelectionProduct}
      />
      <Page>
        <Layout>
          <Layout.Section>
            <ProductsCard onSelection={(e: any) => console.log(e)} allowMultiple={false}>
              <div>bao test</div>
            </ProductsCard>
              
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Card>
              <Text as={"h2"} variant="headingLg">
                QR code
              </Text>
              {/* {qrCode ? (
                <EmptyState image={qrCode.image} imageContained={true} />
              ) : (
                <EmptyState image="">
                  Your QR code will appear here after you save
                </EmptyState>
              )} */}
              {/* <BlockStack gap="300">
                <Button
                  disabled={!qrCode?.image}
                  url={qrCode?.image}
                  download
                  variant="primary"
                >
                  Download
                </Button>
                <Button
                  disabled={!qrCode.id}
                  url={`/qrcodes/${qrCode.id}`}
                  target="_blank"
                >
                  Go to public URL
                </Button>
              </BlockStack> */}
            </Card>
          </Layout.Section>
          <Layout.Section>
            <div>asd 2</div>
            {/* <PageActions
              secondaryActions={[
                {
                  content: "Delete",
                  loading: isDeleting,
                  disabled: !qrCode.id || !qrCode || isSaving || isDeleting,
                  destructive: true,
                  outline: true,
                  onAction: () =>
                    submit({ action: "delete" }, { method: "post" }),
                },
              ]}
              primaryAction={{
                content: "Save",
                loading: isSaving,
                disabled: !isDirty || isSaving || isDeleting,
                onAction: handleSave,
              }}
            /> */}
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
