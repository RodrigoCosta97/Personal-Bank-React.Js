
import Card from "../../molecules/Card/Card.jsx";
import { Container } from "./Cards.style.js";


const Cards = ({income,expense,balance}) => {
   
    return (
        <Container>
            <Card title="Incomes" value={income}></Card>
            <Card title="Expenses"value={expense}></Card>
            <Card title="Account Balance"value={balance}></Card>
        </Container>
    );
}

export {Cards};