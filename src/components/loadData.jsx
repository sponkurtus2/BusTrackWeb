import React, { useEffect, useState } from 'react';
import "../App.css";
import { db } from '../firebase';

const Read = () => {
  const [station, setStation] = useState([]);

  const fetchData = () => {
    db.collection("Estación".get().then((QuerySnapshot) => {

      // loop trough all the stations 
      QuerySnapshot.forEach(element => {
        var data = element.data();
        setStation(arr => [...arr, data]);
      })
    }))
  }

  return (
    <div>
      {
        station.map((data) => (
          <Frame stationName={data.Nombre} TimesVisited={VecesVisitadoHoy} />
        ))
      }
    </div>
  )
}

const Frame = ({ stationName, TimesVisited }) => {
  return (
    <div className="div">

      <p className=' font-bold'>NAME : {stationName}</p>


      <p>Age : {TimesVisited}</p>

    </div>

    
  );
}

export default Read;
