---
title: Github Pagesへの記事とGithubへのブログソースのコミット
date: "2020-03-14T12:14:08.272Z"
description: "Github Pagesへの記事とGithubへのブログソースのコミット"
---

## 更新できてない
忙しくて更新できてないのでメモ。あとで詳しい記事をあげます。  
  
私はGithub Pagesへのアップロードは[github pagesのユーザーページ用リポジトリ](https://github.com/[user-name]/[user-name].github.io.git) へのpublicディレクトリのPushで行なっています.  
[リポジトリ](https://github.com/[user-name]/[user-name].github.io.git) はリモート追跡ブランチoriginとして登録し、`npm install gh-pages --save-dev`からの、package.json に "deploy": "gatsby build && gh-pages -d public -b master" を追加し、`npm run deploy`です。  
ソースはgithubでソース用のプロジェクトを作り、リモート追跡ブランチでorigin以外の名前を付けて管理しています。  
git subtree の使用や branchの使用などの他の方法も紹介されていますが、この方法が一番楽な気がします。
  
##参考URL
[Github pagesで意地でもサブディレクトリをルートにする](https://matsuuratomoya.com/blog/2016-05-07/githubpage-subdirectory/)  
[npm run deploy で GitHub Pages にお手軽デプロイ](https://qiita.com/star__hoshi/items/490959aee12dbf528f7c)