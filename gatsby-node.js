const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark(filter: { frontmatter: { name: { eq: "services" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/services/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/service-template.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
