import './ProductCard.css'
import { Images } from './../components/Images/Images';
import { Description } from './../components/Description/Description';

export const ProductCard = () => {

    return (
        <main className='main'>
          <div className='slider'>
            <Images />
          </div>
          <Description />
        </main>
    )
}