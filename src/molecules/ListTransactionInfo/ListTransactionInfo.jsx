import React from "react";
import {
   InfoContainer,
   InfoContainerAction,
   InfoContainerDate,
   InfoContainerDescription,
   InfoContainerTransaction,
   InfoContainerValue,
} from "./ListTransactionInfo.style";
import { ActionImage, ActionDelete, ActionEdit } from "../../atoms";
import ModalDelete from "../ModalDelete/ModalDelete";
import { useState } from "react";

function ListTransactionInfo({ transaction, setModalInfo, openModal }) {
   const [openModalDelete, setOpenModalDelete] = useState(false);
   const { type, date, title, description, value } = transaction;
   let icon;
   if (type) {
      icon = (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
         >
            <path
               fill="#41D158"
               d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm4.236 12.036a.89.89 0 0 1-.636.264.89.89 0 0 1-.636-.264L12.9 9.972V16.2c0 .492-.408.9-.9.9a.907.907 0 0 1-.9-.9V9.972l-2.064 2.064a.905.905 0 0 1-1.272 0 .905.905 0 0 1 0-1.272l3.6-3.6a.905.905 0 0 1 1.272 0l3.6 3.6a.905.905 0 0 1 0 1.272Z"
            />
         </svg>
      );
   } else {
      icon = (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
         >
            <path
               fill="#FB6C6C"
               d="M12 24c6.624 0 12-5.376 12-12S18.624 0 12 0 0 5.376 0 12s5.376 12 12 12ZM7.764 11.964A.89.89 0 0 1 8.4 11.7a.89.89 0 0 1 .636.264l2.064 2.064V7.8c0-.492.408-.9.9-.9.492 0 .9.408.9.9v6.228l2.064-2.064a.905.905 0 0 1 1.272 0 .905.905 0 0 1 0 1.272l-3.6 3.6a.905.905 0 0 1-1.272 0l-3.6-3.6a.905.905 0 0 1 0-1.272Z"
            />
         </svg>
      );
   }
   return (
      <>
      <InfoContainer>
         <InfoContainerTransaction>{icon}</InfoContainerTransaction>
         <InfoContainerDate>{date}</InfoContainerDate>
         <InfoContainerDescription>
            {title}-{description}
         </InfoContainerDescription>
         <InfoContainerValue>€{value}</InfoContainerValue>
         <InfoContainerAction>
            <ActionImage></ActionImage>
            <button
               onClick={() => {
                  setModalInfo((prev) => ({
                     ...prev,
                     modalTitle: "Edit Transaction",
                     color: "#7600D2",
                  }));

                  openModal(true);
               }}
            >
               <ActionEdit></ActionEdit>
            </button>
            <button
            onClick={() => {
                setOpenModalDelete(true);
            }}>

            <ActionDelete />
            </button>
         </InfoContainerAction>
      </InfoContainer>
      <ModalDelete
      isOpen={openModalDelete}
      setModalShow={setOpenModalDelete}
       />
      </>
   );
}

export default ListTransactionInfo;
