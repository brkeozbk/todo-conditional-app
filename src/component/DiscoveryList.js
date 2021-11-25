import React from 'react'
import {Title,  CompletedDiscovery} from "../styles/styles";

export  function DiscoveryList({todoList,disabledCheckDelivery,  updateCheckDiscovery, disabledCheckDiscovery}) {
    return (
        <div>
    <Title>Discovery<CompletedDiscovery disabledCheckDelivery={disabledCheckDelivery}>✔️</CompletedDiscovery></Title>
      {todoList.discovery.steps.map((item) => {
        return (
          <div >
            <input type="checkbox" defaultChecked={item.isDone} disabled={disabledCheckDiscovery}
             onClick={(event)=> updateCheckDiscovery({
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
    )
}
