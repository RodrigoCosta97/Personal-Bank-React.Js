
import {
    Container,
    ImgDiv,
    TextContainer,
    TextTitleContainer,
    ValuesContainer,HideMoney2
 } from "./LastTransactionItem.style";
 import { useContext } from "react";
 import { ButtonHideContext } from "../../store/buttonhide";

function LastTransactionItem({transaction}) {
let icon;
let value;
const [buttonHide, ] = useContext(ButtonHideContext);
if (buttonHide) {
   value = 

               <p>€ {transaction.value}</p>
   ;
} else {
   value = <HideMoney2 />;
}


if (transaction.type){
   icon=<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><path fill="#FB6C6C" d="M20 40c11.04 0 20-8.96 20-20S31.04 0 20 0 0 8.96 0 20s8.96 20 20 20Zm-7.06-20.06c.3-.3.68-.44 1.06-.44s.76.14 1.06.44l3.44 3.44V13c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5v10.38l3.44-3.44c.58-.58 1.54-.58 2.12 0 .58.58.58 1.54 0 2.12l-6 6c-.58.58-1.54.58-2.12 0l-6-6c-.58-.58-.58-1.54 0-2.12Z"/></svg> 
}
else
{
   icon=<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><path fill="#41D158" d="M20 0C8.96 0 0 8.96 0 20s8.96 20 20 20 20-8.96 20-20S31.04 0 20 0Zm7.06 20.06c-.3.3-.68.44-1.06.44s-.76-.14-1.06-.44l-3.44-3.44V27c0 .82-.68 1.5-1.5 1.5s-1.5-.68-1.5-1.5V16.62l-3.44 3.44c-.58.58-1.54.58-2.12 0-.58-.58-.58-1.54 0-2.12l6-6c.58-.58 1.54-.58 2.12 0l6 6c.58.58.58 1.54 0 2.12Z"/></svg> 
}
    return (
      <Container>
         <ImgDiv>
            {icon}

            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="48"
               height="48"
               fill="none"
            >
               <rect width="48" height="48" fill="#D9D9D9" rx="5" />
               <path
                  fill="#292D32"
                  d="m39.5 31.44-4.827-11.289c-.88-2.066-2.19-3.238-3.686-3.315-1.48-.077-2.915.956-4.01 2.93l-2.93 5.259c-.617 1.11-1.496 1.774-2.452 1.85-.972.093-1.944-.416-2.73-1.418l-.34-.432c-1.094-1.373-2.452-2.036-3.84-1.897s-2.575 1.095-3.362 2.653L8.655 31.1c-.956 1.928-.863 4.164.263 5.984A6.119 6.119 0 0 0 14.146 40h19.678a6.15 6.15 0 0 0 5.136-2.76 6.037 6.037 0 0 0 .54-5.8ZM16.291 18.425a5.213 5.213 0 1 0 0-10.425 5.213 5.213 0 0 0 0 10.425Z"
               />
            </svg>
         </ImgDiv>
         <TextContainer>
            <TextTitleContainer>
            <p>{transaction.title } 
     </p>
     </TextTitleContainer>
            <p>{transaction.description}</p>
         </TextContainer>
         <ValuesContainer>
            <p>{transaction.date}</p>
            <div>
               <p> {value}</p>
              
            </div>
         </ValuesContainer>
      </Container>
   );
}

export default LastTransactionItem;





