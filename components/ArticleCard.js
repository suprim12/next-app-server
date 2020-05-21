import React from 'react'

const ArticleCard = ({ sty, post }) => {
    const { user, title, createdAt, readtime, slug, updatedAt, likes, thumbnail, body } = post
    return (
        <article className={`custom-post-card ${sty}`}>
            <div className="custom-post-card-img">
                <img src={thumbnail ? `${process.env.REACT_APP_IMAGE_UPLOADS_PATH}/images/posts/${thumbnail}` : "/static/img/default.jpg"} alt="default"></img>
            </div>
            <div className="custom-body-footer">
                <div className="custom-post-card-body">
                    <h1 className="custom-post-card-title">
                        {title}
                    </h1>
                    <p className="custom-post-card-desc">{body.slice(0, 250)}</p>
                </div>
                <div className="custom-post-card-footer">
                    <div className="custom-post-card-footer-meta">
                        <h4>{user.name}</h4>
                        <div className="meta">
                            <span>{createdAt}</span>
                            <span>{readtime} min read</span>
                        </div>
                    </div>
                    <div className="custom-post-card-footer-action dropdown">
                        <button type="button" className="dropdowntoggle">
                            <div className="toggle-dot">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                        <div className="dropdown-menu">
                            action
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
ArticleCard.defaultProps={
    sty:''
}
export default ArticleCard
