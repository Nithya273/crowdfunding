import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react'
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App'
import './index.css'
import { StateContextProvider} from './context'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ThirdwebProvider 
    activeChain={ Sepolia } 
    desiredChainId={ChainId.Sepolia}
    clientId='2b78c278355d61232d02b798e67e95cf'
    >
<Router>
   <StateContextProvider>
   <App/>
   </StateContextProvider>
    
    
</Router>
    </ThirdwebProvider>
)