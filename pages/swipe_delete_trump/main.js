
var numberX, numberY, numberZ;		// 数値表示部分のDOM取得用			
var printX = "", printY = "", printZ = "こんにちは";

// var SWIPE_DIR = {RIGHT: 0, DOWN: 1, LEFT: 2, UP: 3};//→ ↓ ← ↑
const SUIT = { 0: '♤' , 1:'♡' , 2: '♢', 3: '♧'};//♤  ♡  ♢   ♧	
const STATE = {CHOICE:0, DELETE:1, TAP3:2, FINISH:3};
var state = 0;

//スワイプイベント設定
function setSwipe(elem) {
	let t = document.querySelector(elem);
	let startX = -1, startY = -1, endX = -1, endY = -1;		// タッチ開始(x, y), タッチ終了(x, y);
	
	// タッチ開始時： xy座標を取得
	t.addEventListener("touchstart", function (e) {
		e.preventDefault();
		startX = e.touches[0].pageX;
		startY = e.touches[0].pageY;
		endX = startX;
		endY = startY;
	});

	// スワイプ中： xy座標を取得
	t.addEventListener("touchmove", function (e) {
		e.preventDefault();
		endX = e.changedTouches[0].pageX;
		endY = e.changedTouches[0].pageY;
		if(state == STATE.DELETE) delete_func(endX, endY);
		if(state == STATE.FINISH) delete_func(endX, endY);
	});

	// タッチ終了時： スワイプした距離から左右どちらにスワイプしたかを判定する/距離が短い場合何もしない
	t.addEventListener("touchend", function (e) {
		swipe_cal(startX, startY, endX, endY);
	});

}


//数値を画面に表示する
function setPrint() {
	// numberX.innerHTML = printX;
	// numberY.innerHTML = printY;
	numberZ.innerHTML = printZ;
}


//起動時の処理
window.addEventListener("load", function () {
	numberX = document.getElementById("numberX");// 数値表示部分のDOM取得
	numberY = document.getElementById("numberY");// 数値表示部分のDOM取得
	numberZ = document.getElementById("numberZ");// 数値表示部分のDOM取得

	numberY = state;
	setPrint();
	setSwipe("#swipe_area");// スワイプイベント設定
});