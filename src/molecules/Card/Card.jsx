import { IconIncome, IconBalance, IconExpense } from "../../atoms";
import { Title, MoneyContainer, Money, HideMoney, BoxContainer } from "./Card.style";
import { useContext } from "react";
import { ButtonHideContext } from "../../store/buttonhide";

const Card = ({ title, value }) => {
   let icon, color, money;
   const [buttonHide, ] = useContext(ButtonHideContext);

   if (title === "Incomes") {
      icon = <IconIncome />;
      color = "#41d158";
   } else if (title === "Expenses") {
      icon = <IconExpense />;
      color = "#fb6c6c";
   } else {
      icon = <IconBalance />;
      color = "#7600d2";
   }

   if (buttonHide) {
      money = (
         <Money color={color}>
            €{value && value.toFixed(2).toString().replace(".", ",")}
         </Money>
      );
   } else {
      money = <HideMoney />;
   }

   return (
      <BoxContainer>
         <Title color={color}>{title}</Title>

         <MoneyContainer>
            {icon}

            {money}
         </MoneyContainer>
      </BoxContainer>
   );
};

export default Card;
