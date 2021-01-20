---
title: 2次元CNNによるBitcoin価格予測
description: 2次元CNNによるBitcoin価格予測
author:
  name: Shogo M
  bio: Developer.
  image: https://images.hive.blog/DQmYBsZMv2BrqwSuQf84nSZi6FHNZf1UDPv9YzqTo7w5qjw/IMG_0435.JPG
---

## 2次元CNNによるBitcoin価格予測

---

![candlestickchart.png](https://images.hive.blog/DQmQveT2pRbAPhKvot1B73LgBFhFoFnLDPZMfHATrLtzd6d/candlestickchart.png)

個別銘柄のBitcoinを対象として，2次元CNNを用いた予測を行いました．

2次元CNNを用いた予測の研究は少なく，個別銘柄を対象とした研究は更に少ないです．

入力データは，上記のようなローソク足チャート画像としました．

また，1分間隔の入力データの5分先の騰落を予測する，2値分類問題としました．

### 1. データセット

train画像枚数: 2800枚 (データ拡張によって，合計11,200枚)

test画像枚数: 400枚

### 2. 2次元CNNアーキテクチャ

(Conv2D relu + MaxPooling2D)2層 + Flatten + Dropout(0.3) + Dense relu + Dense sigmoid

### 3. 結果

最終的なtest accuracyは0.575となり，Dropoutを低い割合で組み込むことで，精度の向上が見られました．

学習データを増やすことで，精度の向上を図ることができる可能性があります．