import Aside from "./organisms/aside/Aside.jsx";
import { Footer } from "./organisms/footer/Footer.jsx";
import { MyAddUserComponent } from "./molecules/ModalLogin/ModalLogin.jsx";
import React from "react";
import { ButtonHideContext,buttonHideInicialState } from "./store/buttonhide.js";
import { Header } from "./organisms/index.js";
import "./App.style.js";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import TransactionPage from "./Pages/TransactionPage.js";
import { useState } from "react";
import { Appcontainer } from "./App.style.js";
import { UserIdContext, userIdInicialState } from "./store/userId.js";



function App() {
   const [buttonHide,setButtonHide]=useState(buttonHideInicialState)
   const [userId,setUserId]=useState(userIdInicialState)
   const addUserModal = MyAddUserComponent();



   return (
      
      
      <div>
          {addUserModal.renderAddUserModal()}
         <UserIdContext.Provider value={[userId,setUserId]}>
         <ButtonHideContext.Provider value={[buttonHide,setButtonHide]}>
         <Aside />
         <Appcontainer>
         <Header />

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/transactions" element={<TransactionPage  />} />     
         </Routes>
        
         <Footer />
         </Appcontainer>
         </ButtonHideContext.Provider>
         </UserIdContext.Provider>
         
      </div>
      
   );
}

export default App;
