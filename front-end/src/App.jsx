import { useState, useEffect } from 'react';
import axios from 'axios';
import { isRestaurantOpen } from './helpers/isOpen';

const RestaurantList = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:3000/restaurantes');
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
          isOpen: isOpen ? 'Aberto' : 'Fechado',
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
    <div>
      <h1>Lista de Restaurantes</h1>

      <div>
        <label>Data:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
      </div>

      <div>
        <label>Hora:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
      </div>

      <ul>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <span>{restaurante.nome}</span>
            <button onClick={() => handleCheckOpen(restaurante.id)}>Verificar</button>
            {restaurante.isOpen && <span>{restaurante.isOpen}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;





