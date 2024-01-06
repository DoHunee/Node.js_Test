// http://localhost:3000/?id=HTML 을 입력하면 페이지에 HTML이 출력되고
// http://localhost:3000/?id=CSS를 입력하면 페이지에 CSS가 출력된다
// response.end라는 코드는 (queryData.id)의 값을 페이지에 출력하는 역할이다
// 따라서 이제 http://localhost:3000/?id=의 뒤에 오는 (queryData.id)값을 변경하면
// 여러가지 페이지를 만들어낼 수 있다


var http = require('http');
var fs = require('fs');
var url = require('url'); 

var app = http.createServer(function(request,response){
    var _url = request.url;  //위에 모듈을 가져오는 url과 변수가 겹치므로 url_로 변동!!
    console.log(url);
    var queryData = url.parse(_url, true).query;
    console.log(queryData.name);
    console.log(queryData.id);


    if(_url == '/'){
      _url = '/index.html';
    }


    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }

    response.writeHead(200);
    response.end(queryData.id);

});
app.listen(3000);