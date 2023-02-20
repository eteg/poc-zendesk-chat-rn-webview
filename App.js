import React from "react";
import { Modal, View } from "react-native";
import { WebView } from "react-native-webview";

const ZendeskChat = () => {
    const INJECTED_JAVASCRIPT = `isFromMobile = true;`;

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Modal>
                <WebView
                    style={{ flex: 1 }}
                    hideKeyboardAccessoryView
                    source={{ uri: "https://fiever.zendesk.com/hc/pt-br" }}
                    showsVerticalScrollIndicator={false}
                    injectedJavaScript={INJECTED_JAVASCRIPT}
                    applicationNameForUserAgent="Fiever"
                    originWhitelist={['*']}
                    cacheEnabled={false}
                    cacheMode="LOAD_NO_CACHE"
                />
            </Modal>
        </View>
    );
}

export default ZendeskChat;
