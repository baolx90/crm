import { AccountConnection, Card, InlineStack, Layout, LegacyCard, Link, Page, ResourceList, Text, Thumbnail } from "@shopify/polaris";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

export default function PageGeneral() {

  const navigate = useNavigate();

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
  return (
    <Page
      title="Page General"
      fullWidth
      backAction={{
        content: "Back",
        onAction: () => navigate(-1),
      }}
    >
      <Layout>
        <Layout.Section variant="oneHalf">
          <LegacyCard title="Florida" actions={[{content: 'Manage'}]}>
              <LegacyCard.Section>
                <Text tone="subdued" as="span">
                  455 units available
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="Items">
                <ResourceList
                  resourceName={{singular: 'product', plural: 'products'}}
                  items={[
                    {
                      id: '341',
                      url: '#',
                      name: 'Black & orange scarf',
                      sku: '9234194023',
                      quantity: '254',
                      media: (
                        <Thumbnail
                          source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                          alt="Black orange scarf"
                        />
                      ),
                    },
                    {
                      id: '256',
                      url: '#',
                      name: 'Tucan scarf',
                      sku: '9234194010',
                      quantity: '201',
                      media: (
                        <Thumbnail
                          source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                          alt="Tucan scarf"
                        />
                      ),
                    },
                  ]}
                  renderItem={(item) => {
                    const {id, url, name, media} = item;

                    return (
                      <ResourceList.Item
                        id={id}
                        url={url}
                        media={media}
                        accessibilityLabel={`View details for ${name}`}
                      >
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
                      </ResourceList.Item>
                    );
                  }}
                />
              </LegacyCard.Section>
            </LegacyCard>
          <Card>
            <InlineStack gap={"200"} align="space-between" blockAlign="center">
              <Text variant="headingMd" as="h1">
                Page General Example
              </Text>
              <div style={{ padding: "0 20px" }}>
                asd
              </div>
            </InlineStack>
          </Card>
          <Card>
            <InlineStack gap={"200"} align="space-between" blockAlign="center">
              <Text variant="headingMd" as="h1">
                Page General Example
              </Text>
              <div style={{ padding: "0 20px" }}>
                asd
              </div>
            </InlineStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
