---
title: Gatsbyのインストールからスターターの導入まで
date: "2019-12-10T22:10:03.272Z"
description: "Gatsbyのインストールからスターターの導入まで"
---

## はじめに
[Gatsby](https://www.gatsbyjs.org/)でブログを作成しつつ手順や気付いた点などをまとめていきます。
想定読者はjavascriptやReactの概要等は把握している、規約より設定派の方です。
ある程度まとまったら、まとめ記事を作成予定です。Node.js(anyenv使用)のインストール等もそのうちまとめます。

## Gatsbyのインストール

```shell-session
# gatybyのインストール
$ npm install -g gatsby-cli

# 調べる時の基本のhelp。
$ gatsby -h
Usage: gatsby <command> [options]

コマンド:
  gatsby develop                   Start development server. Watches files,
                                   rebuilds, and hot reloads if something
                                   changes
  gatsby build                     Build a Gatsby project.
  gatsby serve                     Serve previously built Gatsby site.
  gatsby info                      Get environment information for debugging and
                                   issue reporting
  gatsby clean                     Wipe the local gatsby environment including
                                   built assets and cache
  gatsby repl                      Get a node repl with context of Gatsby
                                   environment, see
                                   (https://www.gatsbyjs.org/docs/gatsby-repl/)
  gatsby new [rootPath] [starter]  Create new Gatsby project.
  gatsby plugin                    Useful commands relating to Gatsby plugins
  gatsby telemetry                 Enable or disable Gatsby anonymous analytics
                                   collection.

オプション:
  --verbose                Turn on verbose output     [真偽] [デフォルト: false]
  --no-color, --no-colors  Turn off the color in output
                                                      [真偽] [デフォルト: false]
  --json                   Turn on the JSON logger    [真偽] [デフォルト: false]
  -h, --help               ヘルプを表示                                   [真偽]
  -v, --version            Show the version of the Gatsby CLI and the Gatsby
                           package in the current project                 [真偽]
```

## ブログスターターの導入
Gatsbyには導入用にスターターというものが数多く用意されています。
[公式が集めたスターターリスト](https://www.gatsbyjs.org/starters/?v=2)があり、標準では[githubでのスター数](https://github.com/search?o=desc&q=gatsby+starter&s=stars&type=Repositories)でソートされているので、こちらから選ぶのが便利でしょう。
今回は人気もあり、多くの技術記事などで採用されている、[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)を採用します。スターターの公式ページにある解説と依存関係は情報収集の基盤の一つとなります。

```shell-session
# gatsby new [rootPath] [starter]
$ gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
$ cd blog
$ gatsby develop #ポート番号は-pオプションで指定可能。
```

ブラウザで[ローカルホスト](http://localhost:8000)を開けばスターターの初期設定通りのページを見る事が出来ます。


## 主要参考URL
https://www.gatsbyjs.org/tutorial/  
https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog  
https://github.com/gatsbyjs/gatsby-starter-blog  
https://qiita.com/abouch/items/ab7694e64f011ee2b265  
https://takumon.com/2018/09/10/