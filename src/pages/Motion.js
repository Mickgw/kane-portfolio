import videoProjects from "../assets/videos/motion-videos.json";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";
import ReactPlayer from "react-player";

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
                    <div className="video-title">{video.title}</div>
                    <p className="video-description">{video.description}</p>

                    {/* <ReactPlayer url={video.video_url} controls={true} width="100%" height="100%"/> */}
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
