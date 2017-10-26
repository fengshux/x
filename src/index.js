"use strict";


var http = require('http');
var fs = require('fs');
var url = require('url');


class X {

    constructor() {

        let x = this;
        x.log = console;
        
        
        this.httpServer =  http.createServer((req, res) => {

            var pathname = url.parse(req.url).pathname;
            x.info(`${new Date()} | ${req.method} | ${pathname}` );

            
            

        });



        
    }

    logger ( logger ) {
        this.log = logger;
    } 
    
    run ( port ) {
        
        this.httpServer.listen(port || 8080 );
    }
}
