import { ResourcePicker } from "@shopify/app-bridge-react";
import { BlockStack, Button, Card, Icon, InlineGrid, Text, TextField } from "@shopify/polaris";
import { SearchIcon} from '@shopify/polaris-icons';
import React, { useState } from "react";

interface Props {
  allowMultiple? : boolean,
  onCancel?: () => void;
  onSelection?: (e: any) => void;
  children?: JSX.Element,
}

const NoteCard : React.FC<Props> = ({onCancel , onSelection , allowMultiple , children }) => {
  const [filterProduct, setFilterProduct] = useState('');  
  const [openModalProduct, setOpenModalProduct] = useState(false);
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
            onSelection={(e) => { onSelection; setOpenModalProduct(false); console.log(e);}}
            initialQuery={filterProduct}
            allowMultiple={allowMultiple}
          />
        </BlockStack>
        {children}
      </Card>
    </>
  );
}
export default NoteCard