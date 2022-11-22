import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { LogInPage } from "Pages/LoginPage/LogInPage"; 
import { RegistrationPage } from "Pages/RegistrationPage/RegistrationPage";
import { ContactsPage } from "Pages/ContactsPage/ContactsPage";
import { useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/contacts/selectors";
import { Home } from "Pages/Home/Home";
import { ContactDetails } from "Pages/ContactDetails/ContactDetails";

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/contacts" element={<ContactsPage />} >
              <Route path=":id" element={<ContactDetails />} />
            </Route>
          </Route>
        
      </Routes>
        
      
      </div>
    );
  }
