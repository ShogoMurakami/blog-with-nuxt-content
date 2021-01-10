---
title: CNNによるBitcoin価格予測
description: CNNによるBitcoin価格予測
author:
  name: Shogo M
  bio: Developer.
  image: https://images.hive.blog/DQmYBsZMv2BrqwSuQf84nSZi6FHNZf1UDPv9YzqTo7w5qjw/IMG_0435.JPG
---

## CNNによるBitcoin価格予測

<author :author="author"></author>

![candlestickchart.png](https://images.hive.blog/DQmQveT2pRbAPhKvot1B73LgBFhFoFnLDPZMfHATrLtzd6d/candlestickchart.png)

ローソク足チャート画像を入力とする，2次元のCNNを用いて，Bitcoinの価格予測を行いました．

・使用した2次元CNNアーキテクチャ: (Conv2D + MaxPooling2D)2層 + Dense 2層

入力データの5分先の騰落を予測する，2値分類問題としました．

最終的なtest accuracyは，0.575でした．

---