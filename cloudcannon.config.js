module.exports = {
    collections_config: {
        pages: {
            name: 'Pages',
            path: 'src/_pages',
            parser: 'frontmatter',
            output: true,
            url: '/[slug]'
        }
    }
}