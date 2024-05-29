import { ConfigProvider} from 'antd';


import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes';

import './App.css'


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF69B4'
        }

      }}
    >

     <BrowserRouter>

     <AppRoutes>
     </AppRoutes>

   
     </BrowserRouter> 

    </ConfigProvider>
  )
}
export default App
