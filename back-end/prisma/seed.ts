const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.restaurante.createMany({
      data: [
        { nome: 'Restaurante 1', documento: '123456789', tipo: 'Comida', endereco: 'Endereço 1' },
        { nome: 'Restaurante 2', documento: '987654321', tipo: 'Bebida', endereco: 'Endereço 2' },
        { nome: 'Restaurante 3', documento: '456789123', tipo: 'Sobremesa', endereco: 'Endereço 3' },
      ],
    });

    await prisma.horario.createMany({
      data: [
        { diaSemana: 'Segunda', horaAbertura: '10:00', horaFechamento: '20:00', restauranteId: 1 },
        { diaSemana: 'Terça', horaAbertura: '10:00', horaFechamento: '20:00', restauranteId: 1 },
        { diaSemana: 'Quarta', horaAbertura: '10:00', horaFechamento: '20:00', restauranteId: 1 },
        { diaSemana: 'Quinta', horaAbertura: '10:00', horaFechamento: '20:00', restauranteId: 1 },
        { diaSemana: 'Sexta', horaAbertura: '10:00', horaFechamento: '20:00', restauranteId: 1 },
        { diaSemana: 'Sábado', horaAbertura: '10:00', horaFechamento: '16:00', restauranteId: 1 },
        { diaSemana: 'Domingo', horaAbertura: 'Fechado o dia todo', horaFechamento: 'Fechado o dia todo', restauranteId: 1 },

        { diaSemana: 'Segunda', horaAbertura: '08:00', horaFechamento: '18:00', restauranteId: 2 },
        { diaSemana: 'Terça', horaAbertura: '08:00', horaFechamento: '18:00', restauranteId: 2 },
        { diaSemana: 'Quarta', horaAbertura: '08:00', horaFechamento: '18:00', restauranteId: 2 },
        { diaSemana: 'Quinta', horaAbertura: '08:00', horaFechamento: '18:00', restauranteId: 2 },
        { diaSemana: 'Sexta', horaAbertura: '08:00', horaFechamento: '18:00', restauranteId: 2 },
        { diaSemana: 'Sábado', horaAbertura: '09:00', horaFechamento: '14:00', restauranteId: 2 },
        { diaSemana: 'Domingo', horaAbertura: 'Fechado o dia todo', horaFechamento: 'Fechado o dia todo', restauranteId: 2 },

        { diaSemana: 'Quarta', horaAbertura: '11:30', horaFechamento: '22:00', restauranteId: 3 },
        { diaSemana: 'Quinta', horaAbertura: '11:30', horaFechamento: '22:00', restauranteId: 3 },
        { diaSemana: 'Sexta', horaAbertura: '11:30', horaFechamento: '22:00', restauranteId: 3 },
        { diaSemana: 'Sábado', horaAbertura: '12:00', horaFechamento: '23:00', restauranteId: 3 },
        { diaSemana: 'Domingo', horaAbertura: 'Fechado o dia todo', horaFechamento: 'Fechado o dia todo', restauranteId: 3 },
      ],
    });

    console.log('Seeders criados com sucesso!');
  } catch (error) {
    console.error('Erro ao criar seeders:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();