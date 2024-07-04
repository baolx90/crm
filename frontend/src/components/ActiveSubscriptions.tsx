import { BlockStack, Card, Text } from "@shopify/polaris";

export function ActiveSubscriptions() {

  return (
    <Card>
      <BlockStack gap={"400"}>
        <Text variant="headingMd" as="h1">
          Active Subscriptions
        </Text>
      </BlockStack>
    </Card>
  );
}
