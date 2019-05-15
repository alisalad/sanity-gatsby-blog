export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cdbd216e14621ad8dd7839d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6us3hc4f',
                  apiId: '05d3c295-94e1-4436-a1b1-168729b14250'
                },
                {
                  buildHookId: '5cdbd216e7ede04d2bac1cf1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u31nyouw',
                  apiId: 'a4825bcc-41d3-447e-b156-68227632a54c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alisalad/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u31nyouw.netlify.com', category: 'apps'}
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
