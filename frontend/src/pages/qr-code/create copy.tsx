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
            <BlockStack gap="500">
              <Card>
                <BlockStack gap="500">
                  <Text as={"h2"} variant="headingLg">
                    Title {formData.title}
                  </Text>
                  <TextField
                    id="title"
                    helpText="Only store staff can see this title"
                    label="title"
                    labelHidden
                    autoComplete="off"
                    value={formData.title}
                    onChange={(title) => setFormData({ ...formData, title })}
                  />
                </BlockStack>
              </Card>
              <Card>
                <BlockStack gap="500">
                  <InlineStack align="space-between">
                    <Text as={"h2"} variant="headingLg">
                      Product
                    </Text>
                    {formData.products ? (
                      <Button variant="plain" onClick={() => {setOpenModalProduct(true)}}>
                        Change product
                      </Button>
                    ) : null}
                  </InlineStack>
                  {formData.products ? (
                    <InlineStack blockAlign="center" gap="500">
                      meo meo
                      {/* <Thumbnail
                        source={formState.productImage || ImageIcon}
                        alt={formState.productAlt}
                      />
                      <Text as="span" variant="headingMd" fontWeight="semibold">
                        {formState.productTitle}
                      </Text> */}
                    </InlineStack>
                  ) : (
                    <BlockStack gap="200">
                      <Button onClick={() => {setOpenModalProduct(true)}} id="select-product">
                        Select product
                      </Button>
                    </BlockStack>
                  )}
                  {/* {formState.productId ? (
                    <InlineStack blockAlign="center" gap="500">
                      <Thumbnail
                        source={formState.productImage || ImageIcon}
                        alt={formState.productAlt}
                      />
                      <Text as="span" variant="headingMd" fontWeight="semibold">
                        {formState.productTitle}
                      </Text>
                    </InlineStack>
                  ) : (
                    <BlockStack gap="200">
                      <Button onClick={selectProduct} id="select-product">
                        Select product
                      </Button>
                      {errors.productId ? (
                        <InlineError
                          message={errors.productId}
                          fieldID="myFieldID"
                        />
                      ) : null}
                    </BlockStack>
                  )} */}
                  <Bleed marginInlineStart="200" marginInlineEnd="200">
                    <Divider />
                  </Bleed>
                  <InlineStack gap="500" align="space-between" blockAlign="start">
                    {/* <ChoiceList
                      title="Scan destination"
                      choices={[
                        { label: "Link to product page", value: "product" },
                        {
                          label: "Link to checkout page with product in the cart",
                          value: "cart",
                        },
                      ]}
                      selected={[formState.destination]}
                      onChange={(destination) =>
                        setFormState({
                          ...formState,
                          destination: destination[0],
                        })
                      }
                      error={errors.destination}
                    /> */}
                    {/* {qrCode.destinationUrl ? (
                      <Button
                        variant="plain"
                        url={qrCode.destinationUrl}
                        target="_blank"
                      >
                        Go to destination URL
                      </Button>
                    ) : null} */}
                  </InlineStack>
                </BlockStack>
              </Card>
            </BlockStack>
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
