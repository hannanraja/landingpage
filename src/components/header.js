import logo from "./logo.png";
export function Header() {
   

    window.onscroll=(()=>{
        if(window.scrollY >100){
document.querySelector("#header1").style.visibility ="visible"
        }
        else{
            document.querySelector("#header1").style.visibility ="hidden"
        }
    })
  return (
    <>
      <section className="hero_section w-auto">
        <div className="container w-75 d-flex justify-content-between align-content-center" id="headers">
          <div>
            <img className="hero_logo" src={logo} alt="logo1" />
          </div>
          <div className="d-flex text-white align-items-center">
            <p className="m-2">
              <a href="#history">
                <span className="marginEnd text-white text-decoration-underline">
                  01. HISTORY
                </span>
              </a>
            </p>
            <p className="m-2">
              <a href="#team">
                <span className="text-white text-decoration-underline">
                  02. TEAM
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>
      <section id="header1" className="bg-white d-flex justify-content-between p-3" style={{visibility:"hidden", position:'fixed', top:'0', minWidth:'100vw'}}>
    <div>
      <img style={{marginLeft:'5vw'}} src={logo} width="50px" height='50px' alt="logo1" />
    </div>
    <div className="d-flex text-primary align-items-center" >
      <p className="m-2">
        <a href="#history"><span style={{color: "#414f6b"}} className="marginEnd ">01. HISTORY</span></a>
      </p>
      <p className="m-2">
        <a href="#team" style={{marginRight:'14vw'}}><span style={{color: "#414f6b"}} className="text-decoration-underline">02. TEAM</span></a>
      </p>
    </div>
  </section>
      <div
        className="container w-75 d-flex justify-content-between align-content-center"
        style={{ backgroundColor: "white" }}
      >
      </div>
    </>
  );
}
