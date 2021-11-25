import React from 'react'
import {Title, Completed} from "../styles/styles";

export function FoundationList({todoList, updateCheckFoundation, disabledCheckDiscovery}) {
    return (
        <div>
    <Title>Foundation<Completed disabledCheckDiscovery={disabledCheckDiscovery}>✔️</Completed></Title>
      {todoList.foundation.steps.map((item) => {
        return (
          <div>
            <input type="checkbox" defaultChecked={item.isDone} disabled={item.disabled}
             onClick={(event)=> updateCheckFoundation({
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
