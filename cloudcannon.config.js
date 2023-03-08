module.exports = {
    collections_config: {
        pages: {
            name: 'Pages',
            path: 'src/pages',
            parser: 'frontmatter',
            output: true,
            url: '/[slug]'
        }
    }
}