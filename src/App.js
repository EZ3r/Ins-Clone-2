import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./Homepage";
import Authenticate from "./authenticate/Authenticate";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, [dispatch]);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <div className="bg-black text-white min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="border-8 border-gray-800 border-t-8 border-t-blue-500 rounded-full w-20 h-20 animate-spin"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authenticate />}</>
      )}
    </div>
  );
}

export default App;

