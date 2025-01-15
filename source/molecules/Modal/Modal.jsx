import { useState } from "react";
import {
   ModalBackground,
   ModalContent,
   ModalForm,
   ModalFormAttachment,
   Form,
   NameModal,
   ModalButton,
   StyleModalButton,
   Closediv
} from "./Modal.style";

const Modal = ({ isOpen, title, color, setModalShow }) => {
   return (
      <>
         {isOpen && (
            <ModalBackground>
               <ModalContent
                  style={{ color: color }} // Add this style object
                  onClick={(e) => e.stopPropagation()}
               >
                  <Closediv>
                  <button onClick={() => setModalShow(false)}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="38"
                        fill="none"
                     >
                        <path
                           stroke="#9D9D9D"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="m13.906 24.094 10.188-10.188M24.094 24.094 13.906 13.906M13.6 37h10.8c9 0 12.6-3.6 12.6-12.6V13.6C37 4.6 33.4 1 24.4 1H13.6C4.6 1 1 4.6 1 13.6v10.8C1 33.4 4.6 37 13.6 37Z"
                        />
                     </svg>
                  </button>
                  </Closediv>
                  
                  <NameModal style={{ color: color }}>{title}</NameModal>
                  <Form>
                     <ModalForm>
                        <label htmlFor="value">Value</label>
                        <input type="number" name="value" id="value" />
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" />
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                        <label htmlFor="description">Description</label>
                        <input
                           type="text"
                           name="description"
                           id="description"
                        />
                     </ModalForm>
                     <ModalFormAttachment>
                        <label htmlFor="attachment">Attachment</label>
                        <input type="file" name="attachment" id="attachment" />
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="86"
                           height="86"
                           fill="none"
                        >
                           <path
                              stroke={color}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4.587"
                              d="M31 63V39l-8 8M31 39l8 8"
                           />
                           <path
                              stroke={color}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4.587"
                              d="M83 35v20c0 20-8 28-28 28H31C11 83 3 75 3 55V31C3 11 11 3 31 3h20"
                           />
                           <path
                              stroke={color}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4.587"
                              d="M83 35H67c-12 0-16-4-16-16V3l32 32Z"
                           />
                        </svg>
                     </ModalFormAttachment>
                  </Form>
                  <ModalButton>
                     <StyleModalButton color="cancel">Cancel</StyleModalButton>
                     <StyleModalButton color="save">Save</StyleModalButton>
                  </ModalButton>
               </ModalContent>
            </ModalBackground>
         )}
      </>
   );
};

export default Modal;
