import { InlineStack } from "@shopify/polaris";

const Placeholder = ({
    height = 'auto',
    width = 'auto',
    showBorder = false,
    children
}: { 
    height? : string,
    width? : string,
    showBorder? : boolean,
    children? : React.ReactNode 
}) => {
    return (
      <div
        style={{
          padding: '14px var(--p-space-200)',
          height: height,
          width: width,
          borderBlockEnd: showBorder
          ? '1px dashed var(--p-color-bg-surface-success)'
          : 'none',
        }}
      >
        <InlineStack align="center">
          <div
            style={{
              color: 'var(--p-color-text-info-on-bg-fill)',
            }}
          >
            {children}
          </div>
        </InlineStack>
      </div>
    );
};
  
export default Placeholder