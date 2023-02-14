import React, { useState } from "react";
import { Button, Modal, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from 'expo-constants';

const zendeskChatKey = Constants.expoConfig.extra.zendeskChatKey;

const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Chat</title>     
        <script>
            window.zESettings = {
                webWidget: {
                    color: {
                        theme: '#000000',
                        launcher: '#000000', // This will also update the badge
                        launcherText: '#000000',
                        button: '#000000',
                        resultLists: '#000000',
                        header: '#000000',
                        articleLinks: '#000000'
                    }
                }
            };
            
        </script>
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=${zendeskChatKey}" defer> </script>
    </head>
    <body>        
    </body>
</html>
`;

const ZendeskChat = () => {
    // const [showChat, setShowChat] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            {/* <Button title="Inicie uma conversa" color="#071e26" onPress={() => setShowChat(true)} />
            {showChat && (
                <Modal visible={showChat}>
                    <WebView
                        useWebKit
                        style={{ flex: 1 }}
                        hideKeyboardAccessoryView
                        source={{html, baseUrl: "https://static.zdassets.com" }}
                        showsVerticalScrollIndicator={false}
                        applicationNameForUserAgent="YourApp"
                        onMessage={({ nativeEvent }) => {
                            nativeEvent.data === "close" && setShowChat(false);
                        }}
                        originWhitelist={['*']}
                    />
                </Modal>
            )} */}

                <Modal>
                    <WebView
                        useWebKit
                        style={{ flex: 1 }}
                        hideKeyboardAccessoryView
                        source={{html, baseUrl: "https://static.zdassets.com" }}
                        showsVerticalScrollIndicator={false}
                        applicationNameForUserAgent="YourApp"
                        onMessage={({ nativeEvent }) => {
                            nativeEvent.data === "close" && setShowChat(false);
                        }}
                        originWhitelist={['*']}
                    />
                </Modal>
        </View>
    );
}

export default ZendeskChat;
