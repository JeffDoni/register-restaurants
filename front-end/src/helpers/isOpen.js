import axios from 'axios';

export const isRestaurantOpen = async (restauranteId, data, hora) => {
    console.log('oi', restauranteId)
    try {
      const response = await axios.get(`http://localhost:3000/horarios/${restauranteId}/todos`);
      const horarios = response.data;
      console.log(response.data)
  
      // Verificar se o restaurante está aberto na data e hora fornecidas
      const horarioEncontrado = horarios.find(horario => {
        const diaSemana = new Date(data).getDay();
        const horaAbertura = new Date(`${data} ${horario.horaAbertura}`);
        const horaFechamento = new Date(`${data} ${horario.horaFechamento}`);
        const horaAtual = new Date(`${data} ${hora}`);
        
        // Ajuste para comparar corretamente os valores dos dias da semana
        const diaSemanaModelo = horario.diaSemana === 7 ? 0 : horario.diaSemana;
        console.log('oi da', diaSemana, horario.diaSemana)
        console.log(diaSemanaModelo, 'teste')
      
        return (
          diaSemanaModelo === diaSemana &&
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
  