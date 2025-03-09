import React from "react";

export default function ModalBox({ modal, toggleModal, show }) {
  if (!modal || !show) return null;

  return (
    <div className={`modal-container ${modal ? "active" : ""}`}>
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
        <div className="modal-head">
          <button
            className="close-button absolute top-4 left-5 text-xl"
            onClick={toggleModal}
            style={{ cursor: "pointer" }}
          >
            ✖
          </button>
          <img
            src={
              show.image?.original ||
              "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={show.name}
            className="w-full h-auto rounded-md"
          />
          <h1 className="text-lg font-bold mt-2">{show.name}</h1>
          <p className="text-sm text-gray-600">
            {show.genres?.join(", ") || "No Genre"}
          </p>
        </div>

        <p className="mt-2">
          {show.summary?.replace(/<[^>]*>/g, "") || "No summary available."}
        </p>
      </div>
    </div>
  );
}
