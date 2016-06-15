var express = require('express');

var app = express();

app.get('/',function (req,res){
	var loc;
	
	var lang= req.headers["accept-language"];
	loc=lang.indexOf(",");
	lang=lang.slice(0,loc);
	
	var os = req.headers["user-agent"]; 
	loc =os.indexOf("(");
	os=os.slice(loc+1);
	loc =os.indexOf(")");
	os=os.slice(0,loc);
	
	var ip=req.headers["x-forwarded-for"]; 
	res.json({ipaddress: ip, language: lang, software: os});
	
});


var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});