// client/src/components/Categories.js
import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data); // Met à jour l'état avec les catégories reçues depuis l'API
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Gérer l'erreur ici (affichage d'un message d'erreur, journalisation, etc.)
      }
    };

    fetchCategories(); // Appel de la fonction fetchCategories définie ci-dessus
  }, []); // Utilisation d'un tableau vide pour exécuter useEffect une seule fois après le montage initial

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
