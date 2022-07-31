// // メイン部分
// let alertString;
// alertString = addString("WebCamp");

// // 作成した関数を呼び出す
// alert(alertString);

// // 簡単な関数を作成
// function addString(strA) {
//   let addStr = "Hello " + strA;
//   return addStr;
// }


// 複数の関数を定義
// // 入力ダイアログの表示
// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);

// 複数の関数を定義
// じゃんけんの手を入力するプロンプト欄を作成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand() {
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;

  if(js_hand_num == 0) {
    hand_name = "グー";
  } else if (js_hand_num == 1) {
    hand_name = "チョキ";
  } else if (js_hand_num == 2) {
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user_hand, js_hand) {
  let winLoseStr;

  if(user_hand == "グー") {
    if(js_hand == "グー") {
      winLoseStr = "あいこ";
    } else if(js_hand == "チョキ") {
      winLoseStr = "勝ち";
    } else if(js_hand == "パー") {
      winLoseStr = "負け";
    }
  } else if (user_hand == "チョキ") {
    if(js_hand == "グー") {
      winLoseStr = "負け";
    } else if(js_hand == "チョキ") {
      winLoseStr = "あいこ";
    } else if(js_hand == "パー") {
      winLoseStr = "勝ち";
    }
  } else if (user_hand == "パー") {
    if(js_hand == "グー") {
      winLoseStr = "勝ち";
    } else if(js_hand == "チョキ") {
      winLoseStr = "負け";
    } else if(js_hand == "パー") {
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}

