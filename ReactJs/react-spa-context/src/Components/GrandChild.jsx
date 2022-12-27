import React from 'react'
import { ContextConsumer } from './Context'

export const GrandChild = () => {
  return (
    
   <ContextConsumer>
    {
        (username) => {
            return <div>hello {username}</div>
            
        }
    }
   </ContextConsumer>
    
  )
}
