//  import { Carousel } from 'react-bootstrap'

const MyFooter = ()=> (


    <div class="container" id="footer">

    <div className="row justify-content-center">

      <div class="col-8" id="footer-icons">
        <i class="footer-icons text-secondary mx-2 bi bi-facebook"></i> 
        <i class="footer-icons text-secondary mx-2 bi bi-instagram"></i>
        <i class="footer-icons text-secondary mx-2 bi bi-twitter"></i>
        <i class="footer-icons text-secondary mx-2 bi bi-youtube"></i>
      </div>


      <div class="row col-10 px-2 ">

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          
          <ul class="list-unstyed">
           
            <li>Info</li>
            <li>Book Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>

        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <ul className="list-unstyed">
            <li>Audio</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
       <ul className="list-unstyed">
            <li>Help Center</li>
            <li>Service</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>


        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <ul className="list-unstyed">

            <li>Gifts</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        



      </div>

    </div>
    <p className="copyright text-secondary text-center pt-2">© 2021 StriveBooks</p>
   
  </div>
)




 export default MyFooter;