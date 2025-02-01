import React from 'react';
import cl from './Pagination.module.scss';
import { getPagesArray, getPagesCount } from '../../../utils/pages';

const Pagination = ({ totalCount, page, limit, onClick }) => {
    let pagesCount = getPagesCount(totalCount, limit);
    let pagesArray = getPagesArray(pagesCount);
    return (
        <div className={cl.pagination_block}>
            {pagesArray.map(p => {
                return (
                    <span
                        key={p}
                        onClick={() => onClick(p)}
                        className={ page === p 
                            ?
                            `${cl.pagination__page} ${cl.pagination__page__active}` 
                            :
                            `${cl.pagination__page}`
                        }
                    >
                        {p}
                    </span>
                )
            })
            }
        </div>
    );
};
export default Pagination;