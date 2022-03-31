export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624580ae9f042e2fdb4eb2c4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-i1ntufo4',
                  apiId: 'bdbca400-17e9-4936-a6b3-db0406c8183b'
                },
                {
                  buildHookId: '624580ae0498ef38d3943dfb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-mfvbnptr',
                  apiId: 'e8ffa952-4246-4bc7-8b1a-72c34c83b02e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/llev/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-mfvbnptr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
