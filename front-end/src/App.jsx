import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const RestaurantList = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`https://jeffdoni-restaurantes.up.railway.app/restaurantes`);
      setRestaurantes(response.data);
    } catch (error) {
      console.error('Erro ao buscar restaurantes:', error);
    }
  };

  const handleCheckOpen = async (restauranteId) => {
    const isOpen = await isRestaurantOpen(restauranteId, data, hora);
    const updatedRestaurantes = restaurantes.map((restaurante) => {
      if (restaurante.id === restauranteId) {
        return {
          ...restaurante,
          isOpen: isOpen
        };
      }
      return restaurante;
    });
    setRestaurantes(updatedRestaurantes);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="restaurant-list">
      <h1>Lista de Restaurantes</h1>

      <div className="input-container">
        <label>Data:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
      </div>

      <div className="input-container">
        <label>Hora:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
      </div>

      <ul>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id} className="restaurant-item">
            <span>{restaurante.nome}</span>
            <span>{restaurante.tipo}</span>
            <span>{restaurante.endereco}</span>
            <button onClick={() => handleCheckOpen(restaurante.id)}>Verificar</button>
            {restaurante.isOpen && <span className="open-status">{restaurante.isOpen}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;






