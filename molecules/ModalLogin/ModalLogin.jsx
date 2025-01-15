import { useState, useEffect } from "react";
import {
   ModalBackground,
   ModalContent,
   NameModal,
   ModalButton,
   StyleModalButton,
} from "./ModalLogin.style";


import { useDispatch } from "react-redux";
import { getDashboardInfo } from "../../store/dashboard-slice";


const Modal = ({ isOpen, children, title, color, onClose }) => {
   return (
      <>
         {isOpen && (
            <ModalBackground>
               <ModalContent
                  style={{ color: color }}
                  onClick={(e) => e.stopPropagation()}
               >
                  <NameModal style={{ color: color }}>{title}</NameModal>
                  {children}
                  <ModalButton onClick={onClose}>Fechar</ModalButton>
               </ModalContent>
            </ModalBackground>
         )}
      </>
   );
};

export { Modal };

export function MyAddUserComponent() {
   const [modalIsOpen, setModalIsOpen] = useState(!localStorage.getItem("userId"));
   const [modalTitle, setModalTitle] = useState("");
   const [modalColor, setModalColor] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const dispatch = useDispatch();

   useEffect(() => {
      const userId = localStorage.getItem("userId");
      if (userId) {
         setModalIsOpen(false);
      } else {
         setModalTitle("LOGIN");
         setModalColor("green");
      }
   }, []);

   const handleCloseAddUserModal = () => {
      setModalIsOpen(false);
      localStorage.removeItem("userId");
   };

   function handleFormSubmit(e) {
      e.preventDefault();
      const lastNameSeparator=lastName &&  `${"-"+ lastName.trim()}`
      const userId = `${firstName.trim()}${lastNameSeparator}`;
      console.log("firstName:", firstName);
      console.log("lastName:", lastName);
      console.log("userId:", userId);
      localStorage.setItem("userId", userId);
       dispatch(getDashboardInfo(userId));
      setModalIsOpen(false)

    //  dispatch(addUser(firstName,lastName,userId))

    //   addUser(firstName, lastName, userId)
    //      .then((response) => {
    //         console.log("User added successfully:", response);

    //       

    //         setModalIsOpen(false);
    //      })
    //      .catch((error) => {
    //         console.error("Error adding user:", error);
    //      });
   }

   function renderAddUserModal() {
      return (
         <Modal
            isOpen={modalIsOpen}
            onClose={handleCloseAddUserModal}
            title={modalTitle}
            color={modalColor}
         >
            <form onSubmit={handleFormSubmit}>
               <label htmlFor="fname">First Name</label>
               <br />
               <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
               />
               <br />
               <label htmlFor="lname">Last Name</label>
               <br />
               <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
               />
               <br />
               <div>
                  <StyleModalButton color="save" type="submit">
                     Login
                  </StyleModalButton>
               </div>
            </form>
         </Modal>
      );
   }

   return {
      renderAddUserModal,
   };
}
