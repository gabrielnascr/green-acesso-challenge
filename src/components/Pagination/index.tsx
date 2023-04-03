import ReactPaginate from 'react-paginate';
import { Container, Paginate } from './styles';
import { useCharacters } from '@/redux/modules/characters/useCharacters';
import { useAppDispatch } from '@/redux';
import { setFilter } from '@/redux/modules/characters/characterSlice';

export default function Pagination() {
  const { responseInfo } = useCharacters();

  const dispatch = useAppDispatch();
  
  const handleUpdatePage = (a: { selected: number }) => {
    dispatch(setFilter({
      page: a.selected + 1,
    }))
  }

  return (
    <Container>
      <Paginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={responseInfo?.pages || 0}
        pageClassName='paginate-unactive'
        activeClassName='paginate-active'
        className='paginate'
        onPageChange={handleUpdatePage}
      />
    </Container>
  )
}