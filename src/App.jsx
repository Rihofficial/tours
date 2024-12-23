import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tour from "./components/Tour";

const tours_api = "https://www.course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(tours_api);
      const data = await response.json();
      setTours(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <div className="header-text">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours-container">
        {tours.length > 0 ? (
          tours.map((tour) => {
            return <Tour key={tour.id} tours={tour} removeTour={removeTour} />;
          })
        ) : (
          <button className="btn" onClick={() => fetchTours()}>
            Fetch Tours
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
