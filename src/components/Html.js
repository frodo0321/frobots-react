const Html = ({ body, title }) => `
    <!DOCTYPE html>
    <html>
        <head>
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body style="margin:0">
            <div id="app">${body}</div>
        </body>
    </html>
`;

export default Html;
