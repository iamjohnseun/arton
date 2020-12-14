import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

// IMPORT LAYOUTS
import Navigation from '../layouts/navigation';
import MobileMainSidebar from '../layouts/mobile-main-sidebar';
import CircularMenu from '../layouts/circular-menu';
import MainSidebar from '../layouts/main-sidebar';
import LanguagePanel from '../layouts/language-panel';
import ActivityPanel from '../layouts/activity-panel';
import SearchPanel from '../layouts/search-panel';
import LayoutSidebar from '../layouts/layout-sidebar';
import MobileSidebar from '../layouts/mobile-sidebar';
import ContentWrapper from '../layouts/content-wrapper';

class Index extends Component {
  state = {
    entity: false
  }

  render() {
    return (
      <div>
        <Navigation/>
        <MobileMainSidebar/>
        <CircularMenu/>
        <MainSidebar/>
        <LanguagePanel/>
        <ActivityPanel/>
        <SearchPanel/>
        <LayoutSidebar/>
        <MobileSidebar/>
        <ContentWrapper
        title="Dashboard"
        content={
          <div>
            {/*
              Change here to fit your needs as well as the other columns
              below. The content of the page is determined by the following code.
            */}
            <div className="personal-dashboard personal-dashboard-v1">
              <Welcome name="John Smith"/>
              <div className="dashboard-body">
                <div className="columns is-multiline">
                  <Summary quotes="" />
                </div>
              </div>
            </div>
            <div className="ecommerce-dashboard ecommerce-dashboard-v1">
              <div className="columns is-multiline">
                <RecentSales />
              </div>
            </div>
          </div>
        }
        notification=""/>
      </div>
    );
  }

}

export default Index;
