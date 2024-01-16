import { useState, useEffect } from "react";
import Zines from "./Zines";
import AddZines from "./AddZines";
import AddZineButton from "./AddZineButton";
import Sidebar from "./Sidebar";
import Header from "./Header";

const ZinesPage = () => {
  const [showAddZine, setShowAddZine] = useState(false);
  const [zines, setZines] = useState([]);

  useEffect(() => {
    const getZines = async () => {
      try {
        const zinesFromServer = await fetchZines();
        setZines(zinesFromServer);
      } catch (error) {
        console.error("Error fetching ZINES:", error);
      }
    };

    getZines();
  }, []);

  const fetchZines = async () => {
    const res = await fetch(
      "https://natchiarot.github.io/zinearchives/db.json"
    );
    const data = await res.json();
    return data;
  };

  const addZine = async (zine) => {
    const res = await fetch(
      "https://natchiarot.github.io/zinearchives/db.json",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(zine),
      }
    );

    const data = await res.json();
    setZines([...zines, data]);
  };

  return (
    <div>
      <div>
        <Sidebar zines={zines} />
        <Header />
        <div className="header">
          <AddZineButton
            onAdd={() => setShowAddZine(!showAddZine)}
            showAdd={showAddZine}
          />
          {showAddZine && <AddZines onAdd={addZine} />}
          <h2>Zines</h2>
        </div>
      </div>
      <Zines zines={zines} />
    </div>
  );
};

export default ZinesPage;
