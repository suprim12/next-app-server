import React from 'react'
import { Link } from 'react-router-dom'
import { formatdate } from '../store/utils/handlers'

const PostCard = ({ post }) => {
    const { user, title, createdAt, readtime, slug, updatedAt, likes, thumbnail, body } = post
    return (
        <article className="post-card">
            <div className="post-card-header">
                <Link to="/" className="post-card-user-img">
                    <img src={`${process.env.REACT_APP_IMAGE_PATH}/images/users/${user.image}`} alt="user-img" />
                </Link>
                <div className="post-card-user-info">
                    <h3>{user.name} in OneZero</h3>
                    <div className="posts-meta">
                        <span>{formatdate(createdAt)}</span>
                        {readtime && readtime > 0 ? <span>{readtime} min read</span> : null}
                    </div>
                </div>
            </div>
            <div className="post-card-body">
                <Link to="/" className="post-card-img">
                    <img src="/static/img/default.jpg" alt="post-img" srcSet="" />
                </Link>
                <Link to="/" className="post-card-title">{title}</Link>
                <p className="post-card-desc">{body}</p>
                <Link to="/" className="post-card-read-more">Read more ...</Link>
            </div>
            <div className="post-card-footer">
                <div className="post-card-action-like">
                    <i className="ri-heart-line"></i> {likes}
                </div>
                <div className="post-card-action-response">
                    <Link to="/">1 Response</Link>
                    <Link to="/">&darr;</Link>
                </div>
            </div>
        </article>
    )
}

export default PostCard
