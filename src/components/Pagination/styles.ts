import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 40px;
    width: 100%;
`;

export const Paginate = styled(ReactPaginate)`
    display: flex;
    gap: 25px;
`;