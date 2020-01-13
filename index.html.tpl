<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
    <!-- https://electronjs.org/docs/tutorial/security#csp-meta-tag -->
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
    <meta name='application-name' content='Hello World' data-api-url='<%- apiUrl %>' />
  </head>
  <body>
    <h1>Hello World!</h1>
    <div id='app'></div>

    <script src="../node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script>

      const apiUrl = $('meta[name=application-name]').data('api-url');
      const isApp = window.location.hash === '#app';
      const $app = $('#app');

      $('<p />')
        .text('I am running in ')
        .append($('<strong />').text(isApp ? 'Electron' : 'the Browser'))
        .appendTo($app);

      fetch(apiUrl).then(res => res.json()).then(body => {
        $app.append($('<p />').text(`Connected to API (version ${body.version})`));
      });

    </script>

  </body>
</html>