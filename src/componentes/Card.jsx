import React from "react";
 
 
const Card = (props) => {
  return         <div class="classCard">
  <h1>{props.emoticons.nome}</h1>
  <h1>{props.emoticons.sentimento}</h1>
  <img src={props.emoticons.url} width={200} height={200} />

</div>
;
};
 
export default Card;