# POC Zendesk Chat - Web View

A zendesk chat running in react native inside a web view.

## 📋 Table of contents

- [POC Zendesk Chat - Web View](#poc-zendesk-chat---web-view)
  - [📋 Table of contents](#📋-table-of-contents)
  - [📦 Installation](#📦-installation)
  - [🚀 Usage](#🚀-usage)
    - [Running the server](#running-the-server)
    - [Running the Client APP](#running-the-client-app)
  - [📜 License](#📜-license)

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/eteg/poc-zendesk-chat-rn-webview.git
```

Install the dependencies via `yarn`

```bash
yarn install
```

## 🚀 Usage

### Running the server

- Access https://fiever.zendesk.com/chat/agent#widget/getting_started
- Click in _Configurações_ and then in _Widget_
- Copy the _YOUR_KEY_ from snippet:
  `<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=[YOUR_KEY]"> </script>`
- Open the terminal and run the following command pasting the key `ZENDESK_CHAT_KEY="YOUR_KEY" npx expo start`

### Running the Client APP

1. Download the Expo Go on your smartphone

2. To open the app:
   - On your Android device, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal.
   - On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal.

The app will start running :)

## 📜 License

This project has no [license](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#:~:text=You%27re%20under%20no%20obligation%20to%20choose%20a%20license.%20However%2C%20without%20a%20license%2C%20the%20default%20copyright%20laws%20apply%2C%20meaning%20that%20you%20retain%20all%20rights%20to%20your%20source%20code%20and%20no%20one%20may%20reproduce%2C%20distribute%2C%20or%20create%20derivative%20works%20from%20your%20work.).
