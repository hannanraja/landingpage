import { useEffect, useState } from "react";
import logo from "./images/logo.png";

export const LastSection = () => {
  const [tabCheck, setTabCheck] = useState(true);
  const [isMobile, setIsMobile] = useState(false)
 
  const checkDevice = () =>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        setIsMobile(true)
      }else{
        // false for not mobile device
      setIsMobile(false)
      }
  }
  useEffect(()=>{
    checkDevice()
  },[])
 
  return (
    <div>

      <section className="climb_section w-auto" style={isMobile? {height:'70vh'}: {height:'auto'}}>
        <div className={`container w-75 gap-5 ${!isMobile? 'd-flex flex-sm-column flex-md-row' : ''}`}
        
        >
          <div className="d-flex">
            <div>
              <p>
                <span
                  style={{
                    fontSize: "110px",
                    color: " #b0b4be",
                    fontWeight: "700",
                  }}
                >
                  02
                </span>
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-start"
              style={{ fontSize: "60px", margin: "0px", fontWeight: "900" }}
            >
              <span id="team" className="text_section">
                CLIMB
              </span>
              <span className="dot_section">.</span>
            </div>
          </div>
          <div className="mt-5 pl-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            voluptas, fugit illo ea totam atque quia explicabo sequi nostrum.
            Odit cum nobis perspiciatis beatae facilis, ducimus reprehenderit
            eveniet blanditiis dolorem modi! Officiis accusamus ducimus in
            pariatur
          </div>
        </div>
      </section>
      <ul className="nav nav-pills" style={{backgroundColor:"#404B6A"}}>
              <li className="nav-item" style={{marginLeft:'4vw'}} onClick={()=>{
                setTabCheck(false)
           
              }}>
                <span className={`nav-link ${tabCheck? "" : "active"}`} aria-current="page" style={{color:'#AFB4BE', cursor:'pointer'}}>
                  Mountain 1
                </span>
              </li>
              <li className="nav-item" onClick={()=>{
                setTabCheck(true)
              }}>
                <span className={`nav-link ${tabCheck? "active" : ""}`} style={{color:'#AFB4BE', cursor:'pointer'}}>Mountain 2</span>
              </li>
            </ul>

      <div className="dark-background marginTop">
        <section className="schedule_section position-static p-5 w-auto" style={{height:'90vh'}} >
          <div className="tab-content d-sm-block" id="nav-tabContent">
           {
            tabCheck ? 
            <div className={`container mt-5 ${isMobile? 'w-100' :'w-75'}`}>
            <div className={`ms-3 table_styling p-4 ${isMobile? "w-100" : "w-50" }`}>
              <h4 className="mb-4">SCHEDULE NO. 2</h4>
              <table className="m-0 table table-borderless">
              <tbody>
                <tr>
                  <td>25 Nov 2016</td>
                  <td>Vestibulum</td>
                </tr>
                <tr>
                  <td>28 Nov 2016</td>
                  <td>Vestibulum</td>
                </tr>
                <tr>
                </tr>
                <tr>
                  <td>18 Dec 2016</td>
                  <td>Vestibulum</td>
                </tr>
                <tr>
                </tr>
                <tr>
                  <td>7 Jan 2016</td>
                  <td>Vestibulum</td>
                </tr>
              </tbody>
              </table>
            </div>
          </div> :
         
          <div className={`container mt-5 ${isMobile? 'w-100' :'w-75'}`}>
            <div className={`ms-3 table_styling p-4 ${isMobile? "w-100" : "w-50" }`}>
              <h4 className="mb-4">SCHEDULE NO. 1</h4>
              <table className="m-0 table table-borderless">
                <tbody>
                  <tr>
                    <td>25 Nov 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td>28 Nov 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                  
                  </tr>
                  <tr>
                    <td>18 Dec 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                   
                  </tr>
                  <tr>
                    <td>7 Jan 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
           }
          </div>
        </section>

        <footer className="w-auto footer_section" >
          <div className="container pt-2 d-flex justify-content-between">
            <div>
              <img width="30px" height="30px" src={logo} />
            </div>
            <div style={{ color: "#5e729a" }} className="d-flex align-items-center">
              <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
