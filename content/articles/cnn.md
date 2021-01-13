---
title: CNNによるBitcoin価格予測
description: CNNによるBitcoin価格予測
author:
  name: Shogo M
  bio: Developer.
  image: https://images.hive.blog/DQmYBsZMv2BrqwSuQf84nSZi6FHNZf1UDPv9YzqTo7w5qjw/IMG_0435.JPG
---

## CNNによるBitcoin価格予測

---

![candlestickchart.png](https://images.hive.blog/DQmQveT2pRbAPhKvot1B73LgBFhFoFnLDPZMfHATrLtzd6d/candlestickchart.png)

ローソク足チャート画像を入力とする，2次元のCNNを用いて，Bitcoinの価格予測を行いました．

・2次元CNNアーキテクチャ: (Conv2D + MaxPooling2D)2層 + Dense 2層

・train画像枚数: 2800枚 (データ拡張によって，合計11,200枚), test画像枚数: 400枚

1分間隔の入力データの5分先の騰落を予測する，2値分類問題としました．

最終的なtest accuracyは0.575となり，Dropoutを低い割合で組み込むことで，精度の向上が見られました．

学習データを増やすことで，精度の向上を図ることができる可能性があります．