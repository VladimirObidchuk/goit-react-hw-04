import "modern-normalize";
import "./App.css";
// import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import apiInstans from "../api/api";
import ImageGallery from "./gallery/ImageGallery";
import SearchBar from "./searchbar/SearchBar";
import ModalImagePreview from "./modalimage/ImagePreview";
import ErrorMessage from "./errormessage/ErrorMessage";

export default function App() {
  const [collection, setCollction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setOpen(true);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalImage]);

  return (
    <div className="main">
      <SearchBar
        onSubmit={(value) => {
          setSearchValue(value);
        }}
      />
      {loading && <GridLoader />}
      {collection.length > 0 ? (
        <ImageGallery photos={collection || []} onClick={setModalImage} />
      ) : (
        <ErrorMessage message="No results" />
      )}
      {!loading && hasMore && collection.length > 0 && (
        <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
      )}
      {error && <ErrorMessage message={errorMessage} />}
      {open && (
        <ModalImagePreview
          image={modalImage}
          onClose={() => {
            setOpen(false);
            setModalImage("");
          }}
        />
      )}
    </div>
  );
}

{
  /* <Toaster reverseOrder={false} />; */
}

//  const notify = () =>
//    toast("Here is your toast.", {
//      duration: 4000,
//      position: "bottom-right",
//      removeDelay: 1000,
//    });
