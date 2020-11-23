

var ball = document.getElementById("ball");
    ball.onmousedown = function(event) {console.log("タップされたよ!");}
    
    ball.style.position = "absolute";
    ball.ondragstart = function(event){ return false;  }
    ball.onmousedown = function(event){ document.addEventListener("mousemove",onMouseMove);  }
    
    var onMouseMove = function(event){
        var x = event.clientX;
        var y = event.clientY;
        var width = ball.offsetWidth;
        var height = ball.offsetHeight;
        ball.style.top = (y-height/2) + "px";
        ball.style.left = (x-width/2) + "px";
    }

    ball.onmouseup = function(event){
        var x = event.clientX;
        var y = event.clientY;
        var width = ball.offsetWidth;
        var height = ball.offsetHeight;
        var gomibakoRect = gomibako.getBoundingClientRect();
        if((x>=gomibakoRect.left && x<=(gomibakoRect.left+gomibakoRect.width)) && (y>=gomibakoRect.top && y<=(gomibakoRect.top+gomibakoRect.height))){
        var app = document.getElementById("app");
        app.removeChild(ball);
    }
        document.removeEventListener("mousemove",onMouseMove);
    }