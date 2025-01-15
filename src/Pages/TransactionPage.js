import React, { useState } from "react";
import "../App.style.js";

import { TableTransactions } from "../organisms/index.js";
import Modal from "../molecules/Modal/Modal.jsx";

function TransactionPage() {
   const [modalShow, setModalShow] = useState(false);
   const [modalInfo, setModalInfo] = useState({
      modalTitle: "",
      color: "",
   });
   return (
      <main>
         <TableTransactions
            openModal={setModalShow}
            setModalInfo={setModalInfo}
         ></TableTransactions>
         <Modal
            setModalShow={setModalShow}
            isOpen={modalShow}
            color={modalInfo.color}
            title={modalInfo.modalTitle}
            date={modalInfo.date}
         ></Modal>
      </main>
   );
}

export default TransactionPage;
