import { Cards } from "../organisms/cards/Cards.jsx";
import "../App.style.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartContainer } from "../organisms/chart/Chart.jsx";
import LastTransaction from "../organisms/LastTransaction/LastTransaction.jsx";
import { getDashboardInfo } from "../store/dashboard-slice.js";

function HomePage() {
   const dispatch = useDispatch();
   const dashboardInfo = useSelector((state) => state.dashboard.dashboardInfo);
   const { income, expense, balance, lastTransac, timeFrameTransaction } =
      dashboardInfo;
   useEffect(() => {
      const userId = localStorage.getItem("userId");
      if (userId) {
         dispatch(getDashboardInfo(userId));
      }
   });

   console.log(dashboardInfo);

   return (
      <main>
         <h1>Hello, Rodrigo</h1>
         <Cards income={income} expense={expense} balance={balance} />
         <h2>Weekly Balance</h2>
         <ChartContainer timeFrameTransaction={timeFrameTransaction} />
         <h2>Last transactions</h2>
         <LastTransaction transactions={lastTransac} />
      </main>
   );
}

export default HomePage;
