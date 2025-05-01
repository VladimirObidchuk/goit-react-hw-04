import "modern-normalize";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { GridLoader } from "react-spinners";

import apiInstans from "../api/api";
import ImageGallery from "./gallery/ImageGallery";
import SearchBar from "./searchbar/SearchBar";
import ModalImagePreview from "./modalimage/ImagePreview";
import ErrorMessage from "./errormessage/ErrorMessage";

Modal.setAppElement("#root");

export default function App() {
  const [collection, setCollction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const loadMoImageRef = useRef(null);

  useEffect(() => {
    if (searchValue.trim() === "") return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        setPage(1); // встановити 1 сторінку
        const res = await apiInstans.get("/search/photos", {
          params: {
            query: searchValue,
            page: 1,
            per_page: 12,
          },
        });
        setCollction(res.data.results);
        setHasMore(res.data.results.length === 12);
      } catch (err) {
        setError(true);
        setErrorMessage(err.status);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchValue]);

  useEffect(() => {
    if (page === 1 || !searchValue) return;

    const fetchMore = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await apiInstans.get("/search/photos", {
          params: {
            query: searchValue,
            page,
            per_page: 12,
          },
        });
        setCollction((prev) => [...prev, ...res.data.results]);
        setHasMore(res.data.results.length === 12);
      } catch (err) {
        setError(true);
        setErrorMessage(err.status);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMore();
  }, [page]);

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsOpen(true);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // про всяк випадок очищення
    };
  }, [isOpen]);
  useEffect(() => {
    if (page > 1 && loadMoImageRef.current) {
      loadMoImageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [collection]);

  return (
    <div className="main">
      <SearchBar
        onSubmit={(value) => {
          setSearchValue(value);
        }}
      />
      {loading && <GridLoader />}
      {collection.length > 0 ? (
        <ImageGallery
          photos={collection}
          onClick={handleImageClick}
          loadMoImageRef={loadMoImageRef}
        />
      ) : !loading && searchValue.trim() !== "" && !error ? (
        <ErrorMessage message="No results" />
      ) : null}

      {!loading && hasMore && collection.length > 0 && (
        <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
      )}
      {error && <ErrorMessage message={errorMessage} />}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        {modalImage && <ModalImagePreview image={modalImage} />}
      </Modal>
    </div>
  );
}
