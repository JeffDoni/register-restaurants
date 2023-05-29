import axios from 'axios';

export const isRestaurantOpen = async (restauranteId, data, hora) => {
    try {
      const response = await axios.get(`http://localhost:3000/horarios/${restauranteId}/todos`);
      const horarios = response.data;
  
      const horarioEncontrado = horarios.find(horario => {
        const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
        const diaSemana = new Date(data).getDay();
        const verificaData = diasDaSemana[diaSemana]
        const horaAbertura = new Date(`${data} ${horario.horaAbertura}`);
        const horaFechamento = new Date(`${data} ${horario.horaFechamento}`);
        const horaAtual = new Date(`${data} ${hora}`);
      
        return (
          verificaData === horario.diaSemana &&
          horaAtual >= horaAbertura &&
          horaAtual <= horaFechamento
        );
      });
      
  
      return !!horarioEncontrado;
    } catch (error) {
      console.error('Erro ao buscar horários do restaurante:', error);
      return false;
    }
  };
  