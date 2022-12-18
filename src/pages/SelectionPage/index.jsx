import s from "./SelectionPage.module.scss";
import CarCard from "../../components/CarCard";

const SelectionPage = () => {
    return (
        <div className={s.root}>
            <h1>Подбор</h1>
            <div className={s.cards}>
                <CarCard car={"BMW X5"} money={"250 000"} />
                <CarCard car={"Mercedes-Benz S-Class W221"} money={"300 000"} />
                <CarCard car={"Opel Astra"} money={"70 000"} />
            </div>
        </div>
    );
}

export default SelectionPage;