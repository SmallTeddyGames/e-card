## Game Description：

A two-player game, each side holds 5 cards.

**Emperor**side：hold one **Emperor** card（Emperor）, four citizens cards（Citizen）

**Slave**side：hold one **Slave** card（Slave）, four citizens cards（Citizen）

Both sides draw one card at a time for comparison.

 

## Rules of the game：

1、**Emperor** card is greater than **Citizen** card;
 **Citizen** card is greater than **Slave** card;
 **Slave** card is greater than **Emperor** card.

2、The citizens offset each other, discard each card for the next round. The offset card is no longer returned to the parties.

3、In order to avoid blind play, both sides need to confirm before each play.

4、**Emperor** card or **Slave** card was killed，The game ends and the killed party loses.

 

## Winning Analysis：

Winning is based on this logic：**Emperor** card is only needed to come out once, If you don't meet a **Slave** card, you win a **Citizen** card, you can have more than one **Citizen** card, Enough to win the **Slave** card. In the same way, **Slave** card is only needed to come out once, If you don't meet **Citizen** card, Then win the **Emperor** card, game over.

 
If you treat each card as indifference, randomly choose one card from all cards at a time. 

### **Emperor** Wins：

 

|                  | 1    | 2    | 3    | 4    | 5    | Total |
| ---------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Emperor** Wins | 0.32 | 0.24 | 0.16 | 0.08 | 0    | 0.8  |
| Draw             | 0.64 | 0.36 | 0.16 | 0.04 | 0    |      |
| **Emperor** Lost | 0.04 | 0.04 | 0.04 | 0.04 | 0.04 | 0.2  |

 

If you take the cards in your hand as two types, one is **Citizen** cards and the other is non **Citizen** cards（**Emperor** or **Slave**）, randomly choose one of the two categories at a time.

### **Emperor** Wins：

 

|                  | 1    | 2     | 3     | 4     | 5     | Total  |
| ---------------- | ---- | ----- | ----- | ----- | ----- | ----- |
| **Emperor** Wins | 0.5  | 0.125 | 0.031 | 0.008 | 0     | 0.664 |
| Draw             | 0.25 | 0.063 | 0.016 | 0.004 | 0     |       |
| **Emperor** Lost | 0.25 | 0.063 | 0.016 | 0.004 | 0.004 | 0.336 |

 

There are two best strategies for the **Slave** side：

1、In the first game, try to guide the game into the "five cards choose one" mode; after the second game, try to guide the game into the "**Emperor** or **Citizen**" mode.

2、The later the game, the greater the odds. Similarly, the later the game, the greater the pressure on the **Emperor**. (from the third inning, the emperor's winning rate was only 61% to 67%; from the fourth inning, the emperor's winning rate was only 50%).


For the **Emperor**, the best strategy is:

1、In the first game, try to guide the game into the "**Emperor** or **Citizen**" mode; after the second game, try to guide the game into the "N cards choose one" mode.

2、Try to let the emperor appear in the first three games, the more forward the probability of winning, the reason is as before. Of course, considering the psychological state of both sides in different games, the possibility of the emperor winning the fourth game was not ruled out.


============================================================================


## 游戏介绍：

两方游戏，双方各持5张牌。

**皇帝**方：持1张**皇帝**牌（Emperor），4张市民牌（Citizen）

奴隶方：持1张**奴隶牌**（Slave），4张市民牌（Citizen）

双方每次抽出一张牌进行比较。

 

## 游戏规则：

1、**皇帝**赢市民，市民赢奴隶，奴隶赢**皇帝**。

2、市民对市民互相抵消，各自弃牌进入下一轮。抵消牌不再交还各方。

3、为避免各方盲目出牌，每次出牌之前，双方出牌前需进行确认。

4、**皇帝**或奴隶被杀，游戏宣告结束，被杀方告负。

 

## 赢面分析：

计算赢面基于这样一个逻辑：**皇帝**只需要出来一次，如果没有遇上奴隶，那就赢掉一张市民，自己的市民牌就可以多于对方一张市民牌，足够最后赢掉奴隶。同理，奴隶也只需要出来一次，如果没有遇上市民，那就赢掉**皇帝**，结束游戏。

 

如果将每张牌视为无差别，每次从所有牌中随机选择一个。 

### **皇帝**方赢面：

 

|            | 1    | 2    | 3    | 4    | 5    | 总计 |
| ---------- | ---- | ---- | ---- | ---- | ---- | ---- |
| **皇帝**胜 | 0.32 | 0.24 | 0.16 | 0.08 | 0    | 0.8  |
| 平         | 0.64 | 0.36 | 0.16 | 0.04 | 0    |      |
| **皇帝**负 | 0.04 | 0.04 | 0.04 | 0.04 | 0.04 | 0.2  |

 

如果将手里的牌视为两类，一类市民牌，一类非市民牌（**皇帝**或奴隶），每次从两类中随机选择一个。

### **皇帝**方赢面：

 

|            | 1    | 2     | 3     | 4     | 5     | 总计  |
| ---------- | ---- | ----- | ----- | ----- | ----- | ----- |
| **皇帝**胜 | 0.5  | 0.125 | 0.031 | 0.008 | 0     | 0.664 |
| 平         | 0.25 | 0.063 | 0.016 | 0.004 | 0     |       |
| **皇帝**负 | 0.25 | 0.063 | 0.016 | 0.004 | 0.004 | 0.336 |

 

对于**奴隶**方，最佳的策略有两个：

1、在第一局，尽量引导牌局走入“五张牌选一张”的模式；在第二局之后，尽量引导牌局走入“是出**皇帝**还是出市民”这个二选一的模式。

2、牌局越往后，胜算越大。同理，牌局越往后，**皇帝**方的压力也越大。（从第3局开始，**皇帝**方在胜率只在61%到67%之间；从第4局开始，**皇帝**方胜率只有50%）


对于**皇帝**方，最佳的策略是：

1、在第一局，尽量引导牌局走入“是出**皇帝**还是出市民”这个二选一的模式；在第二局之后，尽量引导牌局走入“N张牌选一张”的模式。

2、尽量让**皇帝**出现在前三局，越往前赢的概率越大，理由如前。当然，考虑到不同牌局双方的心理状态，不排除**皇帝**第四局赢的可能。
