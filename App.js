import React  from "react";
import { Modal, View } from "react-native";
import { WebView } from "react-native-webview";

const ZendeskChat = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Modal>
                <WebView
                    style={{ flex: 1 }}
                    hideKeyboardAccessoryView
                    source={{ uri: "https://fiever1676404393.zendesk.com/hc/pt-br" }}
                    showsVerticalScrollIndicator={false}
                    applicationNameForUserAgent="Fiever"
                    originWhitelist={['*']}
                />
            </Modal>
        </View>
    );
}

export default ZendeskChat;
