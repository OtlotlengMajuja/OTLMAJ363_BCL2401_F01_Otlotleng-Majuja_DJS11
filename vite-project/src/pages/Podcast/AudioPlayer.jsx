const AudioPlayer = ({ src }) => (
  <audio controls>
    <source src={src} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
);

export default AudioPlayer;
