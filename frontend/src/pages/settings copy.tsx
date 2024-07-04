import {
    Text,
    InlineStack,
    Box,
    Card,
    Button,
    Badge,
    BlockStack,
    useBreakpoints, Page,
} from '@shopify/polaris';
import {InfoIcon} from '@shopify/polaris-icons';
import {useState, useCallback} from 'react';

const Settings = () => {
    const [enabled, setEnabled] = useState(true);

    const handleToggle = useCallback(() => setEnabled((enabled) => !enabled), []);

    const contentStatus = enabled ? 'Turn off' : 'Turn on';

    const toggleId = 'setting-toggle-uuid';
    const descriptionId = 'setting-toggle-description-uuid';

    const {mdDown} = useBreakpoints();

    const badgeStatus = enabled ? 'success' : undefined;

    const badgeContent = enabled ? 'On' : 'Off';

    const title = 'Test mode';

    const settingStatusMarkup = (
        <Badge
            tone={badgeStatus}
            toneAndProgressLabelOverride={`Setting is ${badgeContent}`}
        >
            {badgeContent}
        </Badge>
    );

    const helpLink = (
        <Button variant="plain" icon={InfoIcon} accessibilityLabel="Learn more" />
    );

    const settingTitle = title ? (
        <InlineStack gap="200" wrap={false}>
            <InlineStack gap="200" align="start" blockAlign="baseline">
                <label htmlFor={toggleId}>
                    <Text variant="headingMd" as="h6">
                        {title}
                    </Text>
                </label>
                <InlineStack gap="200" align="center" blockAlign="center">
                    {settingStatusMarkup}
                </InlineStack>
            </InlineStack>
        </InlineStack>
    ) : null;

    const actionMarkup = (
        <Button
            role="switch"
            id={toggleId}
            ariaChecked={enabled ? 'true' : 'false'}
            onClick={handleToggle}
            size="slim"
        >
            {contentStatus}
        </Button>
    );

    const headerMarkup = (
        <Box width="100%">
            <InlineStack
                gap="1200"
                align="space-between"
                blockAlign="start"
                wrap={false}
            >
                {settingTitle}
                {!mdDown ? (
                    <Box minWidth="fit-content">
                        <InlineStack align="end">{actionMarkup}</InlineStack>
                    </Box>
                ) : null}
            </InlineStack>
        </Box>
    );

    const accounts = [
        {
            'type' : 'facebook',
            'title' : 'Facebook',
            'icon' : 'https://onepixel.onecommerce.io/img/logo-facebook-big.457c63df.svg'
        },
        {
            'type' : 'facebook1',
            'title' : 'Facebook 1',
            'icon' : 'https://onepixel.onecommerce.io/img/logo-facebook-big.457c63df.svg'
        },
    ]

    const rowAccount = accounts.map(
        (e, index) => (
            <>
                <Box width="100%">
                    <BlockStack gap={{xs: '200', sm: '400'}}>
                        {headerMarkup}
                    </BlockStack>
                </Box>
            </>
        ),
    );

    return (
        <>
            <Page>
                <Card>
                    <BlockStack gap={{xs: '400', sm: '500'}}>                        
                        {rowAccount}
                        <Box width="100%">
                            <BlockStack gap={{xs: '200', sm: '400'}}>
                                {headerMarkup}
                            </BlockStack>
                        </Box>
                        <Box width="100%">
                            <BlockStack gap={{xs: '200', sm: '400'}}>
                                <Box width="100%">
                                    <InlineStack
                                        gap="1200"
                                        align="space-between"
                                        blockAlign="start"
                                        wrap={false}
                                    >
                                        {settingTitle}
                                        {!mdDown ? (
                                            <Box minWidth="fit-content">
                                                <InlineStack align="end">{actionMarkup}</InlineStack>
                                            </Box>
                                        ) : null}
                                    </InlineStack>
                                </Box>
                            </BlockStack>
                        </Box>
                    </BlockStack>
                </Card>
            </Page>
        </>
    );
}

export default Settings