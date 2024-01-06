// http://localhost:3000/?id=HTML 을 입력하면 페이지에 HTML이 출력되고
// http://localhost:3000/?id=CSS를 입력하면 페이지에 CSS가 출력된다
// response.end라는 코드는 (queryData.id)의 값을 페이지에 출력하는 역할이다
// 따라서 이제 http://localhost:3000/?id=의 뒤에 오는 (queryData.id)값을 변경하면
// 여러가지 페이지를 만들어낼 수 있다


var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    
    // 최상위 경로로 들어가면 welcome뜨게!
    if(_url == '/'){
      title = 'Welcome';
    }
    
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
    <html>
    
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
    
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>
    `;
    response.end(template);
 
});
app.listen(3000);