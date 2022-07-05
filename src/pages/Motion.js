import videoProjects from "../assets/videos/motion-videos.json";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";

const Motion = () => {
  return (
    <>
      <div className="motion">
        <div className="container">
          <div className="video-grid">
            {videoProjects.video_projects_list.map((video, index) => {
              return (
                <FadeInWhenVisible>
                  <div className="video-container" key={index}>
                    <h2 className="video-title">{video.title}</h2>
                    <p className="video-description">{video.description}</p>
                    <video controls>
                      <source src={video.video_url} type="video/mp4" />
                    </video>
                  </div>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Motion;
