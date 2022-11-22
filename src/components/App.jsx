import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import { refreshUser } from "redux/auth/operations";
import { PublicRoute } from "./PublicRoute";
import { PrivatRoute } from "./PrivateRoute";
import { getIsRefreshing } from "redux/auth/selectors";
import { FallingLines } from "react-loader-spinner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home= lazy(() => import('Pages/Home/Home'));
const ContactDetails= lazy(() => import('Pages/ContactDetails/ContactDetails'));
const ContactsPage= lazy(() => import('Pages/ContactsPage/ContactsPage'));
const RegistrationPage= lazy(() => import('Pages/RegistrationPage/RegistrationPage'));
const LogInPage= lazy(() => import('Pages/LoginPage/LogInPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]); 


    return <div
    style={{
      height: '100vh',
      fontSize: 20,
      color: '#010101',
      textAlign: 'center'
    }}
  >
    
    {isRefreshing ? (<FallingLines 
      color="#0824AF"
      width="100"
      visible={true}
      ariaLabel='falling-lines-loading'
  />) : 
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/login" element={<PublicRoute  redirectTo="/contacts" component={<LogInPage />} />}/>
          <Route path="/register" element={<PublicRoute  redirectTo="/contacts" component={<RegistrationPage />} />}/>
          <Route path="/contacts" element={<PrivatRoute  redirectTo="/login" component={<ContactsPage />} />}>
            <Route path=":id" element={<PrivatRoute  redirectTo="/login" component={<ContactDetails />} />} />
          </Route>
          <Route path="*" element={<Home />} />  
        </Route>
      
    </Routes>}
    <ToastContainer />
    </div>
      
  
  }
