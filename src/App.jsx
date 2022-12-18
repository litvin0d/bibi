import { useEffect, useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import StatPage from "./pages/StatPage";
import SelectionPage from "./pages/SelectionPage";
import Navigation from "./components/Navigation";
import "./scss/index.scss";

const App = () => {
    const isInitial = useSelector(state => state.initialStartReducer.isInitial);
    const [name, setName] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            bridge.send("VKWebAppGetUserInfo").catch(e => console.log(e)).then((data) => {
                setName(data?.first_name);
            });
        };

        fetchUser();
    }, []);

    return (
        <>
            {
                isInitial
                    ? <WelcomePage userName={name} />
                    : <main className={"main"}>
                        <Routes>
                            <Route path={"/"} element={<MainPage />} />
                            <Route path={"stat"} element={<StatPage />} />
                            <Route path={"selection"} element={<SelectionPage />} />
                        </Routes>
                        <Navigation />
                    </main>
            }
        </>
    );
};

export default App;
