import { useCallback, useState } from 'react'
import merge from 'lodash.merge'

interface PaginationForAPIOptions {
  limit?: number
  skip?: number
  skipInterval?: number
}

const defaultPaginationForAPIOptions = {
  limit: 10,
  skip: 0,
  skipInterval: 10,
}

export const usePaginationForAPI = (options?: PaginationForAPIOptions) => {
  const opts = merge({}, defaultPaginationForAPIOptions, options)

  const [skip, setSkip] = useState<number>(opts.skip)

  const loadMoreContents = useCallback(
    (totalItems = 0, search?: string) => {
      return totalItems > skip && search === ''
    },
    [skip]
  )

  const onInfiniteLoadChange = useCallback(() => {
    setSkip((prev) => prev + opts.skipInterval)
  }, [opts.skipInterval])

  const changeToFirstPage = useCallback(() => {
    setSkip(0)
  }, [])

  return {
    skip,
    limit: opts.limit,
    loadMoreContents,
    changeToFirstPage,
    onInfiniteLoadChange,
  }
}
