import { Box, ScrollArea, Tabs, Text } from '@radix-ui/themes';

export const ProductTabs = ({ data }) => {
    const { info } = data;

    return (
        <Box>
            <Tabs.Root defaultValue={info[0].title}>
                <Tabs.List color="gray">
                    {info.map((trigger, index) => (
                        <Tabs.Trigger
                            key={index}
                            value={trigger.title}
                            style={{ color: 'var(--color-main)' }}
                        >
                            {trigger.title}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
                <ScrollArea
                    type="auto"
                    scrollbars="vertical"
                    style={{ height: 120 }}
                >
                    <Box pt="3">
                        {info.map((content, index) => (
                            <Tabs.Content key={index} value={content.title}>
                                {content.text.map((txt, indx) => (
                                    <Text
                                        key={indx}
                                        as="p"
                                        size="2"
                                        style={{ color: 'var(--color-main)' }}
                                    >
                                        {txt}
                                    </Text>
                                ))}
                            </Tabs.Content>
                        ))}
                    </Box>
                </ScrollArea>
            </Tabs.Root>
        </Box>
    );
};
