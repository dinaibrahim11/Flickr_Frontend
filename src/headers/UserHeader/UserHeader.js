import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { usersActions } from '../../storev2/users-slice';
import { useDispatch } from 'react-redux';

const UserHeader = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const preventRefresh = (event, path) => {
    event.preventDefault();
    history.push(path);
  }

  const [searchQuery, setSearchQuery] = useState('');

  //To avoid the refreshing problem:
  //https://stackoverflow.com/questions/63880605/react-js-how-to-prevent-page-reload-once-click-on-the-link-right-now-the-whole

  const handleChange = (event) => {
      setSearchQuery(event.target.value);
      
  }

  const handleClick = (event) => {
      event.preventDefault();
      if (searchQuery === '') {
          return;
      }
      setSearchQuery('');
      history.push("/SearchPage");
  }

    return (
                    <header className="version_1">
                      <div className="main_header">
                        <div className="container">
                          <div className="row small-gutters">
                            <nav className="col-xl-7 col-lg-7">
                              <div className="col-xl-3 col-lg-2 d-lg-flex align-items-center justify-content-end text-left">
                              <a onClick={(e) => {e.preventDefault(); history.push("/home")}}  className="phone_top" href="/home"><strong><span>FLICKR</span></strong></a>
                            </div>
                              <div className="main-menu">
                                <ul>
                                   <li>
                                    <a href="/You" >YOU</a>
                                    <ul>
                                      <li><a href="/about" onClick={(e) => {e.preventDefault(); history.push("/about")}} >About</a></li>
                                      <li><a href="javascript:void(0);" >Photostream</a></li>
                                      <li><a href="javascript:void(0);">Albums</a></li>
                                      <li><a href="javascript:void(0);">Faves</a></li>
                                      <li><a href="javascript:void(0);">Galleries</a></li>
                                      <li><a href="javascript:void(0);">Groups</a></li>
                                      <li><a onClick={(e) => {e.preventDefault(); history.push("/cameraroll")}}  href="/cameraroll">Camera Roll</a></li>
                                      <li><a href="javascript:void(0);">Recent Activity</a></li>
                                      <li><a href="javascript:void(0);">People</a></li>
                                      <li><a href="javascript:void(0);">Organize</a></li>
                                    </ul>
                                  </li> <li >
                                    
                                    <a href="javascript:void(0);" >Explore</a>
                                    <ul><li><a href="javascript:void(0);">Recent Photos</a></li>
                                    <li><a href="javascript:void(0);">Trending</a></li>
                                    <li><a href="javascript:void(0);">Events</a></li>
                                    <li><a href="javascript:void(0);">The Commons</a></li>
                                    <li><a href="javascript:void(0);">Flickr Galleries</a></li>
                                    <li><a href="javascript:void(0);">World Map</a></li>
                                    <li><a href="javascript:void(0);">Camera Finder</a></li>
                                    <li><a href="javascript:void(0);">Flickr Blog</a></li></ul>
                                  </li> <li >
                                
                                    <a href="javascript:void(0);">Prints</a>
                                    <ul>
                                    <li><a href="javascript:void(0);">Prints& Wall Art</a></li>
                                    <li><a href="javascript:void(0);">Photo Books</a></li>
                                    <li><a href="javascript:void(0);">View Cart</a></li>
                                    </ul>
                                  </li>
                                   <li><a href="javascript:void(0);">Pro</a></li>
                                   <li><a href="javascript:void(0);">Upload</a></li>
                                   <li><a href="javascript:void(0);">Notifications</a></li>
                                   <li > 
                                    <a href="javascript:void(0);" >Account</a>
                                    <ul>
                                    <li><a href="javascript:void(0);">Flickr Mail</a></li>
                                    <li><a href="javascript:void(0);">Settings</a></li>
                                    <li><a onClick={(e) => {e.preventDefault(); dispatch(usersActions.logout()); history.push("/")}} href="/">Log out</a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </nav>
                            <div className="col-xl-3 col-lg-2 d-lg-flex align-items-center justify-content-end text-right">
                              <a className="phone_top" href="javascript:void(0);"><strong><span>
                                    Help</span></strong></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="main_nav Sticky">
                        <div className="container">
                          <div className="row small-gutters">
                            <div className="col-xl-8 col-lg-8 col-md-10">
                              <ul className="top_tools">
                                <li className="d-block d-none d-sm-block d-md-none">
                                  <a href="javascript:void(0);" className="btn_search_mob"><span></span></a>
                                  <div className="custom-search-input">
                                <form action="/Search" method="post">
                                  <input type="text" placeholder="Search photos, people, and groups." name="keyword" />
                                  <button type="submit">Q</button>
                                </form>
                              </div>
                                </li>
                              </ul>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block">
                              <div className="custom-search-input">
                                <form onClick={handleClick}>
                                  <input onChange={handleChange} value={searchQuery} type="text" placeholder="Search photos, people, and groups." name="keyword" />
                                  <button type="submit">Q</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                      </div>
                    </header>
                 
                    
                
                    
          
                  
                
              );
            }
          

export default UserHeader;