import cardBGplaceholder from "../../assets/images/portrait-placeholder1.jpeg";

const PhotoAlbums = () => {
    return (
        <>
            <span className="divider-text">some photo albums</span>
            <hr className="divider" />

            <div className="photo-albums">

                <div className="container">
                    <div className="album-card-grid">
                        <div className="album-card">
                            <div className="album-card-bg"
                                style={{ backgroundImage: `url(${cardBGplaceholder})` }}>
                            </div>
                            <div className="album-card-cover-content">
                                <span className="content-year-date">2021</span>
                                <h2 className="content-header">BMW car shoot in Elst</h2>
                            </div>
                        </div>
                        <div className="album-card">
                            <div className="album-card-bg"
                                style={{ backgroundImage: `url(${cardBGplaceholder})` }}>
                            </div>
                            <div className="album-card-cover-content">
                                <span className="content-year-date">2021</span>
                                <h2 className="content-header">BMW car shoot in Elst</h2>
                            </div>
                        </div>
                        <div className="album-card">
                            <div className="album-card-bg"
                                style={{ backgroundImage: `url(${cardBGplaceholder})` }}>
                            </div>
                            <div className="album-card-cover-content">
                                <span className="content-year-date">2021</span>
                                <h2 className="content-header">BMW car shoot in Elst</h2>
                            </div>
                        </div>
                        <div className="album-card">
                            <div className="album-card-bg"
                                style={{ backgroundImage: `url(${cardBGplaceholder})` }}>
                            </div>
                            <div className="album-card-cover-content">
                                <span className="content-year-date">2021</span>
                                <h2 className="content-header">BMW car shoot in Elst</h2>
                            </div>
                        </div>
                        <div className="album-card">
                            <div className="album-card-bg"
                                style={{ backgroundImage: `url(${cardBGplaceholder})` }}>
                            </div>
                            <div className="album-card-cover-content">
                                <span className="content-year-date">2021</span>
                                <h2 className="content-header">BMW car shoot in Elst</h2>
                            </div>
                        </div>
                        <div className="album-card">
                            <div className="album-card-bg"
                                style={{ backgroundImage: `url(${cardBGplaceholder})` }}>
                            </div>
                            <div className="album-card-cover-content">
                                <span className="content-year-date">2021</span>
                                <h2 className="content-header">BMW car shoot in Elst</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default PhotoAlbums