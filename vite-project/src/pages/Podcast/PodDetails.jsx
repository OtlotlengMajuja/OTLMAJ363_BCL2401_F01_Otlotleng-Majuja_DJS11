import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from "react-modal";
import PodSeason from "./PodSeason";

export default function PodDetails() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/shows/${showId}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((error) => console.error("Error fetching show details:", error));
  }, [showId]);

  if (!show) return <div>Loading...</div>;

  const openModal = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h2>{show.title}</h2>
      <button onClick={() => openModal(show.seasons[0].seasonNumber)}>
        View Seasons
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Select Season</h2>
        {show.seasons.map((season) => (
          <button
            key={season.seasonNumber}
            onClick={() => setSelectedSeason(season.seasonNumber)}
          >
            Season {season.seasonNumber}
          </button>
        ))}
        <button onClick={closeModal}>Close</button>
      </Modal>
      {selectedSeason && (
        <Season
          season={show.seasons.find(
            (season) => season.seasonNumber === selectedSeason
          )}
          showId={show.id}
        />
      )}
      {selectedSeason === null && (
        <div>
          {show.seasons.map((season) => (
            <div key={season.seasonNumber}>
              <Link to={`/show/${show.id}/season/${season.seasonNumber}`}>
                <img
                  src={season.previewImage}
                  alt={`Season ${season.seasonNumber} poster`}
                  width="100"
                />
                <div>
                  Season {season.seasonNumber} - {season.episodes.length}{" "}
                  Episodes
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
