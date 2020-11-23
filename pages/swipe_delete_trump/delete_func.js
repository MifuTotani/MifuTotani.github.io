
// const SUIT = { 0: '♤' , 1:'♡' , 2: '♢', 3: '♧'};//♤  ♡  ♢   ♧
function delete_func(nowX, nowY){
    printX = qurd2card(cards[0]);
	printX += qurd2card(cards[1]);
	printX += qurd2card(cards[2]);
	// printX += cards;
	setPrint();
    // var is_deleted =[  //4×4×4の3次元配列
    //     [[0,0,0,0], [0,0,0,0],[0,0,0,0],[0,0,0,0]]
    //     [[0,0,0,0], [0,0,0,0],[0,0,0,0],[0,0,0,0]]
    //     [[0,0,0,0], [0,0,0,0],[0,0,0,0],[0,0,0,0]]
    //     [[0,0,0,0], [0,0,0,0],[0,0,0,0],[0,0,0,0]]
    // ];
    // var card = is_deleted; //cardもis_deletedと同じサイズ

    var cnt = 0;// 削除された,あるいは消さないカードの個数をcount
    // for(let i=0; i<3; i++){is_deleted[a[i][0]][a[i][1]][a[i][2]] = 1;}
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            for(let k=0; k<4; k++){
                var num = 4*j + 1*k;
                if(num == 0 || 14<=num) continue;
                var text = "";
                text += SUIT[i] + num;
                if(qurd2card(cards[0]) == text) {cnt++; continue;}//消さないカード//選ばれたカードはSTATE.FINISHでも消さない
                if(qurd2card(cards[1]) == text && state == STATE.DELETE) {cnt++; continue;}//消さないカード
                if(qurd2card(cards[2]) == text && state == STATE.DELETE) {cnt++; continue;}//消さないカード
                
                // card[i][j][k] = document.getElementById(text);
                card = document.getElementById(text);
                // console.log(card.getAttribute("src"));//getAttribute("src")で相対パスになる
                if(card.getAttribute("src") == "img/white.png"){ cnt++; continue;}//すでに消されている
                var clientRect = card.getBoundingClientRect();
                var x0 = clientRect.left, y0 = clientRect.top, x1 = clientRect.right, y1 = clientRect.bottom;
                if(x0 <= nowX && nowX <= x1){
                    if(y0 <= nowY && nowY <= y1){ card.src = "img/white.png"; cnt++;}
                }

            }
        }
    }

    if(cnt == 52 && STATE.DELETE) state = STATE.TAP3;
    if(cnt == 52 && STATE.FINISH){printZ = "じゃあああああああん";}


    // // console.log(" delete_func()" + document.getElementById("♤5"));
    // var card = document.getElementById("♤5");
    // // card.style.position = "absolute";//なんか画像が原点に移動したんで止めた
    // var clientRect = card.getBoundingClientRect();
    // var x0 = clientRect.left;
    // var y0 = clientRect.top;
    // var x1 = clientRect.right;
    // var y1 = clientRect.bottom;
    // console.log("(nowX, nowY)=(" + nowX + ", "+ nowY + ")    (x0, y0)=(" + x0 + ", "+ y0+")   (x1, y1)=(" + x1 + ", "+ y1+")");
    // if(x0 <= nowX && nowX <= x1){
    //     if(y0 <= nowY && nowY <= y1){
    //         // var swipe_area = document.getElementById("swipe_area");
    //         // swipe_area.removeChild(card);
    //         // card.remove();
    //         card.src = "img/white.png";
    //     }
    // }
}