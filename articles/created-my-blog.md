---
title: 'Svelte/Sapperで自作ブログをやってみる'
date: '2021-03-27'
---

## **はじめに**

これまではてなブログを使用していたのですが、以前から身の回りの方が自作ブログを作り始めており、自分も自作ブログに興味をもっておりました。

最初は Laravel を利用するか、自作の PHP フレームワークを開発して、それを利用してブログを作ろうと考えていたのですが、ありきたりだなと思いはじめ、なるべく他の方が使っていないような技術を使おうと思い始めました。

2021 年 2 月の上旬に[UIT INSIDE](https://uit-inside.linecorp.com/)という Podcast を聞いていた際に、[Svelte](https://svelte.dev/)という JS フレームワークの存在を知り、まだまだ日本での普及率が少ないということを聞いたので、使ってみるのもいいかなと思い、今回の自作ブログに使わせていただきました。

## **構成**

このサイトは、既に公式が公開している[Sapper](https://sapper.svelte.dev/)のテンプレートである、[sveltejs/sapper-template](https://github.com/sveltejs/sapper-template)を元にしています。

ブログ部分は基本的には`/src/routes/blog/_post.js`を書き換えて、別に作った`/articles`というディレクトリからブログ記事である Markdown ファイルを呼ぶように書いています。

最初は[こちらの記事](https://newcurrent.se/blog/create-markdown-sapper-svelte-blog)をもとに書き換えなどを行いました。

しかし、下記のような、Markdown ファイルに書いた`date`などがうまく`/src/routes/index.svelte`などで呼べないと言う問題に当たってしまったので、[こちらの記事](https://n-ari.tech/blog/2020-02-06-create-portfolio-and-blog-with-sapper-and-netlify-cms/)を元に`slug`の呼び方を変えたり`date`が呼べるようにしました。

```article.md
---
title: "Svelte/Sapperで自作ブログをやってみる"
date: "2021-03-27"
---
```

ホスティングには vercel を利用しています。vercel 自体も今回が初めての利用になったのですが、そもそも Svelte の公式ドキュメントに書いてあるデプロイ方法が vercel であることや、vercel/og-image のような OSS があることを知っていたので、将来的に利用することを考え、このサイトのホスティングは vercel にしてみました。

Netlify CMS などを使った運用も考えてみたのですが、また別の機会になにかしらのプロダクトで利用してみようと思います。

## **これからやりたいこと**

まだまだこちらのサイトは完成とは言えないものなので、以下のようにもう少しやりたいことがあります。

- ブログ記事のカテゴリ分け機能と月別記事機能
- tailwindcss の導入
- デザインの調整
- vercel/og-image を利用したブログ記事の OGP 画像生成
- [Sapper から SvelteKit への移行](https://kit.svelte.dev/migrating)
- RSS
