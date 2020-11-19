import React, { Component } from 'react'
import NewsItem from '../Item/NewsItem'


export default class News extends Component {

    render() {
        return (
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Tin Tức</a>
                      </li>
                    </ol>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
              <div className="container-fluid">
                <div className="card ">
                  <div className="card-header">
                    <h3 className="card-title">Tin Tức Mới </h3>
                  </div>
                </div>
                <div className="row">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
        )
    }
}
