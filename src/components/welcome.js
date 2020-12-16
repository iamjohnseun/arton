import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Chart from "react-apexcharts";
import {formatDate} from '../libs/formatDate';

const state = {
  chart: {
    series: [{
      name: 'Income',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Expense',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height: 295,
      type: 'area',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true,
      }
    },
    colors: [window.themeColors.accent, window.themeColors.orange],
    legend: {
      position: 'top'
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      },
      categories: ["2020-09-19T00:00:00.000Z", "2020-09-20T01:30:00.000Z", "2020-09-21T02:30:00.000Z", "2020-09-22T03:30:00.000Z", "2020-09-23T04:30:00.000Z", "2020-09-24T05:30:00.000Z", "2020-09-25T06:30:00.000Z"]
    },
    // tooltip: {
    //   x: {
    //     format: 'dd/MM/yy HH:mm'
    //   }
    // }
  }
}

export default function Welcome () {
  var today = new Date();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  const defaultFromDate = () => {
    var now = new Date();
    now.setMonth(now.getMonth() - 6);
    return formatDate("MMM' yy", now.toLocaleDateString());
  }

  return (
    <div className="s-card-advanced primary-card card-rounded p-0 bg-accent no-border">
    <div className="p-l-20 p-r-20">
      <div className="card-head p-t-20 p-b-25">
        <div className="left">
          <h2 className="title is-4 is-narrow is-light">Create New Invoice</h2>
        </div>
        <div className="right">
          <Link to="/invoice/new" class="button h-button is-rounded is-elevated is-bold">Get Started</Link>
        </div>
      </div>

      <div className="card-body">
        <small className="text-muted">{formatDate("MMM' yy")}</small>
        <p className="title is-5 is-light">Client of the month</p>
        {/*<div className="card h-card bg-primary">*/}
        <div className="m-t-30">
          <div className="card-inner card-rounded no-border">
            <div className="field">
              <div className="control">
                <div className="card-rounded min-h-auto l-card primary-card bg-accent">
                  <div className="media-flex">
                    <div className="h-avatar">
                      {/*<img className="avatar" src="assets/img/avatars/photos/9.jpg" alt=""/>*/}
                      <span className="avatar is-fake">
                        <span>AB</span>
                      </span>
                    </div>
                    <div className="flex-meta">
                      <span className="">Anna B.</span>
                      <span><sup>R</sup> 16, 000</span>
                    </div>
                    <div className="flex-end">
                      <div className="h-icon is-info is-rounded">
                        <i data-feather="award"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr style={{height : "1px"}} />
      <div className="s-card bg-none border-transparent">
        <div className="card-head no-border p-0">
          <div className="left d-block">
            <small className="is-narrow text-muted">{defaultFromDate()} - {formatDate("MMM' yy")}</small>
            <p className="title text-white">Income/ Expense</p>
          </div>
          <div className="right">
            <Link to="/report">
              <div class="h-icon is-elevated is-rounded is-small is-primary">
                <i class="lnir lnir-arrow-right" style={{verticalAlign: "text-bottom"}}></i>
              </div>
            </Link>
          </div>
        </div>
        </div>

      </div>
      <Chart
          options={state.chart}
          series={state.chart.series}
          type="area"
        />
    </div>
  )
}
