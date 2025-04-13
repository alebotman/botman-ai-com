general presentation

 '''


Propuesta de valor










 

Misión 

La IA Generativa impactará casi todas nuestras actividades personales y laborales. Nuestra Misión es empoderar a las personas y empresas para usarla como un aliado para vivir mejor y ser más exitosos.




Visión

Convertirnos en el principal referente del mercado en el uso de IA Generativa a nivel empresarial, a través de un equipo altamente especializado, dinámico y en constante aprendizaje, de manera de poder destilar el cambio constante y permitir a las empresas alcanzar su potencial para mantenerse vigentes y triunfar.
 
Nuestros servicios

Desarrollos IA
Desarrollo de software basado en Inteligencia Artificial para atención al cliente, búsqueda y procesamiento de información, automatización de procesos, documentación de sistemas legados y mucho más.
	 

	
	
Capacitación
Capacitaciones técnicas para equipos de tecnología en el desarrollo de soluciones a medida. Capacitaciones para equipos de negocio sobre conceptos, aplicaciones y el uso de herramientas de IA Generativa como ChatGPT, Github Copilot y Microsoft 365 Copilot.
	 


Transformación organizacional
Adopción de herramientas de IA como Microsoft 365 copilot, incluyendo la conexión con sistemas e información propios. Adaptación de formas de trabajo, combinando conceptos de IA con Agilidad.
	 

	
Consultoría
Asesoramiento en el uso de herramientas de Gen AI, estrategia de adopción, arquitecturas de referencia y desarrollo de soluciones a medida.	 

 
Qué nos diferencia


BotMan cuenta con un equipo compacto de altísima
especialización en Inteligencia Artificial. Además, trabajamos con
Partners que nos proveen fuerza de trabajo para desarrollo en otras
tecnologías.

Nuestras premisas fundamentales son mantener nuestro
conocimiento actualizado constantemente y aprovechar al máximo
las herramientas de IA Generativa para hacer cada vez más
eficiente nuestro trabajo.

Todo esto nos permite generar soluciones de alto valor y calidad, y
ofrecer tarifas muy competitivas en comparación con
organizaciones con grandes estructuras, altos costos y talento
variado.
 
Ejemplos de casos 
de uso 

A continuación hay una lista de casos de uso frecuentes, aunqe es posible implementar muchos más.

Procesar información desestructurada:
§	Analizar conversaciones, audios, documentos, correos, sitios web
§	Extraer datos estructurados y guardarlos en un sistema o base de datos
§	Resumir, comparar, conectar

Buscar información
§	Contestar preguntas en base a datos no estructurados
§	Orquestar con fuentes de datos estructurados, sistemas, fuentes externas, etc

Tomar acciones
§	Decidir en base al contexto (ej: conversación o correos) y ciertas reglas
§	Leer o escribir en sistemas
§	Generar documentos, imágenes
§	Ejecutar modelos matemáticos, consultas y modelos de Machine Learning (no generativa)
Algunos de nuestros clientes y proyectos

 

Documentación del código legacy Java de un sistema core, permitiendo que nuevos desarrolladores puedan colocar cambios en producción en tan solo dos semanas. El código se documenta a través de un grafo que conecta a todos los compenentes del sistema. Cada componente es explicado no solo por su propio código sino también entendiendo qué hacen todos los componentes con los que interactúa (otras funciones, tablas, clases, etc). Nuestra solución para lograr esto se llama  .


 
Sistema de análisis de licitaciones públicas históricas, generando insights sobre qué competidores y productos están ganando ciertos sectores, de manera de poder generar mejores futuras ofertas y aumentar la participación y última línea.
 
 
Nuestro proyectos más desafiante, consiste en la migración semi automatizada de aplicaciones Delphi a Java. Lo novedoso es que la migración incluye una re-arquitectura que es sugerida e implementada a través de IA Generativa, previo análisis del grafo de código y base de datos. También es logrado a través de  . 
Los ahorros en tiempo y costo respecto de una migración tradicional están entre el 65% y 75%.


 

Creación de chatbot de whatsapp que contesta consultas sobre los prospectos de los productos de laboratorio Roemmers. El Chatbot permite interacciones por audio o texto. También provee vínculos a los prospectos que se utilizaron para responder, filtra respuestas, inválidas o consejos médicos, requiere un consentimiento explícito, y varias funcionalidades más que permiten poner de cara al cliente final una solución confiable y robusta.
'''
legacy applications migration service
'''
Codacle Migration Service 

Service Overview 

Codacle by BotMan AI is a revolutionary service designed to modernize legacy Delphi and Visual Basic applications efficiently, migrating them to a modern architecture featuring a Spring Boot backend and React frontend by default, or other target stacks by request. We leverage cutting-edge generative AI technologies to drastically reduce migration time, effort, and costs. 

Our proprietary generative AI approach thoroughly analyzes your legacy application's context, enabling us to design a fully functional, maintainable, and secure modern solution that replicates your original application's functionalities with precision. 

 

Why us 

There are currently two types of automatic migration services out there: 

Deterministic: These services don’t migrate 100% of your code and don’t rearchitect your system. Rather, they migrate pieces of code one by one and require adjustments afterwards. 

 

Gen AI based using multi-agent systems: These systems rely on multiple Gen AI agents that attempt to coordinate among themselves. They can migrate up to 80% of your code. The problem is that you won’t know what 20% is missing. Usually, you’ll find duplicated and missing code. They are still a good kick start, but there’s hard work to do after the migration process. 

Our approach has deep engineering combined with Gen AI. We start by creating a highly detailed graph representing every element of your software (modules, functions, procedures, classes, etc) and database (tables, stored procedures, functions, views, etc) and all the relationships among those elements (functions calling procedures, global objects being used, procedures reading or writing tables, etc).  

From that point, we have a pipeline of more than 60 steps that create backend APIs and then front-end forms and connect the forms to the APIs to reproduce the functionality. These steps are deterministic in what they do and how they do it, but rely on Gen AI to produce each piece of code. The graph provides exactly the right context for each tiny step.  

For instance, to create an endpoint for a newly created API, the system will gather from the graph the exact methods, procedures and tables with the Gen AI-generated descriptions and their relationships in order to give the LLM the right context it needs, no less and no more. Afterwards, additional agents will review the code, correct or improve it if necessary, ensure customer standards are met and check that the endpoint fits perfectly into the big picture. 

 

What's Included in the Service 

Intelligent Analysis: Generation of a detailed knowledge graph from your legacy code to capture the relationships among procedures, functions, tables, and databases. 

 

Modern Architecture Design: Establishment of a new microservices architecture, including APIs. 

 

Automated Backend Code Generation: Spring Boot backend implementation, covering controllers, services, entities, and repositories. Other backend technologies can be requested on-demand. 

 

Frontend Design and Generation: Creation of React-based user interfaces mirroring original application screens and interactions. Other frontend technologies can be requested on-demand. 

 

 

Continuous Human Validation: Expert-led reviews, adjustments, and validations with our Client throughout the migration process. 

 

AI-Assisted Testing: Automated unit-test generation and execution. Functional tests execution to ensure accurate functionality replication. 

 

Additionally, our graph structure can identify dead source code and thus avoid migrating it. 

Optionals 

Monthly access to our virtual agent, Barbara, who can answer technical and functional questions about your source code by traversing the graph where we represent each part of your software and their connections. We can also provide the agent with access to a graph of your target code, to make it easier to apply future changes. Furthermore, we can integrate this agent into your developers' IDE as long as they support MCP (e.g., Visual Studio Code or Cursor). 

Deliverables 

Migrated code complying with client’s standards. 

README files and Swagger for APIs. 

Unit tests with at least 80% coverage on average. 

Evidence of unit test results and functional tests results (*). 

Additional deliverables can be included with extra cost. 

(*) Functional tests scripts and data need to be provided by the Client. Alternatively, the customer can perform these tests and report back any issues. 

 

Pricing Structure 

Our pricing structure (*) is simple and straightforward. No hidden costs. We offer a money-back guarantee if the migrated application does not match the exact functionality of the original Delphi application. 

 

Fixed One-Time engagement and set up Price: USD 15,000 

 

Price per Form: USD 1,000 per form migrated from Delphi to the target framework (with a minimum of 100 forms) 

 

Optional One-Time Adaptation to Different Target Tech Stack (eg: Node + Angular): Additional one-time fee of USD 18,000 (**) 

 

Optional Hourly Consulting/Custom Development Rate: USD 90 per hour 

Additional customizations such as API integrations, specialized documentation tools, or other unique requirements will be quoted separately based on estimated effort. 

These prices assume that the database model remains the same and any database objects (such as stored procedures) also remain working as part of the migrated application. Any further changes to these elements are to be quoted separately. 

(*) Prices listed are exclusive of any applicable state or local taxes. Sales tax will be added in jurisdictions where required by law. All such taxes will be added where applicable. 

(**) Any customizations to our core product remain as property of BotMan LLC. 

Customer Responsibilities 

To ensure a seamless migration process, we require customers to: 

Clearly outline technology standards and preferences, including coding conventions, folder structures, libraries versions, or any other relevant guidelines. Codacle-generated code will strictly adhere to these standards. 

 

Provide secure access to their code repositories and test databases. 

 

Specify delivery preferences. By default, we deliver the migrated code directly to your repositories, but we can adapt to any CI/CD pipeline or deployment process you have, which may influence the overall price. 

 

In case functional tests are required from us, provide detailed descriptions of the required tests for each form, including available test data and access to a suitable testing environment. 

 

Guarantee and Policies 

Proof of Concept (POC): We do not offer POCs free of charge; however, we provide a 60-day money-back guarantee if the migrated application does not match the exact functionality of the original Delphi application.  

 

Desktop-specific Functionalities: Migrated screens will closely replicate original screens' appearance and functionality, except for desktop-specific behaviors that may require adaptation for web environments. For example, interaction with the user's local disk drive or with any other applications installed on the user's PC should be analyzed and might imply extra costs for designing and implementing an equivalent web-based functionality. 

 

Security 

All of our processes run on secured networks and computers. Your source code will be stored in those computers as well as on Microsoft Onedrive folders for the durations of the project. Afterwards, all copies will be deleted from our storage. 

We will send your code to LLMs in the cloud for processing and conversion. Our use of LLMs is restricted to APIs deployed by Azure, AWS and Google. In other words, we don’t go directly to OpenAI or Anthropic, we use Azure’s and AWS’ implementations instead. As of now, we do not use locally installed (for instance in your datacenters) open-source LLMs, because in our experience they don't offer enough intelligence for this kind of work. 

As for authorization and authentication, by default we use your existing schema. For instance, if you have tables with usernames, passwords and allowed access per user to certain functions in your systems, we will keep using those tables. However, we can integrate with other methods (like AD) or even create new ones from scratch for your project, subject to additional cost. 

 

Frequently Asked Questions 

Can we migrate to stacks other than Spring Boot and React? Yes, we can adapt the migration target to your desired technology stack for an additional fixed price as described in the pricing structure. 

 

What happens if additional functionalities need to be added during migration? Any additional functionalities or customizations outside the original scope will be quoted separately based on estimated effort. 

 

Will my code be replicated outside my organization? Yes, part of our process is that we will need a copy of your code in order to perform the migration. If you have special needs regarding this point, we can go over them. For instance, we can deploy our tools in servers or virtual desktops inside your network and run all our processes from there, although it will require additional effort and cost. The LLM calls needed for the understanding and conversion of code will always be via cloud providers (Google, Azure, AWS). 

 

Can you use local LLMs such as LLaMa instead of going to the cloud? We don’t currently support local LLMs. The reason is that the quality of the generated code remains significantly better when using frontier LLMs on the cloud. 

Do you support continuous integration and deployment pipelines? Absolutely. We adapt to your existing pipelines and processes, delivering the code accordingly. 

 

What if our application has complex desktop-specific behaviors? We will assess and propose necessary adaptations, clearly communicating any impact on pricing or delivery timelines. 

 

How long does a typical migration take? Timelines vary based on application complexity and size, but you can typically expect: 

 

6 weeks for setup 

1 application of average size (10 screens, 10 database tables) every 3 days 

The project start date will depend on our workload at the time, the typical wait time will be between 1 and 3 months 

It is important to note that this time frame can vary depending on the Client's availability to provide test scenarios, test data, do their own functional testing, as well as the speed of interaction that we can have from the Client’s side on any needed adjustments. In other words, this is our own speed, but we can adapt to yours as needed. 

 

Can we introduce functional improvements to the software? No, our process migrates functionalities exactly as they are today, applying the same business logic. To the end-user, the look and feel and the processes will remain the same (although web-based). On the inside though, the architecture will be totally renewed and the code will follow the client’s and industry's best practices. If you need to improve functionality, our recommendation is to first migrate the system as-is and in a second phase, make the necessary changes. We can collaborate on this second phase as a separate proposal 

 

Can you integrate the migrated system to external sources not used by the current version, like API portals or web applications? 

Not by default, but we can analyze the case and possibly perform the integration with extra cost. 

Next steps 

Contact us at info@botman-ai.com to discuss how Codacle can streamline your application's modernization. 

 
'''
