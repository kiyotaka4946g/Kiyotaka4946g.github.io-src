---
title: postmarketOSインストール(Nexus7 2012 wifi grouper)
date: "2020-04-22T21:30:51.272Z"
description: "postmarketOSのインストール"
---

## postmarketOSをまたインスコしてみた
[前回](/postmarketOS/)に続きNexus7 2012 wifiにpostmarketOSをインスコしてみた。  
手順はほぼ同じ、今回はplasma-mobile-extraをお試し。  
[公式wiki](https://wiki.postmarketos.org/wiki/Google_Nexus_7_2012_\(asus-grouper\))の650MBオーバーと同じく、[TWMP](https://twrp.me/)をインスコ後、`./pmbootstrap.py export`や`adb shell`等の手順となる。`df`のみではパーティションの確認が出来ず、`ls /dev/block/mmcblk0p*`を利用した。またマウントは最初からなかったのでadb shell内でのumountは不要だった。 `./pmbootstrap.py install`の途中で聞かれるユーザーパスワードは数字のみでないとタブレットの復帰が出来ないので注意。
  
全体として動作したものの非常に重く使いものにならない。タップしてもインタラクションもなく1分近く待たされてアプリが動き出す。電源オフがないので`sudo poweroff`とする必要があるなどplasma-mobileをNexus7 2012で使うのはスペック的に厳しいようだ。また何故かwi-fi設定中にkde5のwallet支払関連の情報入力画面が何度も出たが全てキャンセルした。怪しい動きはやめて欲しいものだ。  
  
続いてUIをphoshに変更しての最初からのインストール。手順は同じで簡単にインスコは可能。
動作は軽快で暫く使ってみるかと思うものの、ブラウザが検索エンジンページさえ表示できずに落ちる事が判明。電源は上部メニューから切れたので、非常に惜しい。

##現状のpostmarketOSへの結論
まだまだ発展途上で改善の余地が大きい人柱。Nexus7 2012で利用する場合には人柱デバッグOSS精神を持てるならPhoshが有望な選択肢か。開発者以外の利用は端末の無駄だろう。開発者にとっては4000円程度でLinuxタブレットで遊べると考えれば購入の余地はある。Androidより自由度は確実に高く不自由な開発環境に囚われずにすむ。自ら面倒を見るつもりの人には、楽しめるOSだろう。

###どうでも良い感想
xfce4の入力手段がタッチパッド系なら使いやすい気もする。
