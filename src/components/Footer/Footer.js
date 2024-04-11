import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const arr = [ "Cool stuff","Random feature","Team feature","Stuff for developers","Another one","Last time" ];

    const arr2 = [ "Resource","Resource name","Another resource","Final resource" ];
  
    const arr3 = [  "Team", "Locations","Privacy","Terms" ];
 
    return (
      <div>
          
          <footer className="pt-4 my-md-5 pt-md-5 border-top">
              <div className="row">

                <div className="col-12 col-md">
                  <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
                  <small className="d-block mb-3 text-muted">© 2017-2018</small>
                </div>

                <div className="col-6 col-md">
                  <h5>Features</h5>
                  <ul className="list-unstyled text-small">
                    {
                      arr.map((item, index) => {
                        return <li key={index}><a className="text-muted" href="#">{item}</a></li>
                      })
                    }                   
                  </ul>
                </div>

                <div className="col-6 col-md">
                  <h5>Resources</h5>
                  <ul className="list-unstyled text-small">
                    {arr2.map((item, index) => {
                      return <li key={index}><a className="text-muted" href="#">{item}</a></li>
                     })}
                  </ul>
                </div>

                <div className="col-6 col-md">
                  <h5>About</h5>
                  <ul className="list-unstyled text-small">
                    {
                      arr3.map((item, index) => {
                        return <li key={index}><a className="text-muted" href="#">{item}</a></li>
                      })
                    }
                  </ul>
                </div>

              </div>
          </footer>
            
      </div>
    )
  }
}
