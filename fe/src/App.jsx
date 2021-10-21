import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import studentsRoutes from '@Students/routes'

function App() {
   return <div> 
    <BrowserRouter>
    {/* Students */}
    { studentsRoutes.map(({ path,component, exact },i)=>(
          <Route key={i} path={path} component={ component } exact={exact}/>
     )) } 
    </BrowserRouter>  
</div>
}

export default App
