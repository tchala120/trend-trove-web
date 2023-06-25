import { useListProductsQuery } from 'graphQL/operations'

import { client } from 'graphQL/client'

export const HomePage = () => {
  const listProductCategoriesQuery = useListProductsQuery(client, {
    limit: 10,
    skip: 0,
  })

  const data = listProductCategoriesQuery.data

  if (listProductCategoriesQuery.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Here is the home page</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
