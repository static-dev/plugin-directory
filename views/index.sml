extends(src='layout.sml')
  block(name='content')
    h1 Reshape Plugins

    ul.social
      li.github: a(href='#') github repo
      li.gitter: a(href='#') gitter chat
      li.docs: a(href='#') documentation

    form.search
      input.field(placeholder='search...')
      input(type='submit')

    table
      tr
        th Name
        th Description
        th Quality
        th Author
        th Links
      each(loop='p of plugins')
        tr
          td: strong {{ p.module.name }}
          td {{ p.module.description }}
          td {{ Math.round(((p.score.detail.quality + p.score.detail.maintenance) / 2) * 100) }}
          td: a(href='https://npmjs.com/~{{ p.module.publisher.username }}') {{ p.module.publisher.username }}
          td
            a.github(href='{{ p.module.links.repository }}') gh 
            a.npm(href='{{ p.module.links.npm }}') npm
