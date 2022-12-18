import { Icon56GhostOutline } from '@vkontakte/icons';

import s from "./StatPage.module.scss";

const StatPage = () => {
    return (
        <div className={s.root}>
            <h1>Статистика</h1>
            <div>
                <Icon56GhostOutline width={82} height={82} />
                <h2>Данный раздел в разработке</h2>
            </div>
        </div>
    );
}

export default StatPage;