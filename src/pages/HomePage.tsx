import { useListProductsQuery } from 'graphQL/__generated/operations'

export const HomePage = () => {
  const listProductsQuery = useListProductsQuery({
    limit: 10,
    skip: 0,
  })

  const data = listProductsQuery.data

  if (listProductsQuery.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Here is the home page</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
