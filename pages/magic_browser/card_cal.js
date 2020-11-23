
var ans = [-1, -1, -1];// [0]:SUIT,  [1][2]: 00~11までで 0 ~ 15を表す//static変数があればローカルにできるのに...

function card_cal(mode_val, swipe_dir){
    var SUIT = { 0: '♤' , 1:'♡' , 2: '♢', 3: '♧'};//♤  ♡  ♢   ♧
	var show_text = "";//出力するテキストリスト
	if(mode_val == 3){
		ans[2] = swipe_dir;
		var num = ans[1] * 4 + ans[2] * 1;
		show_text = SUIT[ans[0]];
		show_text += num;
		// printZ = " ans: " + ans;
		printZ = show_text;
		printZ += "  </br>じゃああああん";
		setPrint();
		return;
	}

	if(mode_val == 1) ans[0] = swipe_dir;
	else if(mode_val == 2) ans[1] = swipe_dir;

	show_text = SUIT[Math.floor(Math.random() * 4)];// SUIT[0~3]
	show_text += Math.floor(Math.random() * 13) + 1;// 0~12  + 1 toStringじゃなくて良いらしい(てかtoStringだとエラー出た)
    // printZ = " ans: " + ans;
    printZ = show_text;
    setPrint();
}
