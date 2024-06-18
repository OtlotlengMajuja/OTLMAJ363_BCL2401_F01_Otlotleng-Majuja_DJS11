const Episode = ({ episode }) => (
  <div>
    <h4>{episode.title}</h4>
    <AudioPlayer src={episode.audioUrl} />
  </div>
);

export default Episode;
