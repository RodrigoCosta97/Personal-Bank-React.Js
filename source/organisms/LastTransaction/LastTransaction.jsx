import LastTransactionItem from "../../molecules/LastTransactionItem/LastTransactionItem";

function LastTransaction({transactions}) {
   // let transactions = [
   //    {
   //       title: "Anos",
   //       description: "Anos do Henrique Peralta",
   //       date: "02/07/2002",
   //       value: 37.78,
   //       type: false,
   //    },
   //    {
   //       title: "Prenda para o Mario",
   //       description: "novo telemovel",
   //       date: "17/11/1997",
   //       value: 200.34,
   //       type: false,
   //    },

   //    {
   //       title: "Benfica Campeão",
   //       description: "Ser campeão em alvalade",
   //       date: "21/05/2023",
   //       value: 38.23,
   //       type: true,
   //    },
     
      
   // ];

   return (
      <ul>
         {transactions && transactions.map((transaction,index) => (
            <LastTransactionItem key={"lastTransactionItem"+index} transaction={transaction} />
              
            
         ))}
      </ul>
   );
}

export default LastTransaction;
