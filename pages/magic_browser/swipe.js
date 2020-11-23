

var tap_cnt = 0;// 連続タップ回数   //static変数があればローカルにできるのに...
var mode_val = -1;//モード格納用　0:ランダム，1:マーク，2:数字１，3:数字２　//static変数があればローカルにできるのに...

function swipe_cal(startX, startY, endX, endY){
	const MIN_DIST = 30;	// スワイプを感知する最低距離（ピクセル単位）
	// const CHMOD_RANGE = 70;//モード切替をする範囲
	const CHMOD_THRESH = 3;//CHMOD_THRESH回左上をタップするとモードチェンジ
	var SWIPE_DIR = {RIGHT: 0, DOWN: 1, LEFT: 2, UP: 3};//→ ↓ ← ↑
	var swipe_dir = -1;
	
	// スワイプorタップ判定
	if(Math.abs(startX - endX) < MIN_DIST){
		if(Math.abs(startY - endY) < MIN_DIST){
			tap_cnt++;//連続タップ回数
			if (tap_cnt >= CHMOD_THRESH){ mode_val = 1;}
			
			printY = " startX: " + startX.toFixed(2) + "      startY: " + startY.toFixed(2) + "</br> endX: " + endX.toFixed(2) + "         endY: " + endY.toFixed(2);
			printX = " mode_val: "+mode_val + " tap_cnt: " + tap_cnt ;//+ " startX: " + startX + " startY: " + startY + " endX: " + endX + " endY: " + endY;
			setPrint()
			return;//タップの場合は終了
		}
	}
	
	//以下スワイプの場合の処理
	tap_cnt = 0;
	
	//スワイプ処理 // 左上(0, 0),  右下(INF, INF)
	if (Math.abs(endX - startX) >= Math.abs(endY - startY)) {
		if (endX - startX> 0) { swipe_dir = SWIPE_DIR.RIGHT;}		// 左から右にスワイプ
		else if (endX - startX < 0) {swipe_dir = SWIPE_DIR.LEFT;}	// 右から左にスワイプ
	}
	else {
		if (endY - startY > 0) {swipe_dir = SWIPE_DIR.DOWN;}//上から下にスワイプ
		else if (endY - startY < 0) {swipe_dir = SWIPE_DIR.UP}//下から上にスワイプ
	}

	card_cal(mode_val, swipe_dir);
	if(mode_val > 0) mode_val = (mode_val+1) % 5;
	
	printY = " startX: " + startX.toFixed(2) + "      startY: " + startY.toFixed(2) + "</br> endX: " + endX.toFixed(2) + "         endY: " + endY.toFixed(2);
	printX = " mode_val: "+mode_val + " tap_cnt: " ;//+ " startX: " + startX + " startY: " + startY + " endX: " + endX + " endY: " + endY;
	setPrint();

}