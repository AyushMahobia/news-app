import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, lastUpdate, author, name, newsUrl } = this.props;
    return (
      <>
        <div className="card bg-dark text-light">
          <img src={imageUrl ? imageUrl : "https://images.indianexpress.com/2022/10/iPad-Pro-2022-1.jpg"} alt=".." />
          <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "85%" }}>{name}</span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By "{author ? author : "Unknown"}" on {new Date(lastUpdate).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className='btn btn-sm btn-info' rel="noreferrer">Read more</a>
          </div>
        </div>
      </>
    )
  }
}
