import { useTina } from 'tinacms/dist/react'
import { client } from "../../tina/__generated__/client";

export default function Test(props: any) {
  // Pass our data through the "useTina" hook to make it editable
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  // Note how our page body uses "data", and not the original "props.data".
  // This ensures that the content will be updated in edit-mode as the user types
    return (
        <div>
            <h1>{data.page.title}</h1>
            <button>{data.page.bag}</button>
        </div>
    );
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.page({ relativePath: 'hello-world.md' })

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  }
}