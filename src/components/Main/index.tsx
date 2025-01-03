import { useEffect } from 'react';
import { Item } from '../Item';
import { isItemArr } from 'src/utils/guards';
import { useDispatch, useSelector } from 'react-redux';
import { loadingItems, saveItems } from 'src/actions/itemsActions';
import { BASE_URL } from 'src/utils/constants';
import { RootState } from 'src/app/rootReducer';
import { Loader } from '../Loader';

export const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);
  const isLoadingItems = useSelector((state: RootState) => state.items.isLoading);

  useEffect(() => {
    const loadData = async () => {
      dispatch(loadingItems());

      const response = await fetch(BASE_URL);

      const data: unknown = await response.json();

      dispatch(saveItems(isItemArr(data) ? data : []));
    };
    loadData();
  }, [dispatch]);

  return (
    <div className='main h-100 d-flex justify-content-center position-relative mt-2'>
      <div className='bar p-4 text-center mt-2 w-100 h-50'>
        <h1 className='mt-3 fw-bolder'>Our goods</h1>
      </div>

      <div className='items-wrapper w-100 d-flex flex-row align-items-start justify-content-center flex-wrap position-absolute scroll-container'>
        {isLoadingItems ? <Loader /> : items.map((item, index) => <Item key={`item-${index}`} item={item} />)}
      </div>
    </div>
  );
};
