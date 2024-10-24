import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private fitness = [
    {
      id: 1,
      name: 'Treino de Hipertrofia',
      shortDescription: 'Plano de ganho de massa muscular em 6 semanas.',
      description: 'Este plano foca no aumento de massa muscular com exercícios de força.',
      goal: 'Ganho de Massa Muscular',
      duration: '6 semanas',
      difficulty: 'Intermediário',
      equipment: 'Halteres, Barra',
      type: 'fitness',
      imageUrl: '/assets/hypertrophy.png',
      exercises: [
        { name: 'Supino', duration: '3 sets de 10 repetições' },
        { name: 'Agachamento', duration: '4 sets de 8 repetições' },
        // Mais exercícios...
      ]
    },
    {
      "id": 2,
      "name": "Treino HIIT para Emagrecimento",
      "shortDescription": "Treino de alta intensidade com curta duração para queima de gordura.",
      "description": "Treino intervalado de alta intensidade (HIIT) focado em queima de gordura. Esse plano é ideal para quem quer perder peso rapidamente com sessões de exercícios que duram em média 20 a 30 minutos.",
      "goal": "Perda de Peso",
      "duration": "4 semanas",
      "difficulty": "Iniciante",
      "equipment": "Nenhum",
      "type": "fitness",
      "imageUrl": "assets/hiit-emagrecimento.png",
      "exercises": [
        { "name": "Burpees", "duration": "30 segundos" },
        { "name": "Corrida no Lugar", "duration": "30 segundos" },
        { "name": "Agachamento com Salto", "duration": "30 segundos" },
        { "name": "Prancha Isométrica", "duration": "45 segundos" },
        { "name": "Mountain Climbers", "duration": "30 segundos" }
      ]
    },
    {
      "id": 3,
      "name": "Treino Funcional para Iniciantes",
      "shortDescription": "Plano de treino funcional para melhorar mobilidade e força.",
      "description": "Este plano foca em exercícios que utilizam movimentos naturais do corpo para fortalecer e melhorar a mobilidade.",
      "goal": "Melhorar Mobilidade e Força",
      "duration": "4 semanas",
      "difficulty": "Iniciante",
      "equipment": "Peso Corporal, Kettlebell",
      "type": "fitness",
      "imageUrl": "assets/functional.png",
      "exercises": [
        {
          "name": "Flexões",
          "duration": "3 sets . 12 repetições"
        },
        {
          "name": "Agachamento com Peso Corporal",
          "duration": "4 sets . 15 repetições"
        },
        {
          "name": "Levantamento Terra com Kettlebell",
          "duration": "3 sets . 10 repetições"
        },
        {
          "name": "Prancha com Elevação de Perna",
          "duration": "3 sets . 20 segundos por perna"
        }
      ]
    },
  ];

  private nutrition = [
    {
      id: 1,
      name: 'Dieta Low Carb',
      shortDescription: 'Plano alimentar focado em perda de peso com baixo consumo de carboidratos.',
      description: 'Este plano foca em reduzir o consumo de carboidratos e aumentar o consumo de proteínas e gorduras saudáveis.',
      goal: 'Perda de Peso',
      duration: '30 dias',
      difficulty: 'Moderado',
      type: 'nutrition',
      imageUrl: 'assets/low-carb.png',
      meals: [
        { name: 'Omelete de Queijo', calories: 250 },
        { name: 'Peito de Frango Grelhado', calories: 300 },
        // Mais refeições...
      ]
    },
    {
      "id": 2,
      "name": "Dieta Mediterrânea",
      "shortDescription": "Dieta saudável baseada nos alimentos típicos da região mediterrânea.",
      "description": "Essa dieta é baseada nos hábitos alimentares tradicionais dos países do Mediterrâneo, com foco em grãos integrais, azeite de oliva, peixes e vegetais frescos. Ideal para quem deseja melhorar a saúde cardiovascular e manter uma alimentação equilibrada.",
      "goal": "Melhoria da Saúde Cardiovascular",
      "duration": "60 dias",
      "difficulty": "Fácil",
      "type": "nutrition",
      "imageUrl": "assets/mediterranea.png",
      "meals": [
        { "name": "Salada de Grãos Integrais com Tomate e Pepino", "calories": 350 },
        { "name": "Peixe Grelhado com Legumes", "calories": 400 },
        { "name": "Sopa de Lentilha com Espinafre", "calories": 300 },
        { "name": "Frutas Frescas com Iogurte Natural", "calories": 250 },
        { "name": "Azeite de Oliva com Pão Integral", "calories": 150 }
      ]
    },
    {
      "id": 3,
        "name": "Dieta Vegana",
        "shortDescription": "Plano alimentar baseado exclusivamente em alimentos de origem vegetal.",
        "description": "Este plano foca no consumo de alimentos de origem vegetal, garantindo todos os nutrientes necessários para uma alimentação equilibrada.",
        "goal": "Saúde e Sustentabilidade",
        "duration": "30 dias",
        "difficulty": "Moderado",
        "type": "nutrition",
        "imageUrl": "assets/vegana.png",
        "meals": [
          {
            "name": "Smoothie de Frutas e Vegetais",
            "calories": 250
          },
          {
            "name": "Salada de Grão-de-Bico",
            "calories": 300
          },
          // Mais refeições...
        ]
    },
  ]

  getFitness() {
    return this.fitness;
  }

  getNutrition() {
    return this.nutrition;
  }

  getFitnessById(id: number) {
    return this.fitness.find(fitness => fitness.id === id);
  }

  getNutritionById(id: number) {
    return this.nutrition.find(nutrition => nutrition.id === id);
  }
}
