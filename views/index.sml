extends(src='layout.sml')
  block(name='content')
    h1 Reshape Plugins

    ul.social
      li.github: a(href='{{ githubUrl }}') github repo
      li.gitter: a(href='{{ gitterUrl }}') gitter chat
      li.docs: a(href='{{ documentationUrl }}') documentation

    form.search
      input.field(placeholder='search...')
      input(type='submit')

    table
      tr.header
        th Name
        th Description
        th Quality
        th Author
        th Links
      each(loop='p, i of plugins')
        tr(class='p{{ i }}')
          td.name: a(href='{{ p.module.links.repository }}') {{ p.module.name }}
          td {{ p.module.description }}
          td {{ Math.round(((p.score.detail.quality + p.score.detail.maintenance) / 2) * 100) }}
          td.author: a(href='https://npmjs.com/~{{ p.module.publisher.username }}') {{ p.module.publisher.username }}
          td
            .links
              a.github(href='{{ p.module.links.repository }}') gh
              a.npm(href='{{ p.module.links.npm }}') npm

    script var plugins = {{{ JSON.stringify(plugins) }}}
