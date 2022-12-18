import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit").then(console.log);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

// if (process.env.NODE_ENV === "development") {
//     import("./eruda").then(({ default: eruda }) => {
//     }); //runtime download
// }
