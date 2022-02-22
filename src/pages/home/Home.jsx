import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.scss';
import {userData} from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home({setActivePage}) {
  setActivePage('home');
  return <div className='home'>
      <FeaturedInfo />
      <Chart 
        userData={userData}
        dataKey={"Active User"}
        title="Users Chart"
        grid
      />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
  </div>;
}

