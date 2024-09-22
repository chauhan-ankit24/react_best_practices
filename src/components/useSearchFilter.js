import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../features/items/itemsSlice';

const useSearchFilter = () => {
  return useSelector(selectFilteredItems);
};

export default useSearchFilter;
