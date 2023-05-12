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
            WorkMethodId: "Presencial"
        },
        {
            id: 2,
            title: "DEVELOPER JUNIOR",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Nocturna",
            SeniorityId: "Junior",
            WorkMethodId: "Presencial"
        },
        {
            id: 3,
            title: "DEVELOPER SEMI-SENIOR",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Semi-Senior",
            WorkMethodId: "Remoto"
        },
        {
            id: 4,
            title: "DEVELOPER SENIOR",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Senior",
            WorkMethodId: "Remoto"
        },
        {
            id: 5,
            title: "FULL STACK WEB DEVELOPER",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Junior",
            WorkMethodId: "Remoto"
        },
        {
            id: 6,
            title: "Administrador de empresas Junior",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Junior",
            WorkMethodId: "Presencial"
        },
        {
            id: 7,
            title: "Gerente General",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Senior",
            WorkMethodId: "Remoto"
        },
        {
            id: 8,
            title: "Administrador de empresas",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Nocturna",
            SeniorityId: "Semi-Senior",
            WorkMethodId: "Presencial"
        },
        {
            id: 9,
            title: "Gerente General",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Semi-Senior",
            WorkMethodId: "Presencial"
        },
        {
            id: 10,
            title: "Gerente de Sucursal",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Semi-Senior",
            WorkMethodId: "Remoto"
        },
        {
            id: 11,
            title: "Gerente de punto",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Traine",
            WorkMethodId: "Presencial"
        },
        {
            id: 12,
            title: "Gerente de punto",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Junior",
            WorkMethodId: "Presencial"
        },
        {
            id: 13,
            title: "Gerente Regional",
            description: "buen sueldo, mal trato, peor paga",
            createdAt: "2023-05-09T22:34:43.806Z",
            updatedAt: "2023-05-09T22:34:43.806Z",
            JourneyId: "Diurna",
            SeniorityId: "Senior",
            WorkMethodId: "Remoto"
        },
    ]
  
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state }
    }
};

export default rootReducer;