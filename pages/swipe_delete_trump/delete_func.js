
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
                if(qurd2card(cards[0]) == text) {continue;}//消さないカード//選ばれたカードはSTATE.FINISHでも消さない
                if(qurd2card(cards[1]) == text && state == STATE.DELETE) {continue;}//消さないカード
                if(qurd2card(cards[2]) == text && state == STATE.DELETE) {continue;}//消さないカード
                
                // card[i][j][k] = document.getElementById(text);
                card = document.getElementById(text);
                // console.log(card.getAttribute("src"));//getAttribute("src")で相対パスになる
                if(card.getAttribute("src") == "img/white.png"){ cnt++; continue;}//すでに消されている
                var clientRect = card.getBoundingClientRect();
                var x0 = clientRect.left, y0 = clientRect.top, x1 = clientRect.right, y1 = clientRect.bottom;
                if(x0 <= nowX && nowX <= x1){
                    if(y0 <= nowY && nowY <= y1){ 
                        card.src = "img/white.png";
                        card.srcset = "img/white.png";//retinaディスプレイ(高画質)のせいでこれを入れている
                        cnt++;}
                }

            }
        }
    }
    // console.log(" cnt: " + cnt );

    if(cnt == 49 && state == STATE.DELETE) state = STATE.TAP3;
    if(cnt == 51 && state == STATE.FINISH){printZ = "じゃあああああああん </br>" + qurd2card(cards[0]);}

}