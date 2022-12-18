import { useSelector } from "react-redux";
import { Icon28CarOutline } from '@vkontakte/icons';
import { Icon28AddCircleOutline } from '@vkontakte/icons';

import Add from "../../components/Add";
import s from "./MainPage.module.scss";
import Mileage from "../../components/Mileage";

const MainPage = () => {
    const isCarAdded = useSelector(state => state.addCarReducer.brand);
    const brand = useSelector(state => state.addCarReducer.brand);
    const model = useSelector(state => state.addCarReducer.model);
    const year = useSelector(state => state.addCarReducer.year);
    const fuel = useSelector(state => state.addCarReducer.fuel);

    return (
        <div className={s.root}>
            <h1>Главная</h1>
            {
                !isCarAdded
                    ? <div className={s.add}><Add /></div>
                    : <div className={s.car}>
                        <div className={s.title}>
                            <Icon28CarOutline fill={"#2D81E0"} width={36} height={36} />
                            <div>
                                <h2>{`${brand} ${model}`}</h2>
                                <p>{`${year} г.в., ${fuel}`}</p>
                            </div>
                        </div>
                        <div className={s.mileage}>
                            <Mileage />
                        </div>
                        <div className={s.events}>
                            <h2>Последние события</h2>
                            <p>Здесь будут находитья ваши события (заправки и прочие траты)</p>
                            <button>
                                <Icon28AddCircleOutline />
                                <p>Добавить событие</p>
                                <span>gg</span>
                            </button>
                        </div>
                    </div>
            }

        </div>
    );
}

export default MainPage;