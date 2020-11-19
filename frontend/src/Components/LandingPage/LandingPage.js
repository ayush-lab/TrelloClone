import React, {Component} from 'react';
import {Link, Redirect } from 'react-router-dom';
import styles from './CSS/LandingPage.module.css';
import  './CSS/global.css';
import Content_Picture from '../../assets/Images/manwithlap.svg';
import TeamImage from '../../assets/Images/team.svg';
import ManageImage from '../../assets/Images/manage.svg';
import PlanningImage from '../../assets/Images/planning.svg';
import Fast from '../../assets/Images/fast.svg';
import Planner from '../../assets/Images/Planner.svg';
import Connect from '../../assets/Images/ConnectingTeam.svg';
import LandingContent from './LandingContent';
import Navbar from '../Navigation/Navbar'


class LandingPage extends Component{

  logout = ()=> {
    localStorage.removeItem('access');
  }

    render(){

       let AuthButton = null;

       if(localStorage.getItem('access') === null){
         AuthButton = (
          <div className={styles.AuthButton}>
          <Link to='/login'>  <p> Log in</p></Link>
            <Link to='signup'><h3>Sign up</h3></Link>
        </div>
         )
       }

       else if(localStorage.getItem('access')){
        AuthButton = (
          <div className={styles.AuthButton}>
          <Link to='/login'>  <p onClick={this.logout}> Logout </p></Link>
           
        </div>
         )
       }

        return(
            <>
                <div className={styles.navbar}>

                    <div className={styles.brand}>
                        FLOW
                    </div>

                    
                   {AuthButton}
                    

                    
                </div>
                

            <div className={styles.Content}>

                <div className={styles.Content_items}>

                    <div className={styles.Content_bold}>
                        Flow helps teams
                        work  more collaboratively and get more done.
                    </div>

                    <div className={styles.Content_light}>
                            Flow’s boards, lists, and cards enable teams 
                            to organize <br/>and prioritize projects in a fun, flexible, and <br/>rewarding way.
                    </div>

                    <div className={styles.Content_button}>
                       <p>Get started</p>
                    </div>


            </div>

            <div className={styles.Content_Picture}>
                <img src={Content_Picture} alt="content picture"/>
            </div>

          </div>

          <div className={styles.main1}>
                <LandingContent
                heading={" Work with any team"}
                SubHeading={"Whether it’s for work, a side project or even the next family vacation, Flow helps your team stay organized"}
                buttonTittle={" Sign up for free"}
                />
                <img className={styles.TeamImage} src={TeamImage} alt="team"/>
          </div>
          <div className={styles.main2}>
                <img className={styles.TeamImage} src={ManageImage} alt="Manage"/>
                <LandingContent
                heading={"Manage your plans easily"}
                SubHeading={"Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized"}
                buttonTittle={" Sign up for free"}
                />
          </div>
          <div className={styles.main3}>
                <LandingContent
                heading={" Make a flow of your day"}
                SubHeading={"Whether it’s for work, a side project or even the next family vacation, Flow helps your team stay organized"}
                buttonTittle={" Sign up for free"}
                />
                <img className={styles.TeamImage} src={PlanningImage} alt="Plans"/>
          </div>


<div className="card-group">
  <div className="card">
    <img className="card-img-top" src={Fast} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Get things done quickly</h5>
      <p className="card-text card-para">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><button type="button " className="register btn btn-info">Register now</button></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={Connect} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Connect your team for best result</h5>
      <p className="card-text card-para">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><button type="button" className=" register btn btn-info">Register now</button></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={Planner} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Plan our your life!</h5>
      <p className="card-text card-para">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..</p>
      <p className="card-text"><button type="button" className=" register btn btn-info">Register now</button></p>
    </div>
  </div>

</div>


<div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
            Flow helps teams work
more collaboratively and
get more done.
Flow’s boards, lists, and cards enable teams to organize
and prioritize projects in a fun, flexible, and
rewarding way.Flow helps teams work
more collaboratively and
get more done.
Flow’s boards, lists, and cards enable teams to organize
and prioritize projects in a fun, flexible, and
rewarding way.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Czsadsad</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#"> Ayush </a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </div>



        </>

        );
    }

}
export default LandingPage;
