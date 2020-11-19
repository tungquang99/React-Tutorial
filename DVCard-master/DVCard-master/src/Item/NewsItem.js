import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className="col-md-3">
            {/* Info Boxes Style 2 */}
            <div className="info-box mb-3">
              <div className="info-box-content">
                <a href="/" className="info-box-text title-news">
                  adfasdfasdf
                </a>
                <span className="content-news">
                  ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd132132adasdasdasd
                </span>
                <div>Thời gian: 09/09/2020</div>
                <div>Tác giả: Admin</div>
              </div>
              {/* /.info-box-content */}
            </div>
          </div>
        )
    }
}
