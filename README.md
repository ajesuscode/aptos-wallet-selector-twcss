# Aptos-Wallet-Selector-Tailwind


This is a work in progress project that implements an Aptos Wallet Selector with Tailwind CSS styling.  
Inspired by [AWAS AntDesign](https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/packages/wallet-adapter-ant-design)

___
### Usage

- Install [Aptos Wallet Adapter React](https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/packages/wallet-adapter-react) package
- You can find all supported [Aptos Wallets](https://github.com/aptos-labs/aptos-wallet-adapter/tree/main#readme)  in `README.md`
- Copy `WalletSelect.tsx` from `src/components` and paste into your project.
- Now you can use it as a `Component`

___
### Dynamic Data

- **`<WalletSelect />`** has three *(for now)* optional dynamic props `grid?: boolean`, `message?: string`, `link?: string`
- Quickly to change `colors` of the component go to your `tailwind.config.js` and paste skins with your own colors:  
```
extend: {
      colors: {
      ...
        "btn-skin": colors.lime[400],
        "bg-skin": colors.lime[200],
        "txt-skin": colors.zinc[950],
      ...
      },
    },
```
___
### Work in progress

- Dynamic prop with color selection.
- Dynamic prop with modal position `left` `right` `centre`
- Dark // Light default themes.
- Grid or Flex display switcher.

___
#### 👋 Contributors are welcome 🥳!!!




