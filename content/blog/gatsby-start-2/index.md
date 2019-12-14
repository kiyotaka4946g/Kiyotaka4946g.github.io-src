---
title: Gatsby チュートリアル2 はじめての記事作成
date: "2019-12-14T20:30:03.272Z"
description: "Gatsby はじめての記事作成"
---

## はじめに
今回は[前回](/gatsby-start/)の続きから、github pagesでの実際の公開までを扱います。

## 動作の簡単なイメージ
現時点での簡単なイメージとしては、srcフォルダ以下にReactで雛形を作り、Gatsby-*.js等の設定を参考に、GlaphQLで取得したデータを流し込むと考えられましょう。

##スターター導入時のディレクトリ構成(抜粋)

```
-package.json #node用
-package.json.lock
-gatsby-config.js #主に汎用の設定など https://www.gatsbyjs.org/docs/api-files-gatsby-config/
-gatsby-node.js #主に変換用のコードや設定など https://www.gatsbyjs.org/docs/api-files-gatsby-node/
-gatsby-browser.js #主にブラウザ用のコードや設定など https://www.gatsbyjs.org/docs/api-files-gatsby-browser/
-src/
    -templates/ #変換用雛形
    -pages/ #個別ページ用
          -index.js #トップページ用
    -components/ #雛形用部品
-content/
        -blog/ #ブログ内容
-public/ #公開用フォルダ
```

##記事作成
概要を把握した所で記事の作成に入ります。記事の内容が記述されている /content/blog/ ですが下記のような構造になっています。
一つのディレクトリが一つの記事に対応し、記事本体である index.md ファイルと、記事単体の画像データなどが入っています。
ここから先は git で管理しつつ行なうと良いでしょう。

```
-hello-world/
            -index.md
            -salty_egg.jpg
-my-second-post/
-new-beginnings/
```

hello-world を 任意の名前(例 hello)に変更して下さい。ディレクトリ名が記事のURLの一部となります。
続いて内部の index.md を編集します。現状は下記のようになっていると思います。

```
---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---

This is my first post on my new fake blog! How exciting!

(中略)

![Chinese Salty Egg](./salty_egg.jpg)
```

上部の---から---までがヘッダーで GpaphQL で本文とは別に扱われます。title (例 hello) date (T以前を本日の日付に、ZはZuluでUTCのことです) description を適当に変更して下さい。
---以降の本文には [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog) では Markdown(CommonMarkやGitHub Flavored等対応) が利用できます。[このあたり](https://guides.github.com/features/mastering-markdown/) や [このあたり](https://qiita.com/Qiita/items/c686397e4a0f4f11683d) や [このあたり](https://gist.github.com/wate/7072365) などが分かりやすいと思います。
セーブするとブラウザが自動でリロードされ、書いた記事が表示されます。

##記事以外のページの編集
このままですとプロフィール等がスターター作者のままですので、設定や雛形を改変します。
gatsby-config.js から

```
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: `Kyle Mathews`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `kylemathews`,
    },
```

の部分を御自分用に改変して下さい。改変した時に項目を削除する場合には 他のファイル (src/components/seo.js と bio.js等) も変更する必要があります。最後に content/assets/profile-pic.jpg を御自身の写真などに変更しましょう。

## まとめ
導入後の記事作成まで行ないました。次回はgithub pagesへのアップロードです。


## 主要参考URL
https://www.gatsbyjs.org/docs/  
https://www.gatsbyjs.org/docs/gatsby-project-structure/  
https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog
https://qiita.com/Qiita/items/c686397e4a0f4f11683d  
https://mottox2.com/posts/182
https://takumon.com/2018/09/10/  
https://guides.github.com/features/mastering-markdown/
https://gist.github.com/wate/7072365