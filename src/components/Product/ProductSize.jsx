import { Box, Flex, RadioCards, Text } from '@radix-ui/themes';
import { ProductSizeTable } from './ProductSizeTable';

export const ProductSize = ({ data }) => {
    const { size } = data;

    return (
        <Box as="div" width="fit-content">
            <Flex direction="column" gap="2" align="start">
                <Flex align="center" justify="between" width="100%">
                    <Text
                        as="label"
                        weight="medium"
                        style={{ color: 'var(--color-main)' }}
                    >
                        Size
                    </Text>
                    <ProductSizeTable />
                </Flex>
                <RadioCards.Root
                    columns="7"
                    color="gray"
                    size="1"
                    defaultValue={0}
                >
                    {Object.entries(size).map((sz, index) => (
                        <RadioCards.Item
                            title={!sz[1] ? 'Out of stock' : undefined}
                            key={sz[0]}
                            value={index}
                            disabled={!sz[1] ? true : undefined}
                            style={{
                                backgroundColor: 'var(--color-transparent)',
                            }}
                        >
                            <Text
                                as="span"
                                weight="medium"
                                size="2"
                                style={{ color: 'var(--color-main)' }}
                            >
                                {sz[0]}
                            </Text>
                        </RadioCards.Item>
                    ))}
                </RadioCards.Root>
            </Flex>
        </Box>
    );
};
