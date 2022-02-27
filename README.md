# tmp-redux-toolkit

# これは、next.js の環境構築済みリポジトリです。(redux-toolkit は未実装です)。

- 環境構築実施時点での各バージョン

* node: v12.22.10
* npm: 6.14.16
* yarn: 1.22.17

## 最初に行ってもらうこと(Visual Studio Code を用いた説明になっている)

### 拡張機能のインストール

#### 必須

- prettier
- eslint

#### 任意

- ES7+ React/Redux/React-Native snippets
- Code Spell Checker

<details><summary>メモ</summary>

## initial commit からの環境構築方法

1. `git clone git@github.com:kodai01/tmp-redux-toolkit.git`
2. `cd tmp-redux-toolkit`
3. `yarn init -y`
4. `yarn add next react react-dom`
5. `yarn add --dev typescript @types/react @types/node`
6. `mkdir pages && touch pages/index.tsx`
7. `yarn dev` <-これで最低限動く環境は完成。
8. `yarn add -D eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged`
</details>
