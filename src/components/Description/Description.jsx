import { Flex } from '@radix-ui/themes';
import './Description.css';
import { ProductName } from '../Product/ProductName';
import { ProductSize } from '../Product/ProductSize';
import { ProductChoose } from '../Product/ProductChoose';
import { ProductTabs } from '../Product/ProductTabs';
import { ProductPrice } from '../Product/ProductPrice';
import { ProductBuy } from '../Product/ProductBuy';

export const Description = ({ data }) => {
    return (
        <div className="description">
            <ProductName data={data} />
            <ProductSize data={data} />
            <ProductChoose data={data} />
            <ProductTabs data={data} />
            <Flex gap="1" gapX="9" gapY="4" wrap="wrap">
                <ProductPrice data={data} />
                <ProductBuy />
            </Flex>
        </div>
    );
};
