import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featuredInfo.scss';

export default function FeaturedInfo() {
  return <div className='featured'>
      <div className="item">
          <span className="title">Revenue</span>
          <div className="money-container">
              <span className="money">$4256</span>
              <span className="money-rate">
                  -11.4
                  <ArrowDownward className='arrow-icon negative'/>
              </span>
          </div>
          <span className="sub">Compared to last month</span>
      </div>
      <div className="item">
          <span className="title">Cost</span>
          <div className="money-container">
              <span className="money">$4356</span>
              <span className="money-rate">
                  +1.4
                  <ArrowUpward className='arrow-icon'/>
              </span>
          </div>
          <span className="sub">Compared to last month</span>
      </div>
      <div className="item">
          <span className="title">Cost</span>
          <div className="money-container">
              <span className="money">$4356</span>
              <span className="money-rate">
                  +1.4
                  <ArrowUpward className='arrow-icon'/>
              </span>
          </div>
          <span className="sub">Compared to last month</span>
      </div>
  </div>;
}
