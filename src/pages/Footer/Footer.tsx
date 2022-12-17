import './Footer.scss' ;
import besnik from './besnik.svg' ;
import facebook from './Facebook icon.svg' ;
import twitter from './twitter icon.svg';
import linkedin from './lindedin icon.svg';



export const Footer=()=>{
  return(
      <footer className="foot">
      <div className="main-foot">
          <div className="main-foot-1">
              <div className="list1">
                  <p className="list-h">Product</p>
                  <div className="for-flex">  
                      <p className="list-t">Listing</p>
                      <p className="list-t">Property</p>
                      <p className="list-t">Agents</p>
                      <p className="list-t">Blog</p>
                  </div>  
              </div>
              <div className="list2">
                  <p className="list-h">Resources</p>
                  <div className="for-flex">
                      <p className="list-t">Our Homes</p>
                      <p className="list-t">Member Stories</p>
                      <p className="list-t">Videos</p>
                      <p className="list-t">Free trial</p>
                  </div>
              </div>
              <div className="list3">
                  <p className="list-h">Company</p>
                  <div className="for-flex">
                      <p className="list-t">Partnership</p>
                      <p className="list-t">Terms of use</p>
                      <p className="list-t">Privacy</p>
                      <p className="list-t">Sitemap</p>
                  </div>
              </div>  
              <div className="list4">
                  <p className="list-h">Get in touch</p>
                  <p className="list-t desktop-only">You’ll find your next home, in any style you prefer.</p>
                  <div className="three-icons">
                      <img className="ikn" src={facebook} alt=""/>
                      <img className="ikn" src={twitter} alt=""/>
                      <img className="ikn" src={linkedin} alt=""/>
                  </div>
              </div>
          </div>
          <div className="main-foot-2">
              <img className="besnik" src={besnik} alt=""/>
              <p className="besnik-text">Copyright 2020.com, All rights reserved.</p>
          </div>
      </div>
  </footer>
  ) ;
} ;