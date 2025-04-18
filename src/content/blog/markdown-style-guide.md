---
id: 1
title: "Markdownスタイルガイド"
description: "mdファイルでコンテンツを書いていく時に使うマークアップ記法について紹介します。"
pubDate: "2023/10/01"
# heroImage: "/markdown.jpg"
emoji: "🧑‍💻"
isPublished: true
tags: ["markdown"]
---

mdファイルでコンテンツを書いていく時に使うマークアップ記法について。

<br />

> 1. [見出し](#見出し)
> 2. [テキスト](#テキスト)
> 3. [画像の挿入](#画像の挿入)
> 4. [ブロック引用](#ブロック引用)
>    - [引用なしのブロック引用](#引用なしのブロック引用)
>    - [引用ありのブロック引用](#引用ありのブロック引用)
> 5. [テーブル](#テーブル)
> 6. [コードブロック](#コードブロック)
> 7. [リスト](#リスト)
>    - [番号付きリスト](#番号付きリスト)
>    - [順序なしリスト](#順序なしリスト)
>    - [入れ子リスト](#入れ子リスト)
> 8. [その他の要素](#その他の要素)

## 見出し

---

# H1

## H2

### H3

#### H4

## テキスト

---

日本の四季は非常に美しい。春には桜の花が咲き、夏には緑が溢れる。秋には紅葉が美しく、冬には雪が降る。日本の自然は詩的であり、多くの人々に愛されている。特に桜の花見は、日本の文化と密接に関連している。花見の季節には、家族や友人と一緒に花見を楽しむため、多くの人々が公園に集まる。桜の木の下でピクニックを楽しんだり、美しい花を眺めたりする。このような自然の美しさは、日本人にとって非常に特別なものであり、日本の風物詩として広く認識されている。

日本の四季と自然は、日本の文化と密接に結びついていて、多くの人々に感動を提供している。

## 画像の挿入

---

#### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](/blog-placeholder-about.jpg)

## ブロック引用

---

blockquote要素は、他の情報源から引用された内容を表し、オプションでフッターかcite要素内になければならない引用を伴い、オプションで注釈や省略などのインライン変更を伴います。

### 引用なしのブロック引用

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### 引用ありのブロック引用

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## テーブル

---

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## コードブロック

---

言語固有のシンタックを強調表示するには、最初の3つのバックスティックの後に言語名を1語だけ記述します（例：html、javascript、css、markdown、typescript、txt、bash）。

#### Syntax

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

#### Output

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## リスト

---

### 番号付きリスト

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### 順序なしリスト

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### 入れ子リスト

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## その他の要素　

---

#### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
