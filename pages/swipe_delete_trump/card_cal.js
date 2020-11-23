
//cards[0]:相手が選んだカード, cards[1], cards[2]ランダムチョイス//static変数があればローカルにできるのに...
var cards = [
		[-1, -1, -1],
		[-1, -1, -1],
		[-1, -1, -1]
	];// [i][0]:SUIT,  [i][1], [i][2]: 00~11までで 0 ~ 15を表す

function qurd2card(quadrant){// 4進数表記からカードに変換
	var text = "";
	var num = quadrant[1] * 4 + quadrant[2] * 1;
	text += SUIT[quadrant[0]] + num;
	return text;
}

function random_choice(){
	var quadrant = [-1, -1, -1];// [0]:SUIT,  [1][2]: 00~11までで 0 ~ 15を表す
	while(true){
		var card1 = Math.floor(Math.random() * 63);// 0~63
		quadrant[2] = card1 % 4;	card1 = Math.floor(card1/4);//card1 /= 4;
		quadrant[1] = card1 % 4;    card1 = Math.floor(card1/4);//card1 /= 4;
		quadrant[0] = card1;
		if(quadrant[1] == 0  &&  quadrant[2] == 0) continue;// 0 * 4^1 + 0 = 0
		if(quadrant[1] == 3  &&  quadrant[2] == 2) continue;// 3 * 4^1 + 2 = 14
		if(quadrant[1] == 3  &&  quadrant[2] == 3) continue;// 3 * 4^1 + 3 = 15 トランプは1~13なので選び直し
		break;
	}
	// console.log(quadrant[0] + ", " + quadrant[1] + ", "+ quadrant[2]);
	return quadrant;
}

function card_cal(mode_val, swipe_dir){// 選んだカード　＋　２枚ランダムチョイス 計3枚選ぶ
    var show_text = "";//出力するテキストリスト
	if(mode_val == 3){
		cards[0][2] = swipe_dir;
		while(true){
			cards[1] = random_choice();
			if(cards[1] != cards[0]) break;
		}
		while(true){
			cards[2] = random_choice();
			if(cards[2] != cards[0] && cards[2] != cards[1]) break;
		}

		show_text += qurd2card(cards[0]);
		show_text += qurd2card(cards[1]);
		show_text += qurd2card(cards[2]);
		console.log("("+cards[0] + ")   (" + cards[1] + ")  ("+ cards[2]+"):   "+show_text + " じゃああああん");
		state = STATE.DELETE;// スワイプで3枚以外消すモードへ
		return;
	}

	if(mode_val == 1) cards[0][0] = swipe_dir;
	else if(mode_val == 2) cards[0][1] = swipe_dir;

	// show_text = SUIT[Math.floor(Math.random() * 4)];// SUIT[0~3]
	// show_text += Math.floor(Math.random() * 13) + 1;// 0~12  + 1 toStringじゃなくて良いらしい(てかtoStringだとエラー出た)
    // printZ = " cards: " + cards;
    // printZ = show_text;
    // setPrint();
}
