doctype html
html

  head
    block(name='meta')
      meta(charset='utf-8')
      meta(http-equiv='X-UA-Compatible' content='IE=edge, chrome=1')
      meta(name='description' content='a directory for plugins')
      meta(name='author' content='Jeff Escalante')
      meta(name="viewport" content="width=device-width, initial-scale=1")

    block(name='title')
      title Plugin Directory

    block(name='stylesheets')
      link(rel='stylesheet' href='css/index.css')

  body(role='document')
    main(role='main')
      block(name='content')

    block(name='javascript')
      script(src='js/main.js' defer)