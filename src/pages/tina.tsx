// ...
import { useTina } from 'tinacms/dist/react'

export default function Tina(props: any) {
    // Pass our data through the "useTina" hook to make it editable
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    // Note how our page body uses "data", and not the original "props.data".
    // This ensures that the content will be updated in edit-mode as the user types
    return <h1>{data.page.body}</h1>
}

export const getStaticProps = async () => {
    //@ts-ignore
    const pageResponse = await client.queries.page({ relativePath: 'tina.mdx' })

    return {
        props: {
            data: pageResponse.data,
            query: pageResponse.query,
            variables: pageResponse.variables,
        },
    }
}