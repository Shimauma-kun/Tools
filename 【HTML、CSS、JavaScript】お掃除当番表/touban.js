//担当者を回していくためのスクリプト
//★★★★ユーザー設定↓↓↓
let shoki_date =  "2026/1/1"; //掃除当番表を始める年月（1日始まりにする）
let tantou = ["１班", "２班", "３班", "４班", "５班"]; //担当者の初期値
let souji = ["床","窓","廊下","ごみ箱","黒板"]; //掃除内容
//★★★★ユーザー設定↑↑↑
let r =  "100px";
let r_soto =  "240px";
let r_tantou =  "75px";

//担当者の色
let tantou_color = ['#ffffbc','#bcffbc','#bcffff','#bcbcff','#ffbcff'];

//ここで経過月を算出
//まずは今月の1日の日付取得
let nowdate = new Date();

let year = nowdate.getFullYear();
let month = nowdate.getMonth() + 1;
let day = nowdate.getDate();
let dayofweek = nowdate.getDay();

let noe_date_tuitati = new Date(year + '/' + month + '/1');

//「掃除当番表を始める年月」からの経過月を取得
let keikatuki =  funGetKeikaDate(shoki_date, noe_date_tuitati)

let new_tantou = new Array();
let new_tantou_color = new Array();
for (let i = 0; i < keikatuki; i++) {
    new_tantou = []
    for (let j = 4; j >= 0; j--) {
        new_tantou[j] =  tantou[j-1];
    }
    new_tantou[0] =  tantou[4]
    tantou = new_tantou;

    new_tantou_color = []
    for (let j = 4; j >= 0; j--) {
        new_tantou_color[j] =  tantou_color[j-1];
    }
    new_tantou_color[0] =  tantou_color[4]
    tantou_color = new_tantou_color;    
}


for (let i = 0; i <= 4; i++) {
    //担当者の円のラベルをHTMLに出力
    var span = document.createElement('span');
    span.className = 'circle_tantou';
    span.innerHTML     = tantou[i];
    document.getElementById('pid_t'+i ).appendChild(span);
}
for (let i = 0; i <= 4; i++) {
    //掃除内容の円のラベルをHTMLに出力
    var span = document.createElement('span');
    span.className = 'circle_souji';
    span.innerHTML     = souji[i];
    document.getElementById('pid_s'+i ).appendChild(span);
}

//担当者の色をCSSに設定
document.querySelector('.chart_tantou').style.backgroundImage = 'conic-gradient('+ tantou_color[0] +' 0% 20%, '+ tantou_color[1] +' 20% 40%, '+ tantou_color[2] +' 40% 60%, '+ tantou_color[3] +' 60% 80%, '+ tantou_color[4] +' 80% 100%)';

//何月経ったかを算出
 function funGetKeikaDate(dt1, dt2) {

    const date1 = new Date(dt1)
    const date2 = new Date(dt2)

    let months
    months = (date2.getFullYear() - date1.getFullYear()) * 12
    months -= date1.getMonth() + 1
    months += date2.getMonth() + 1

    return months
  };