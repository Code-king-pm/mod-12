
import code from '../../assets/codeKing.png'
// className="Div_flex"

import '../another.css'   





export default function Blog() {
  return (
    <div>
      <h1>Blog Page<span> 🍌</span></h1>
<div className="Div_flex">
      {/* Card component */}
      <div className="card"  style={{ width: '30rem' }}>

        <img src={code} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">code-king</h5>
          <p className="card-text">
            this is img of repo
          </p>
          <a href="https://github.com/Code-king-pm" className="btn btn-primary">
            Go to my repo
          </a>
        </div>
      </div>

      <div className="card" style={{ width: '30rem' }}>
        <img src={code} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">code-king</h5>
          <p className="card-text">
            this is img of repo
          </p>
          <a href="https://github.com/Code-king-pm" className="btn btn-primary">
            Go to my repo
          </a>
        </div>
      </div>


      <div className="card" style={{ width: '30rem' }}>

        <img src={code} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">code-king</h5>
          <p className="card-text">
            this is img of repo
          </p>
          <a href="https://github.com/Code-king-pm" className="btn btn-primary">
            Go to my repo
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
