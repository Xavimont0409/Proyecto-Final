const initialState = {
  publications: [
    {
      id: 1,
      title: "DEVELOPER TRAINE",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Nocturna",
      SeniorityId: "Traine",
      WorkMethodId: "Presencial",
    },
    {
      id: 2,
      title: "DEVELOPER JUNIOR",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Nocturna",
      SeniorityId: "Junior",
      WorkMethodId: "Presencial",
    },
    {
      id: 3,
      title: "DEVELOPER SEMI-SENIOR",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Semi-Senior",
      WorkMethodId: "Remoto",
    },
    {
      id: 4,
      title: "DEVELOPER SENIOR",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Senior",
      WorkMethodId: "Remoto",
    },
    {
      id: 5,
      title: "FULL STACK WEB DEVELOPER",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Junior",
      WorkMethodId: "Remoto",
    },
    {
      id: 6,
      title: "Administrador de empresas Junior",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Junior",
      WorkMethodId: "Presencial",
    },
    {
      id: 7,
      title: "Gerente General",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Senior",
      WorkMethodId: "Remoto",
    },
    {
      id: 8,
      title: "Administrador de empresas",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Nocturna",
      SeniorityId: "Semi-Senior",
      WorkMethodId: "Presencial",
    },
    {
      id: 9,
      title: "Gerente General",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Semi-Senior",
      WorkMethodId: "Presencial",
    },
    {
      id: 10,
      title: "Gerente de Sucursal",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Semi-Senior",
      WorkMethodId: "Remoto",
    },
    {
      id: 11,
      title: "Gerente de punto",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Traine",
      WorkMethodId: "Presencial",
    },
    {
      id: 12,
      title: "Gerente de punto",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Junior",
      WorkMethodId: "Presencial",
    },
    {
      id: 13,
      title: "Gerente Regional",
      description: "buen sueldo, mal trato, peor paga",
      createdAt: "2023-05-09T22:34:43.806Z",
      updatedAt: "2023-05-09T22:34:43.806Z",
      JourneyId: "Diurna",
      SeniorityId: "Senior",
      WorkMethodId: "Remoto",
    },
  ],
  users: [
    {
      id: 1,
      name: "Juan David",
      email: "ejeyd@example.com",
      skills: ["React, SQL"],
      experience: "2 years",
    },
    {
      id: 2,
      name: "Juanjo Archundia",
      email: "ejeeee@example.com",
      skills: ["javaScript, HTML"],
      experience: "1 year",
    },
    {
      id: 3,
      name: "Andres David",
      email: "Andres@example.com",
      skills: ["React, SQL"],
      experience: "2 years",
    },
    {
      id: 4,
      name: "Anderson Camale",
      email: "Anderson@example.com",
      skills: ["javaScript, HTML"],
      experience: "4 years",
    },
    {
      id: 5,
      name: "Ayrton Senna",
      email: "Ayrton@example.com",
      skills: ["React, SQL"],
      experience: "1 year",
    },
    {
      id: 6,
      name: "Alejandro David",
      email: "Alejandro@example.com",
      skills: ["javaScript, HTML"],
      experience: "2 years",
    },
    {
      id: 7,
      name: "Lucia Antuchi",
      email: "Lucia@example.com",
      skills: ["CSS, React Native"],
      experience: "2 years",
    },
    {
      id: 8,
      name: "Carlos Monzon",
      email: "Carlos@example.com",
      skills: ["javaScript, HTML"],
      experience: "2 years",
    },
    {
      id: 9,
      name: "Lionel Messi",
      email: "Lionel@example.com",
      skills: ["CSS, React Native"],
      experience: "2 years",
    },
    {
      id: 10,
      name: "John Senna",
      email: "John@example.com",
      skills: ["javaScript, HTML"],
      experience: "5 years",
    },
    {
      id: 11,
      name: "Rafa Nadal",
      email: "Rafa@example.com",
      skills: ["React, SQL"],
      experience: "1 year",
    },
    {
      id: 12,
      name: "Diego Maradona",
      email: "Diego@example.com",
      skills: ["CSS, React Native"],
      experience: "2 years",
    },
    {
      id: 13,
      name: "Sergio Romero",
      email: "Sergio@example.com",
      skills: ["React, SQL"],
      experience: "1 year",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state }
    }
};

export default rootReducer;