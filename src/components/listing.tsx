
import { ICard } from '../types/card';
import CardItem from './CardItem';
import '../css/main.css'

function Listing(props: { items: any}) {
  const { items } = props;

  return (
    
    <ul className='item-list'>
      {items.map((item: ICard) => <CardItem key={item.listing_id} item={item} />)}
    </ul>
   
  )
}

export default Listing