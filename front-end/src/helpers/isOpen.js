import axios from 'axios';

export const isRestaurantOpen = async (restauranteId, data, hora) => {
  try {
    const response = await axios.get(`http://localhost:3000/horarios/${restauranteId}/todos`);
    const horarios = response.data;

    const horarioEncontrado = horarios.find(horario => {
      const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      const diaSemana = new Date(data).getDay();
      const verificaData = diasDaSemana[diaSemana];
      const horaAbertura = new Date(`${data} ${horario.horaAbertura}`);
      const horaFechamento = new Date(`${data} ${horario.horaFechamento}`);
      const horaAtual = new Date(`${data} ${hora}`);

      return (
        verificaData === horario.diaSemana &&
        horaAtual >= horaAbertura &&
        horaAtual <= horaFechamento
      );
    });

    if (horarioEncontrado) {
      const currentDate = new Date();
      const providedDate = new Date(`${data} ${hora}`);

      if (providedDate < currentDate) {
        return 'O restaurante estava aberto.';
      }

      return 'O restaurante estará aberto.';
    }

    return 'O restaurante está fechado.';
  } catch (error) {
    console.error('Erro ao buscar horários do restaurante:', error);
    return false;
  }
};

  