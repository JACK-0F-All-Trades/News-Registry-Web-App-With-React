import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, url, newsUrl, author, publishedAt} = this.props;
        return (
            <div className="card article" >
                <img src={url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-danger'>By {author?author:"Unknown"} on {new Date(publishedAt).toUTCString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

export default Newsitem
