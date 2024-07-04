import { Badge, BlockStack, Box, Button, Card, InlineGrid, InlineStack, LegacyCard, LegacyStack, List, ResourceList, Text, TextContainer, Thumbnail, useBreakpoints } from "@shopify/polaris";
import { useCallback, useState } from "react";

const SocialBox = ({ _account } : { _account : any }) => {
    console.log(_account.data);
    
    const [connected, setConnected] = useState(_account.data.id ? true : false);
    const handleToggle = useCallback(() => setConnected((connected) => !connected), []);
    const contentStatus = connected ? 'Connect' : 'Disconnect';
    const {mdDown} = useBreakpoints();

    const actionMarkup = (
        <Button
            role="switch"
            ariaChecked={connected ? 'true' : 'false'}
            onClick={handleToggle}
            size="slim"
        >
            {contentStatus}
        </Button>
    );

    
    return (
        <>
            <LegacyStack alignment="center">
                <Thumbnail
                    source={connected ? _account.data.icon : _account.icon}
                    size="small"
                    alt={_account.title}
                />
                <LegacyStack.Item fill>
                    <TextContainer spacing="tight">
                        {connected ? (
                            <>
                                <LegacyStack distribution="fillEvenly">
                                    <Text variant="headingMd" as="h2">
                                        {_account.data.user_name}
                                    </Text>
                                    <Badge tone="success">Connected</Badge>
                                </LegacyStack>
                            </>
                        ) : (
                            <>
                                <Text variant="headingMd" as="h2">
                                    {_account.title}
                                </Text>
                                <Text as="p">
                                    No account connected
                                </Text>  
                            </>
                        )}
                    </TextContainer>
                </LegacyStack.Item>
                <LegacyStack.Item>
                    {!mdDown ? (
                        <Box minWidth="fit-content">
                            <InlineStack align="end">{actionMarkup}</InlineStack>
                        </Box>
                    ) : null}
                </LegacyStack.Item>
            </LegacyStack>
        </>
    )
}

const SocialsCard = ({
    social_accounts = [],
} : { 
    social_accounts : Array<SOCIAL_ACCOUNT>,
}) => {
    const rowAccount = social_accounts.map(
        (e, index) => (
            <>
                <LegacyCard.Section>
                    <Box width="100%" paddingBlockEnd="400">
                        <SocialBox _account={e} key={index}/>
                    </Box>
                </LegacyCard.Section>
            </>
        ),
    );
    return (
        <>
            <LegacyCard>
                {rowAccount}
            </LegacyCard>
        </>
    )
}
export default SocialsCard

