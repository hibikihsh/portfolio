---
id: 2
title: "OpenAIハンズオン    "
description: "Lorem ipsum dolor sit amet"
pubDate: "2023/11/10"
emoji: "🤖"
isPublished: true
---

### モチベーション

openaiのアップデートによって多くのサービスの中でLLMを使った機能を見るようになりました。LLMなしの生活では大変になるので、サービス内で実装できるように勉強しておく。

##

> 1. [GetStarted](#GetStarted)

## GetStarted

### 1. API Keyの準備

- https://platform.openai.com/api-keys
  - 取得したAPI Keyは.envに設定してください。

### 2. openaiのインストール

```bash
npm install openai
```

### 3. コードの実装

- api keyはenvに記述して呼び出します。
- モデルによって利用料が変わるので、以下を参照にモデルを決めます。
  - モデル一覧：https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4
  - 料金参照：　https://openai.com/api/pricing/

今回は、コストの一番低いgpt-3.5-turboを利用していきます。

```js
// main.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
```

complication変数内では、[Chat Completions API](https://platform.openai.com/docs/guides/text-generation/chat-completions-api)を利用しています。Chat Completions APIはメッセージを入力として受け取り、LLMが生成した出力をメッセージとして返します。

### 4. 動かしてみる

```bash
node main.js
```

```
Thank you! How can I assist you today
```

応答が返ってきました。

## 参考記事

- https://platform.openai.com/docs/quickstart
