import { ResourcePicker } from "@shopify/app-bridge-react";
import { BaseResource } from "@shopify/app-bridge/actions/ResourcePicker";
import { BlockStack, Button, Card, Icon, InlineGrid, Text, TextField } from "@shopify/polaris";
import { SearchIcon} from '@shopify/polaris-icons';
import React, { useState } from "react";

const ProductsCard = ({
  initialSelectionIds, 
  onCancel , 
  onSelection , 
  children 
} : { 
  initialSelectionIds?: BaseResource[],
  allowMultiple? : boolean,
  onCancel?: () => void,
  onSelection?: (e: any) => void,
  children : React.ReactNode 
}) => {
  const [filterProduct, setFilterProduct] = useState('');  
  const [openModalProduct, setOpenModalProduct] = useState(false);
  // const initialSelectionIds = [
  //   {
  //     id: "gid://shopify/Product/8169809936553",
  //     variants: [
  //       {
  //         id: "gid://shopify/ProductVariant/44350330634409",
  //       },
  //     ],
  //   },
  //   {
  //     id: "gid://shopify/Product/8169809838249",
  //     variants: [
  //       {
  //         id: "gid://shopify/ProductVariant/44350330241193",
  //       },
  //       {
  //         id: "gid://shopify/ProductVariant/44350330273961",
  //       },
  //     ],
  //   },
  // ];
  const runOnSelection = (e:any) => {
    setOpenModalProduct(false); 
    if(onSelection != undefined){
      onSelection(e);
    }
  }
  return (
    <>
      <Card roundedAbove="sm">
        <BlockStack gap="200">
          <InlineGrid columns="1fr auto">
            <Text variant="headingMd" as="h2">
              Products
            </Text>
            {/* <Button
              variant="plain"
              onClick={() => {}}
            >
              Add custom item
            </Button> */}
          </InlineGrid>
          <TextField
            label="Products"
            labelHidden
            prefix={<Icon source={SearchIcon} />}
            autoComplete="off"
            onChange={(product) => {setFilterProduct(product); setOpenModalProduct(true)}}
            connectedRight={
              <Button onClick={() => {setOpenModalProduct(true)}}>
                Browse
              </Button>
            }
          />
          <ResourcePicker 
            resourceType="Product" 
            open={openModalProduct} 
            onCancel={() => {setOpenModalProduct(false); onCancel}} 
            onSelection={runOnSelection}
            initialQuery={filterProduct}
            initialSelectionIds={initialSelectionIds}
          />
        </BlockStack>
        {children}
      </Card>
    </>
  );
}
export default ProductsCard