// FirestoreComponent.js
import React, { useEffect, useState } from 'react';
import "../App.css";
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import Read from './loadData';

const FirestoreComponent = () => {

  // useStates for the vivebus stations
  const [name, setName] = useState("");
  const [todayVisits, setTodaysVisits] = useState("");

  // useStates to see all the vivebus stations
  const [stations, setAllStations] = useState([]);

  const fetchStations = async () => {

    await getDocs(collection(db, "Estación"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setAllStations(newData);
      })
  }

  useEffect(() => {
    fetchStations();
  }, [])


  const addStationInformation = async (e) => {
    e.preventDefault();

    try {

      await setDoc(doc(db, "Estación", name), {
        Nombre: name,
        VecesVisitadoHoy: todayVisits
      })

      console.log("Document written with id: ", name);
    } catch (e) {
      console.log("Error :C : ", e);
    }
  }

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header font-bold text-red-600">
          Todo-App
        </h1>

        <div>

          <div>
            <input
              type="text"
              placeholder="Cual es el nombre de la estacion?"
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div>
            <input
              type="text"
              placeholder="Cuantas veces fue visitada hoy?"
              onChange={(e) => setTodaysVisits(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button
              type="submit"
              className="btn"
              onClick={addStationInformation}
            >
              Submit
            </button>
          </div>

        </div>

        <div className="todo-content">
          {
            stations?.map((station, i) => (
              <p key={i}>
                {station.Nombre} - {station.VecesVisitadoHoy}
              </p>
            ))
          }
        </div>
      </div>
    </section>
    
  )

};

export default FirestoreComponent;

