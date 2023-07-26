import { Link } from "react-router-dom";
import wave from "../styles/img/wave.png";

const TypeUser = () => {
  return (
    <div>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="my-auto mx-auto">
          <div className="d-flex gap-2">
            <div
              className="rounded-circle bg-success d-flex justify-content-center align-items-center"
              style={{ width: "30px", height: "30px" }}
            >
              <Link to="/">
                <i
                  className="bx bx-left-arrow-alt"
                  style={{ color: "white" }}
                ></i>
              </Link>
            </div>
            <p>Regresar al incio</p>
          </div>
          <h5 className="mt-4 fw-bold text-success">
            ¿Qué tipo de usuario deseas ser?
          </h5>
          <div className="d-flex gap-4 justify-content-center mt-4">
            <Link to={"/SignUp"}>
              <div className="card text-bg-success shadow-lg">
                <div className="card-body">
                  <i className="bx bx-user"></i>
                </div>
              </div>
              <h6>Génerico</h6>
            </Link>

            <Link to={"/SignUpMaster"}>
              <div className="card text-bg-success shadow-lg">
                <div className="card-body">
                  <i className="bx bxs-star"></i>
                </div>
              </div>
              <h6>Máster</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeUser;
