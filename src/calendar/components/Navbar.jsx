import { Image } from "@chakra-ui/react";
import { useAuthStore } from "../../hooks"
import logo from '../../assets/logo-plannly.png';

export const Navbar = () => {

  const { startLogout, user } = useAuthStore();
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand" >
        <div className="row">
          <div className="col-md-2"> <Image src={logo}  /></div>
          <div className="col-md-10">{user.name}</div>
        </div>
      </span>
      <button className="btn btn-outline-danger" onClick={startLogout}>
        <span>Cerrar Sesión</span>
        &nbsp;&nbsp;
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  )
}
