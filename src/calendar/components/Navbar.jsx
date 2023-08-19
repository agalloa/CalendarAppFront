

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            Angelica
        </span>
        <button className="btn btn-outline-danger">
            <span>Cerrar Sesión</span>
            &nbsp;&nbsp;
            <i className="fas fa-sign-out-alt"></i>
        </button>
    </div>
  )
}
