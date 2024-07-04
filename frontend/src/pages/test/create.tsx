import { AccountConnection, Button, Card, Checkbox, DropZone, Frame, InlineStack, Layout, LegacyCard, LegacyStack, Link, Modal, Page, ResourceList, Text, Thumbnail } from "@shopify/polaris";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

export default function PageGeneral() {

  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleCheckbox = useCallback((value: boolean) => setChecked(value), []);

  const modal = () => {
    console.log(123);
    setActive(true)
  }
  return (
    <>
      <Page
      title="Test"
      fullWidth
      primaryAction={{content: 'Create' , onAction : () => { modal() }}}
    >
      <Layout>

      </Layout>
    </Page>
      <Frame>
      <Modal
        size="fullScreen"
        open={active}
        onClose={toggleActive}
        title="Import customers by CSV"
        primaryAction={{
          content: 'Import customers',
          onAction: toggleActive,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: toggleActive,
          },
        ]}
      >
        <Modal.Section>
          <LegacyStack vertical>
            <DropZone
              accept=".csv"
              errorOverlayText="File type must be .csv"
              type="file"
              onDrop={() => {}}
            >
              <DropZone.FileUpload />
            </DropZone>
            <Checkbox
              checked={checked}
              label="Overwrite existing customers that have the same email or phone"
              onChange={handleCheckbox}
            />
          </LegacyStack>
        </Modal.Section>
      </Modal>
  </Frame>
    </>
  );
}
