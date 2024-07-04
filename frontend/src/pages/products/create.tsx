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
import NoteCard from "@/components/NoteCard";
import CustomerCard from "@/components/CustomerCard";
import { useNavigate } from "react-router-dom";

const initialValues : DATA_TYPE = {
  title: "bao"
}

export default function QRCodeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValues);  
  const [initialSelectionIds, setInitialSelectionIds] = useState([]);  
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
    // setOpenModalProduct(false); 
  }
  const changeProductBtn = () => {

  }
  const onSelection = (e: any) => {
    console.log(e.selection);
    
    setInitialSelectionIds(e.selection);
  }
  
  return (
    <>
      <Page
        title="Product Create"
        backAction={{
          content: "Back",
          onAction: () => navigate(-1),
        }}
      >
        <Layout>
          <Layout.Section>
            <ProductsCard initialSelectionIds={initialSelectionIds} onSelection={onSelection} allowMultiple={false}>
              <div>bao test</div>
            </ProductsCard>
              
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <NoteCard />
            <CustomerCard/>
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
