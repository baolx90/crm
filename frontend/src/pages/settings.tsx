import SocialsCard from '@/components/SocialsCard';
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
    
    const accounts = [
        {
            'type' : 'facebook',
            'title' : 'Facebook',
            'icon' : 'https://onepixel.onecommerce.io/img/logo-facebook-big.457c63df.svg',
            'data' : {
                'id' : 213,
                'user_name' : "bao lx",
                'icon' : 'https://as2.ftcdn.net/v2/jpg/05/49/98/39/1000_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
            }
        },
        {
            'type' : 'tiktok',
            'title' : 'Tiktok',
            'icon' : 'https://onepixel.onecommerce.io/img/logo-tiktok-big.5a02b8ca.svg',
            'data' : {}
        },
        {
            'type' : 'google_ads',
            'title' : 'Google Ads',
            'icon' : 'https://onepixel.onecommerce.io/img/logo-google-big.5cef4452.svg',
            'data' : {}
        },
    ]

    return (
        <>
            <Page>
                <SocialsCard social_accounts={accounts}/>
            </Page>
        </>
    );
}

export default Settings