import { useState } from "react"

const useLoadMore = (page: number, totalPage: number) => {
  const [currentPage, setCurrentPage] = useState(1)

  const loadMore = () => {
    if (page < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return { currentPage, loadMore }
}

export default useLoadMore
