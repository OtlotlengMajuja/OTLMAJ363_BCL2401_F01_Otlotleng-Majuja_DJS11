const Episode = ({ episode }) => (
  <div>
    <h4>{episode.title}</h4>
    <AudioPlayer src={episode.audioUrl} />
  </div>
);

const AudioPlayer = ({ src }) => (
  <audio controls>
    <source src={src} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
);

export default Episode;
