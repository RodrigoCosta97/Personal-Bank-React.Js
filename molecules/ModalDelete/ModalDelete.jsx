import {
    ModalBackground,
    ModalContent,
    NameModal,
    ModalButton,
    StyleModalButton,
    Closediv,
    DeleteContent
 } from "./ModalDelete.style";
 
 const ModalDelete = ({ isOpen,setModalShow}) => {
    return (
       <>
          {isOpen && (
             <ModalBackground>
                <ModalContent
                    // Add this style object
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
                   
                   <NameModal >Delete Transaction</NameModal>
                   <DeleteContent>
                  Are you sure you want to delete this transaction?
                  </DeleteContent>
                     
                  
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
 
 export default ModalDelete;
 