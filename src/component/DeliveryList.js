import React from 'react'
import {Title,} from "../styles/styles";

export  function DeliveryList({todoList, 
  updateCheckDelivery,
  disabledCheckDelivery,
}) {
    return (
<div>
    <div> 
  
      

      <Title>Delivery</Title>
      {todoList.delivery.steps.map((item) => {
        return (
          <div>
            <input type="checkbox" defaultChecked={item.isDone} disabled={disabledCheckDelivery}
             onClick={(event)=> updateCheckDelivery({
              isDone:event.target.checked, 
              key:item.key,
              disabled:item.disabled
              })
             }
            />
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  
        </div>
    )
}
