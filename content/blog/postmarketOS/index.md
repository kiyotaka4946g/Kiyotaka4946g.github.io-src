---
title: postmarketOSインストール(Nexus7 2012 3G tilapia)
date: "2020-04-20T20:04:08.272Z"
description: "postmarketOSのインストール"
---

## postmarketOSをインスコしてみた
Nexus7 2012を3500円程度で入手したが、公式ROMが超重かったので前から興味があったpostmarketOSをインスコしてみた。
[こちらのブログ](http://kapper1224.sblo.jp/article/185826863.html)をメインに[公式wiki](https://wiki.postmarketos.org/wiki/Google_Nexus_7_2012_\(asus-grouper\))をサブで簡単に出来た。  
注意点としてはブログ記事の`flashboot oem unlock`は`fastboot oem unlock`の誤記。  
また2020年4月現在ではxfce4が起動したため、XorgのWMも利用できる模様。サイズが650MBを越える物は公式wikiの手順でいけるはず。  
  
xfce4を起動したが、タッチスクリーンままとlinuxの通常のWMでは相性が悪過ぎて諦めた。公式はxfce4にはスタイラス推奨、動作はスムーズだったように思う。スクリーンキーボードの情報は[公式のこのへん](https://wiki.postmarketos.org/wiki/Input_methods)。
他の問題点としてWMからの電源オフが出来なかったので電源ボタン長押しで強制終了した。  
plasma-mobile-extraが無難そうなので、気が向いたら入れてみようと思う。ただLinuxアプリとスマホ操作の違いの問題はGUI系ではまだまだ残ると予想している。
