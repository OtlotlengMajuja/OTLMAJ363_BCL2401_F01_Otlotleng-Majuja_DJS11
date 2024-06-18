const Season = ({ season }) => (
  <div>
    <h3>Season {season.seasonNumber}</h3>
    {season.episodes.map((episode) => (
      <Episode key={episode.episodeNumber} episode={episode} />
    ))}
  </div>
);

export default Season;
