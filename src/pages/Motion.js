import videoProjects from "../assets/videos/motion-videos.json";

const Motion = () => {
  return (
    <>
      <div className="motion">
        <div className="container">
          <div className="video-grid">
            {videoProjects.video_projects_list.map((video, index) => {
              return (
                <div className="video-container" key={index}>
                  <h2 className="video-title">{video.title}</h2>
                  <p className="video-description">{video.description}</p>
                  <video width="100%" height="100%" controls>
                    <source src={video.video} />
                  </video>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Motion;
