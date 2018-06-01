const Html = ({ body, title }) => `
    <!DOCTYPE html>
    <!--[if IE 7]>
    <html class="ie ie7" lang="en-US">
    <![endif]-->
    <!--[if IE 8]>
    <html class="ie ie8" lang="en-US">
    <![endif]-->
    <!--[if !(IE 7) & !(IE 8)]><!-->
    <html lang="en-US">
    <!--<![endif]-->
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body style="margin:0">
            <div id="app">${body}</div>
        </body>
    </html>
`;

export default Html;
