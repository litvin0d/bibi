import { Link } from "react-router-dom";
import { Icon28CarOutline } from '@vkontakte/icons';
import { Icon32Poll } from '@vkontakte/icons';
import { Icon28Cards2Outline } from '@vkontakte/icons';
import s from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <Link to={"/"}>
                <Icon28CarOutline fill={"#fff"} width={32} height={32} />
                <p>Главная</p>
            </Link>
            <Link to={"/stat"}>
                <Icon32Poll fill={"#fff"} />
                <p>Статистика</p>
            </Link>
            <Link to={"/selection"}>
                <Icon28Cards2Outline fill={"#fff"} width={32} height={32} />
                <p>Подбор</p>
            </Link>
        </nav>
    );
}

export default Navigation;