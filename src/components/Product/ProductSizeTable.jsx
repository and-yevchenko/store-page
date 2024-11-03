import { Popover, Table } from '@radix-ui/themes';
import { Ruler } from 'lucide-react';

export const ProductSizeTable = () => {
    return (
        <Popover.Root>
            <Popover.Trigger>
                <button
                    type="button"
                    className="button-size"
                    style={{
                        background: 'transparent',
                        fontWeight: '500',
                        fontSize: '1rem',
                        color: 'var(--color-main)',
                        lineHeight: '1.5',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}
                >
                    <Ruler />
                    <span>Size guide</span>
                </button>
            </Popover.Trigger>
            <Popover.Content>
                <Table.Root size="1" variant="surface">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>
                                Size
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>XS</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>S</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>M</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>L</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>XL</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>2XL</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>3XL</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.RowHeaderCell>Chest</Table.RowHeaderCell>
                            <Table.Cell>80 - 88</Table.Cell>
                            <Table.Cell>88 - 96</Table.Cell>
                            <Table.Cell>96 - 104</Table.Cell>
                            <Table.Cell>104 - 112</Table.Cell>
                            <Table.Cell>112 - 124</Table.Cell>
                            <Table.Cell>124 - 136</Table.Cell>
                            <Table.Cell>136 - 148</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Waist</Table.RowHeaderCell>
                            <Table.Cell>65 - 73</Table.Cell>
                            <Table.Cell>73 - 81</Table.Cell>
                            <Table.Cell>81 - 89</Table.Cell>
                            <Table.Cell>89 - 97</Table.Cell>
                            <Table.Cell>97 - 109</Table.Cell>
                            <Table.Cell>109 - 121</Table.Cell>
                            <Table.Cell>121 - 133</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Hips</Table.RowHeaderCell>
                            <Table.Cell>80 - 88</Table.Cell>
                            <Table.Cell>88 - 96</Table.Cell>
                            <Table.Cell>96 - 104</Table.Cell>
                            <Table.Cell>104 - 112</Table.Cell>
                            <Table.Cell>112 - 120</Table.Cell>
                            <Table.Cell>120 - 128</Table.Cell>
                            <Table.Cell>128 - 136</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Height</Table.RowHeaderCell>
                            <Table.Cell>170 - 183</Table.Cell>
                            <Table.Cell>170 - 183</Table.Cell>
                            <Table.Cell>170 - 183</Table.Cell>
                            <Table.Cell>170 - 183</Table.Cell>
                            <Table.Cell>170 - 183</Table.Cell>
                            <Table.Cell>170 - 183</Table.Cell>
                            <Table.Cell>170 - 183</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Popover.Content>
        </Popover.Root>
    );
};
