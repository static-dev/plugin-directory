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
      tr
        td reshape-content
        td A description, wow!
        td 96
        td jescalan
        td
          a.github(href='#')
          a.npm(href='#')
