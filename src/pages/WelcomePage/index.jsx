import { useDispatch } from "react-redux";

import Logo from "../../components/Logo";
import bgImage from "../../img/background.svg"
import s from "./WelcomePage.module.scss";
import { setInitialState } from "../../redux/initialStartSlice";
import { Icon28CarOutline, Icon28ChevronRightOutline } from "@vkontakte/icons";

const WelcomePage = ({ userName }) => {
    const dispatch = useDispatch();

    return (
        <div className={s.root} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={s.title}>
                <Logo />
                <p>Сервис учёта расходов на авто</p>
            </div>

            <div className={s.welcome}>
                <p>Добро пожаловать,</p>
                {userName ? <p className={s.name}>{userName}</p> : <p className={s.plug}>Name</p>}
            </div>

            <button className={s.button} onClick={() => dispatch(setInitialState())} >
                <Icon28CarOutline fill={"#fff"} width={32} height={32} />
                <p>Начать</p>
                <Icon28ChevronRightOutline fill={"#fff"} width={32} height={32} />
            </button>
        </div>
    );
}

export default WelcomePage;