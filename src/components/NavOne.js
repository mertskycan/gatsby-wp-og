import React, { Component } from "react";
import {  StaticQuery, graphql, Link  } from "gatsby"
import logo from "../assets/images/logo-dark.png";
const flatListToHierarchical = (
  data = [],
  {idKey='key',parentKey='parentId',childrenKey='children'} = {}
) => {
  const tree = [];
  const childrenOf = {};
  data.forEach((item) => {
      const newItem = {...item};
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
      childrenOf[id] = childrenOf[id] || [];
      newItem[childrenKey] = childrenOf[id];
      parentId
          ? (
              childrenOf[parentId] = childrenOf[parentId] || []
          ).push(newItem)
          : tree.push(newItem);
  });
  return tree;
};
class NavOne extends Component {
  
  constructor() {
    super();
    this.state = {
      sticky: false
    }; 
    
    
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();

    //Search Toggle
    this.serachButton();
   
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };

  serachButton = () => {
    let searchToggle = document.querySelector(".search-toggle");
    let searchPopup = document.querySelector(".search-popup");
    let searchClose = document.querySelector(".cancel");
    let searchOverlay = document.querySelector(".search-overlay");

    searchToggle.addEventListener("click", function () {
      searchPopup.classList.add("active");
    });

    searchClose.addEventListener("click", function () {
      searchPopup.classList.remove("active");
    });

    searchOverlay.addEventListener("click", function () {
      searchPopup.classList.remove("active");
    });
  };

  render() {
  
   return (

      <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="main-logo"
                  width="128"
                  alt="Awesome alter text"
                />
              </Link>
              <div className="header__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <button className="menu-toggler">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
  
              <StaticQuery
  query={graphql`
    {
      wpMenu(locations: {eq: PRIMARY}) {
        menuItems {
          nodes {
            key: id
            parentId
            title: label
            url
          }
        }
      }
    }
  `}
  render={data =>  
    <div className="main-navigation">
      <ul className=" navigation-box">
        
      {flatListToHierarchical(data.wpMenu.menuItems.nodes).map(menuitem => {
        

          return (
                <li className="">
                  <Link to={menuitem.url}>{menuitem.title}</Link>
                  
                  {!!menuitem.children && (
                    
                  <ul className="sub-menu">
                     {menuitem.children.map(childitem => {
        

        return (
                  <li>
                  <Link to={childitem.url}>{childitem.title}</Link>
                  </li>
                  
          )
        })}
              
                  
                </ul>
                
                )}

                </li>
          )
        })}
              
              
                
              </ul>
            </div>
                }
                ></StaticQuery>
            <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler search-toggle"
                href="#none"
              >
                <i className="kipso-icon-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}


export default NavOne;
