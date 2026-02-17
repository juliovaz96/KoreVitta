%%{init: {'flowchart': {'curve': 'linear', 'nodeSpacing': 60, 'rankSpacing': 90} } }%%
flowchart LR
  %% Swimlane labels (using text only for section clarity)
  subgraph Professional["Profissional (Nutri / Personal)"]
    direction TB
    P1["Convida paciente por link"] --> P2["Vê paciente: Perfil pendente"]
    P2 --> P3["Recebe anamnese/documentos"]
    P3 --> P4["Personaliza e aplica plano"]
    P4 --> P5["Publica protocolo inicial"]
    P5 --> P6["Acompanha evolução"]
    P6 --> P7["Responde no chat"]
    P7 --> P8["Analisa check-ins e ajusta plano"]
    P4 -- Define metas --> GOAL["Objetivos e métricas-alvo"]
  end

  subgraph Patient["Paciente (User)"]
    direction TB
    U1["Recebe/aceita convite"] --> U2["Preenche anamnese"]
    U2 --> U3["Conclui anamnese"]
    U3 --> U4["Protocolo em preparação"]
    U4 --> U5["Recebe protocolo"]
    U5 --> U6["Executa plano"]
    U6 --> U7["Acompanha relatórios"]
    U7 --> U8["Interage no chat"]
    U8 --> U9["Faz check-ins"]
  end

  subgraph Support["Anamnese / Tracking"]
    direction TB
    A1["Define anamnese"] 
    A2["Upload de exames"]
    T1["Registra macros/cardápio"]
    T2["Registra treino físico"]
    T3["Registra suplementação/água"]
  end

  %% Interações entre lanes principais (handoffs)
  P1 -.-> U1
  U1 -.-> P2
  U3 -.-> P3
  P5 -.-> U5
  U6 -.-> P6
  U8 -.-> P7
  U9 -.-> P8

  %% Suportes
  U3 --> A1
  U3 --> A2
  U6 --> T1
  U6 --> T2
  U6 --> T3

  %% Visual Lane Separation - invisible links just for layout
  Professional -.-> Patient
  Patient -.-> Support

  %% Styling
  classDef pro fill:#eef7ff,stroke:#3b82f6,stroke-width:1px,color:#222;
  classDef pac fill:#ecfdf5,stroke:#10b981,stroke-width:1px,color:#222;
  classDef aux fill:#fff7ed,stroke:#f97316,stroke-width:1px,color:#222;
  classDef goal fill:#f5f3ff,stroke:#8b5cf6,stroke-width:2px,color:#222;

  class P1,P2,P3,P4,P5,P6,P7,P8 pro;
  class U1,U2,U3,U4,U5,U6,U7,U8,U9 pac;
  class A1,A2,T1,T2,T3 aux;
  class GOAL goal;