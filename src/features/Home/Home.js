import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './vendors/bootstrap-grid.scss'
import './vendors/style.scss'
import bg from './vendors/bg.jpg'
import avatar from './vendors/download.jpeg'
import logo from './vendors/coding-logo.png'

import SteveJobs from './vendors/steve-jobs.png'
import './Home.scss'

function Home(props) {
  useEffect(() => {
    const header = document.querySelector('header')

    // Handle header
    document.onscroll = function () {
      let space = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      console.log(space)

      if (space > 60) {
        header.style.backgroundColor = '#000'
        header.style.marginTop = '0'
      } else {
        header.style.backgroundColor = 'transparent'
        header.style.marginTop = '14px'
      }
    }
  }, [])
  return (
    <div className="home">
      <div className="app">
        <header>
          <div className="container">
            <nav className="nav-pc">
              <div className="nav__left">
                <Link to="" className="nav_logo">
                  <img src={logo} alt="logo" />
                </Link>
                <div className="nav-list">
                  <div className="nav-list__item">
                    <Link to="">Trang chủ</Link>
                  </div>
                  <div className="nav-list__item">
                    <Link to="">About me</Link>
                  </div>
                  <div className="nav-list__item">
                    <Link to="">Project</Link>
                    {/* <ul className="nav-dropdown-list">
                      <li className="nav-dropdown-list__item">
                        <Link to="">F8 Official Channel</Link>
                      </li>
                      <li className="nav-dropdown-list__item">
                        <Link to="">F8 Facebook Group</Link>
                      </li>
                      <li className="nav-dropdown-list__item">
                        <Link to="">F8 tạo CV xin việc</Link>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div className="nav__right">
                <div className="nav__avt">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="nav__user-name">Andres Nguyen</div>
                <div className="nav_separate"></div>
                <div className="nav-notify">
                  <div className="nav-notify-btn js-progress">
                    <i className="nav-notify-btn__icon fas fa-bookmark"></i>
                    <div className="nav-notify-btn__tooltip">Khóa học của tôi</div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="banner">
          <img src={bg} className="banner__video" />
          {/* <div className="banner__overlay"></div> */}
        </div>
        <section className="public-course">
          <div className="container">
            <h2 className="public-course__heading">My Personal Projects</h2>

            <div className="row">
              <div className="col-12 col-lg-4 col-sm-6">
                <Link
                  to="/whac-a-mole"
                  className="course-item"
                  style={{
                    '--percent': '75%',
                  }}
                >
                  <div className="course-item__img"></div>
                  <div className="course-item-body">
                    <div className="course-item-body__heading">Whac A Mole Game</div>
                    <div className="course-item-body__desc">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam nisi, non error eaque omnis
                      tempore optio cumque facilis.
                    </div>
                  </div>
                  <div className="course-item__progress"></div>
                </Link>
              </div>
              <div className="col-12 col-lg-4 col-sm-6">
                <Link
                  to="/expanding-cards"
                  className="course-item"
                  style={{
                    '--percent': '75%',
                  }}
                >
                  <div className="course-item__img"></div>
                  <div className="course-item-body">
                    <div className="course-item-body__heading">Expanding Cards</div>
                    <div className="course-item-body__desc">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aliquid impedit laboriosam voluptate
                      et facilis earum fugiat obcaecati rerum.
                    </div>
                  </div>
                  <div className="course-item__progress"></div>
                </Link>
              </div>
              <div className="col-12 col-lg-4 col-sm-6">
                <Link
                  to="progress-steps"
                  className="course-item"
                  style={{
                    '--percent': '75%',
                  }}
                >
                  <div className="course-item__img"></div>
                  <div className="course-item-body">
                    <div className="course-item-body__heading">Progress Steps</div>
                    <div className="course-item-body__desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente nesciunt cupiditate eveniet
                      et, nobis quam unde. Consectetur adipisicing elit. Id sapiente nesciunt.
                    </div>
                  </div>
                  <div className="course-item__progress"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="founder container">
          <div className="row">
            <div className="col-12 col-md-6 col-12--custom">
              <img className="founder__img" src={SteveJobs} alt="Founder" />
            </div>
            <div className="col-12 col-md-6">
              <div className="founder-quote">
                <blockquote className="founder-qoute__blockquote">"... Stay Hungry Stay Foolish ..."</blockquote>
                <p className="founder-qoute__author">– CEO Apple –</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <Link to="" className="footer__logo">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="col-12 col-md-3 col-lg-2">
                <div className="footer__headding">Github</div>
                <ul className="footer__more">
                  <li>
                    <Link to="">Chill Music</Link>
                  </li>
                  <li>
                    <Link to="" target="_blank" rel="noopener noreferrer">
                      How to hero git
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 col-lg-2">
                <div className="footer__headding">Sản phẩm</div>
                <ul className="footer__more">
                  <li>
                    <Link to="">About Me</Link>
                  </li>
                  <li>
                    <Link to="" target="_blank" rel="noopener noreferrer">
                      Andres Nguyen
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-2">
                <div className="footer__headding">Social Media</div>
                <ul className="footer__more">
                  <li>
                    <Link to="">Facebook</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer__headding">Contact Me</div>
                <ul className="footer__more">
                  <li>thuongnguyen.it78@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
