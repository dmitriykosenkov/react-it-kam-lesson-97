import { useState } from "react";
import s from "./Pagination.module.css";

const Pagination = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionsCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * pageSize + 1;
  let rightPortionNumber = portionNumber * pageSize;
  return (
    <div className={s.paginator}>
       {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
      <div className={s.pageNumbers}>
        {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
              <span
                onClick={() => {
                  onPageChanged(p);
                }}
                className={currentPage === p && s.selectedPage}
              >
                {p}
              </span>
          );
        })}
      </div>
       {portionsCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
    </div>
  );
};

export default Pagination;
