import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";


import { Player } from "@lottiefiles/react-lottie-player";

import loader from '../assets/pacman-loader.json';
import { Box } from "@chakra-ui/react";

export const AppRouter = () => {


  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])


  if (status === 'checking') {
    return <div className="mt-5">
      <Box position="relative" h="80vh" display="flex" justifyContent="center" alignItems="center">
        <Player autoplay loop src={loader} style={{ height: 'auto', width: '100%' }} />
      </Box>
    </div>
  }

  // const authStatus = 'not-authenticated';

  return (
    <Routes>
      {
        (status === 'not-authenticated') ?
          (
            <>

              <Route path="/auth/*" element={<LoginPage />} />)
              <Route path="/*" element={<Navigate to="/auth/login" />} />
            </>
          ) : (
            <>

              <Route path="/" element={<CalendarPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )
      }
    </Routes>
  )
}
