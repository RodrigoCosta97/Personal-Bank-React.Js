import {
   ButtonModaltitleExpense,
   ButtonModaltitleincome,
   Buttons,
   ButtonsModals,
   HeaderAction,
   HeaderDate,
   HeaderDescription,
   HeaderTable,
   HeaderTransaction,
   HeaderValue,
   TableContainer,
   TableTop,
} from "./TableTransactions.style";
import {
   TableExpenseIcon,
   TableIncomeIcon,
  
} from "../../atoms";
import ListTransactionInfo from "../../molecules/ListTransactionInfo/ListTransactionInfo";

export default function TableTransactions({ openModal, setModalInfo }) {
   let transactions = [
      {
         title: "Anos",
         description: "Anos do Henrique Peralta",
         date: "02/07/2002",
         value: 37.78,
         type: false,
     
      },
      {
         title: "Café",
         description: "café starbucks com açúcar",
         date: "17/11/1997",
         value: 23.45,
         type: false,
        
      },

      {
         title: "Market",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
         date: "17/11/1997",
         value: 23.45,
         type: true,
         
      },
      {
         title: "Market",
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
         date: "17/11/1997",
         value: 23.45,
         type: true,
         
      },
     
   ];
   return (
      <TableContainer>
         <TableTop>
            <h2>Transactions</h2>
            <ButtonsModals>
               <Buttons
                  onClick={() => {
                     setModalInfo((prev) => ({
                        ...prev,
                        modalTitle: "Incomes",
                        color: "#41D158",
                     }));

                     openModal(true);
                  }}
               >
                  <TableIncomeIcon />
                  <ButtonModaltitleincome> Incomes</ButtonModaltitleincome>
               </Buttons>

               <Buttons
                  onClick={() => {
                     setModalInfo((prev) => ({
                        ...prev,
                        modalTitle: "Expenses",
                        color: "#FB6C6C",
                     }));

                     openModal(true);
                  }}
               >
                  <TableExpenseIcon />
                  <ButtonModaltitleExpense>Expenses</ButtonModaltitleExpense>
               </Buttons>
            </ButtonsModals>
         </TableTop>
         <HeaderTable>
            <HeaderTransaction>Transaction</HeaderTransaction>
            <HeaderDate>Date</HeaderDate>
            <HeaderDescription>Description</HeaderDescription>
            <HeaderValue>Value</HeaderValue>
            <HeaderAction>Action</HeaderAction>
         </HeaderTable>
         {transactions.map((transaction, index) => (
            <ListTransactionInfo
               key={"item" + index}
               transaction={transaction}
               setModalInfo={setModalInfo}
               openModal={openModal}
      

            ></ListTransactionInfo>
         ))}
      </TableContainer>
   );
}
