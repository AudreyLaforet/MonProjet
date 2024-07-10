// client/src/components/Materiaux.js
import React, { useEffect, useState } from 'react';

const Materiaux = () => {
  const [materiaux, setMateriaux] = useState([]);

  useEffect(() => {
    fetch('/materiaux')
      .then(res => res.json())
      .then(data => setMateriaux(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Liste des Matériaux</h2>
      <ul className="list-group">
        {materiaux.map(materiau => (
          <li key={materiau._id} className="list-group-item">
            {materiau.nom} (Entreprise : {materiau.entreprise_id.nom})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Materiaux;
