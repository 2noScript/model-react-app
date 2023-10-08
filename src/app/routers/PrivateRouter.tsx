import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { instanceAxios } from "../../utils/request";
import { URL } from "../../constants";
// import { selectIsLogin, selectToken } from 'store/authSlice';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  // TODO
  // const isLogin = useAppSelector(selectIsLogin);
  // const token = useAppSelector(selectToken);
  const isLogin = true;
  const token = true;

  useEffect(() => {
    if (token) {
      instanceAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, [token]);

  if (isLogin) {
    return children;
  }

  return <Navigate to={URL.Login} replace />;
}
