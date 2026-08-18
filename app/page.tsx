'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { useLanguage } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function Home() {
  const { t, locale } = useLanguage();
  
  // Mapeamento de traduções de categorias para injetar no JavaScript
  const categoryTranslations = {
    pt: {
      "Recuperação Estrutural": "Recuperação Estrutural",
      "Navios e Plataformas": "Navios e Plataformas",
      "Levantamento e Registro": "Levantamento e Registro",
      "Hidroelétricas e Barragens": "Hidroelétricas e Barragens",
      "Inspeção e Vistoria": "Inspeção e Vistoria",
      "Dragagem e Sondagem": "Dragagem e Sondagem",
      "Resgate e Salvatagem": "Resgate e Salvatagem",
      "Mergulho Especializado": "Mergulho Especializado",
      "Dutos e Cabos Submarinos": "Dutos e Cabos Submarinos",
      "Tratamento de Água": "Tratamento de Água"
    },
    en: {
      "Recuperação Estrutural": "Structural Recovery",
      "Navios e Plataformas": "Ships and Platforms",
      "Levantamento e Registro": "Survey and Recording",
      "Hidroelétricas e Barragens": "Hydroelectric Plants and Dams",
      "Inspeção e Vistoria": "Inspection and Survey",
      "Dragagem e Sondagem": "Dredging and Sounding",
      "Resgate e Salvatagem": "Rescue and Salvage",
      "Mergulho Especializado": "Specialized Diving",
      "Dutos e Cabos Submarinos": "Underwater Pipelines and Cables",
      "Tratamento de Água": "Water Treatment"
    },
    es: {
      "Recuperação Estrutural": "Recuperación Estructural",
      "Navios e Plataformas": "Buques y Plataformas",
      "Levantamento e Registro": "Levantamiento y Registro",
      "Hidroelétricas e Barragens": "Hidroeléctricas y Represas",
      "Inspeção e Vistoria": "Inspección y Revisión",
      "Dragagem e Sondagem": "Dragado y Sondeo",
      "Resgate e Salvatagem": "Rescate y Salvamento",
      "Mergulho Especializado": "Buceo Especializado",
      "Dutos e Cabos Submarinos": "Ductos y Cables Submarinos",
      "Tratamento de Água": "Tratamiento de Agua"
    }
  };
  
  // Atualizar traduções quando o idioma muda
  useEffect(() => {
    // Injetar traduções no objeto window para o JavaScript poder acessar
    (window as any).currentLocale = locale;
    (window as any).categoryTranslations = categoryTranslations[locale];
    (window as any).learnMoreText = t.services.learnMore;
    
    // Traduzir rawData baseado no locale
    const rawDataTranslations: any = {
      pt: null, // Usar dados originais em português
      en: {
        "Recuperação Estrutural": {
          title: "Structural Recovery",
          items: [
            {t:"Recovery of concrete and steel structures",c:"Specialized repairs on submerged surfaces.",l:"We execute advanced techniques to restore the structural integrity of concrete and steel elements affected by corrosion or mechanical wear in underwater environments. We use high-resistance materials that cure underwater, ensuring extended service life."},
            {t:"Structural reinforcement of load piles, sheet piles and slabs",c:"Increased capacity and structural safety.",l:"We develop precision structural reinforcements for load piles, sheet piles and wharf slabs. The process prevents structural collapse, recovers the original support capacity and adapts the port structure for larger loads."},
            {t:"Structural reinforcement of pillars, piles and bridges",c:"Stabilization and repair of bridge foundations.",l:"Focused on road and rail infrastructure, we perform reinforcement of pillars and bridge blocks subject to hydraulic erosion. We ensure foundation stability against the aggressive action of tides and river currents."},
            {t:"Structural recovery of piers and dolphins",c:"Maintenance of vital port structures.",l:"We work on the recovery of mooring and berthing dolphins, repairing damage caused by vessel impact and extreme salinity. We ensure the pier operates at maximum strength, reducing terminal downtime."},
            {t:"Epoxy mass application",c:"High anti-corrosive protection coatings.",l:"Professional application of underwater epoxy masses and resins to create an impenetrable barrier against corrosive agents. Ideal for filling cracks and definitive sealing of metal and concrete surfaces."},
            {t:"Concreting with high-performance mortar",c:"Underwater filling and molding.",l:"We perform immersed concreting using high-performance thixotropic mortars (grout), eliminating the need for drainage. Fast drying provides immediate resistance to structural repairs in docks and dams."},
            {t:"Concrete demolition",c:"Controlled removal of deteriorated structures.",l:"Through pneumatic and hydraulic hammers handled by specialized divers, we perform controlled demolition of damaged concrete underwater, safely preparing the area for new concreting."},
            {t:"Underwater cutting and welding of steel structures",c:"Maintenance and submerged metal assembly.",l:"We use oxy-cutting and wet arc welding equipment. Our welder divers are qualified to ensure resistant and watertight joints, essential in hull and platform repair."},
            {t:"Cold or hot rock breaking",c:"Dismantling and removal of rocks on the seabed.",l:"We operate in the deepening of navigation channels through the dismantling of submerged rocky massifs. Can be cold (mechanical breakers/chemical expansion) or hot (strictly controlled use of underwater explosives)."}
          ]
        },
        "Navios e Plataformas": {
          title: "Ships and Platforms",
          items: [
            {t:"Survey for docking replacement and extension",c:"Report issuance for ship classification societies.",l:"Through Underwater Inspection In Lieu of Dry-Docking (UWILD), we provide detailed reports accepted by international classification societies to extend ship deadlines at sea without immediate docking."},
            {t:"Plugging / Blanking",c:"Blocking ducts and valves for internal maintenance.",l:"External sealing technique for grids and sea chests using wood, steel or molded rubber plugs. Allows the ship's internal crew to perform dry valve maintenance with total safety."},
            {t:"Leak caulking",c:"Emergency sealing of breaches and cracks.",l:"Quick intervention to caulk hull fractures, using special wedges, neoprene blankets and fast-setting epoxy masses. Prevents forced stops, environmental pollution and shipwrecks."}
          ]
        },
        "Levantamento e Registro": {
          title: "Survey and Recording",
          items: [
            {t:"Underwater photography and filming",c:"Accurate visual sample of the underwater environment.",l:"Production of clear images (even in turbid waters) for environmental reports, benthic fauna inspections and historical records of cable and hull condition. Fast deliveries on digital media."},
            {t:"Topographic and cadastral surveys",c:"Rigorous mapping of submerged surroundings.",l:"Demarcation and positioning of notable points of nautical infrastructure. We cross external topographic data with underwater findings to generate a perfect as-built technical cadastre."},
            {t:"Bathymetry / Topobathymetry",c:"3D measurement and design of the seabed.",l:"Use of single-beam or multibeam echo sounders coupled with RTK GPS to determine depth and trace bottom relief. Crucial to certify port draft before docking large vessels."}
          ]
        },
        "Hidroelétricas e Barragens": {
          title: "Hydroelectric Plants and Dams",
          items: [
            {t:"Recovery and reinforcement of hydroelectric plants and dams",c:"Specialized civil maintenance for the electrical sector.",l:"Meticulous work to recover concrete face, treat expansion joints and seal infiltrations in dam structures, ensuring energy efficiency and safety before regulatory agencies."},
            {t:"Placement/removal of stop logs and panels",c:"Agile handling for water flow isolation.",l:"Complex operations with cranes and divers for insertion and removal of temporary gates (stop logs) and sealing panels, essential during turbine and spillway maintenance."},
            {t:"Cofferdam sealing",c:"Dry isolation for underwater works.",l:"We ensure cofferdam watertightness by applying sealing materials at the interface with the rocky bottom, allowing engineering teams to work dry with absolute safety inside the structures."},
            {t:"Metal caisson removal/placement",c:"Heavy structure maneuvering at power plants.",l:"Deep diving to guide and precisely lock heavy metal caissons on their rails, ensuring that the penstock sealing is executed flawlessly for scheduled maintenance."},
            {t:"Placement of bulkheads and steel cables",c:"Safety and mechanical containment systems.",l:"Installation of guide cables, protective screens and mechanical safety bulkheads. Ensures facility integrity against debris brought by hydraulic force and assists in equipment lowering."},
            {t:"Inspection of gates and sills",c:"Technical evaluation of hydraulic flow areas.",l:"Our divers traverse the entire length of sills and radial/wagon gates, identifying concrete wear, cavitation, sealing rubber failures and corrosion in vital components."},
            {t:"Tactile inspection of grids",c:"Integrity verification of the filtration system.",l:"In zero visibility environments or confined areas, we perform rigorous tactile contact inspections, mapping obstructions by logs, metal deformations and ensuring unimpeded flow to turbines."},
            {t:"Sealing panel survey",c:"Thorough checking against leaks and wear.",l:"Before drying a generating unit, we validate that panels are perfectly seated, checking peripheral seals to prevent accidents with sudden water entry."}
          ]
        },
        "Inspeção e Vistoria": {
          title: "Inspection and Survey",
          items: [
            {t:"Underwater visual inspection",c:"Direct analysis of hulls and foundations.",l:"The most effective way to evaluate preliminary damage. The technical diver reports target conditions in real time, providing essential information for repair planning."},
            {t:"Photo and video survey",c:"High definition multimedia recording.",l:"We use 4K underwater cameras and specialized lighting to create indisputable visual reports. Perfect for insurance purposes, ship damage documentation and work completion proof."},
            {t:"Inspection with surface monitoring",c:"Live tracking by engineering teams.",l:"The diver's helmet transmits bidirectional audio and real-time video to the surface. The client or engineer can follow the inspection on board and guide the diver throughout the operation."},
            {t:"Non-destructive testing",c:"Technical analysis without damaging the structure.",l:"Applications of techniques such as Ultrasonic Thickness Measurement (UT), Magnetic Particle and Systematic Visual Inspection to discover microcracks and wear degrees not visible to the naked eye."},
            {t:"Confined space surveys",c:"Inspection in galleries, ducts and closed tanks.",l:"Teams trained to enter extremely high-risk and spatial restriction environments. We use surface-controlled breathing equipment (bailout) to certify safety in plant galleries and aqueducts."},
            {t:"Supervision and administration in port works",c:"Quality control and technical progress of works.",l:"We act as the client's inspector below the waterline. We ensure that service providers execute work within the rigorous specifications required by engineering projects."},
            {t:"Issuance of descriptive inspection report",c:"Formal documentation with ART and technical signatures.",l:"All collected data is compiled into complete reports signed by responsible engineers. Include schematics, anomaly mapping, catalogued photographs and corrective recommendations."}
          ]
        },
        "Dragagem e Sondagem": {
          title: "Dredging and Sounding",
          items: [
            {t:"Dredging / Underwater Dredging",c:"Desilting and deepening of channels.",l:"Using submersible suction pumps handled by divers, we remove mud, sand and accumulated debris in berthing berths, piers and water intakes where large dredges have no access."},
            {t:"Soundings",c:"Reconnaissance survey of the seabed.",l:"Percussion soundings or SPT (Standard Penetration Test) performed on barges or at low tides to characterize marine subsoil resistance, enabling port foundation and platform design."},
            {t:"Material collection",c:"Soil and sediment sampling focused on reports.",l:"We collect undisturbed samples from the seabed for analysis in environmental laboratories, determining contamination degree, soil type and ensuring necessary licenses for marine interventions."},
            {t:"Pile driving monitoring",c:"Guidance and alignment during foundation works.",l:"We monitor and guide, directly from the bottom, the heavy maneuvers of pile-driving hammers, ensuring that the metal sleeve does not hit obstructions and follows the designed plumb in the work."}
          ]
        },
        "Resgate e Salvatagem": {
          title: "Rescue and Salvage",
          items: [
            {t:"Naval Rescue and Salvage",c:"Vessel refloating and disaster mitigation.",l:"Complex operations focused on bringing sunken boats and ships to the surface, using air parachutes (lift bags), hull sealing and large pumping. We act with extreme urgency in port protection."},
            {t:"Search, removal and salvage of floating structures",c:"Channel cleaning and location of lost assets.",l:"Systematic search for containers, anchors, propellers and machinery parts lost during navigation. Heavy mooring and technical hoisting, returning valuable assets and freeing waterway flow."}
          ]
        },
        "Mergulho Especializado": {
          title: "Specialized Diving",
          items: [
            {t:"Diving in contaminated waters",c:"Extreme risk diving with full protection (HazMat).",l:"Performed in sewers, chemical stations and spill areas. The professional uses hermetic vulcanized suits and dry-suit helmets to avoid any dermal contact or inhalation of present toxins."},
            {t:"Maintenance in paper and cellulose factories",c:"Support to vital systems of the industrial complex.",l:"Execution of critical repairs without interrupting factory production. We unclog industrial chutes, clean thick settling tanks and maintain raw water intake pumps."}
          ]
        },
        "Dutos e Cabos Submarinos": {
          title: "Underwater Pipelines and Cables",
          items: [
            {t:"Inspection, launch and maintenance of outfalls",c:"Comprehensive care for coastal sanitation systems.",l:"We install gigantic pipes on the seabed, perform ballasting with concrete blocks (saddles) and keep diffusers free of barnacles to ensure proper dispersion of treated effluents."},
            {t:"Oil/Gas/Slurry Pipelines",c:"Specialized support for oil and gas infrastructure.",l:"Launch and burial of flexible pipes (rigid and spools) focused on interconnecting wells to the coastal terminal. We perform monitoring against scour (erosion around the pipe) and repairs on thermal coatings."},
            {t:"Submarine electrical cables",c:"Uninterrupted and protected energy connection.",l:"Supervision of power cable descent between continents and islands. We act in protecting extremities near the surf zone with articulated cast iron pipes to avoid extreme abrasion."},
            {t:"Fiber optic cables",c:"Mapping and rescue of telecommunications cables.",l:"Highly trained divers to track buried optical cables. We act in unsticking, rescuing to the surface and new burial (jetting) of intercontinental internet lines."}
          ]
        },
        "Tratamento de Água": {
          title: "Water Treatment",
          items: [
            {t:"Service in WTP (Water/Sewage Treatment Plant)",c:"Cleaning and recovery of sanitation assets.",l:"Underwater operations in reactors, aeration tanks and settlers. We perform sludge removal, scraper repair and air diffuser replacement without the need to dry the tank, maintaining public supply."}
          ]
        }
      },
      es: {
        "Recuperação Estrutural": {
          title: "Recuperación Estructural",
          items: [
            {t:"Recuperación de estructuras de hormigón y acero",c:"Reparaciones especializadas en superficies sumergidas.",l:"Ejecutamos técnicas avanzadas para restaurar la integridad estructural de elementos de hormigón y acero afectados por corrosión o desgaste mecánico en ambientes subacuáticos. Utilizamos materiales de alta resistencia que curan bajo el agua, garantizando una vida útil prolongada."},
            {t:"Refuerzo estructural de pilotes de carga, tablestacas y losas",c:"Aumento de capacidad y seguridad estructural.",l:"Desarrollamos refuerzos estructurales de precisión para pilotes de carga, tablestacas y losas de muelle. El proceso previene el colapso estructural, recupera la capacidad de soporte original y adecua la estructura portuaria para cargas mayores."},
            {t:"Refuerzo estructural de pilares, pilotes y puentes",c:"Estabilización y reparación de fundaciones de puentes.",l:"Enfocados en infraestructura vial y ferroviaria, realizamos el refuerzo de pilares y bloques de puentes sujetos a erosión hidráulica. Garantizamos la estabilidad de la fundación contra la acción agresiva de mareas y corrientes fluviales."},
            {t:"Recuperación estructural de muelles y delfines",c:"Mantenimiento de estructuras portuarias vitales.",l:"Actuamos en la recuperación de delfines de atraque y amarre, reparando daños causados por el impacto de embarcaciones y salinidad extrema. Aseguramos que el muelle opere con fuerza máxima, reduciendo tiempo de inactividad en el terminal."},
            {t:"Aplicación de masa epoxi",c:"Revestimientos de alta protección anticorrosiva.",l:"Aplicación profesional de masas y resinas epoxi subacuáticas para crear una barrera impenetrable contra agentes corrosivos. Ideal para el relleno de fisuras y sellado definitivo de superficies metálicas y de hormigón."},
            {t:"Hormigonado con mortero de alto desempeño",c:"Relleno y moldeo subacuático.",l:"Realizamos hormigonados inmersos utilizando morteros tixotrópicos (grout) de altísimo desempeño, prescindiendo de la necesidad de drenaje. El secado rápido promueve resistencia inmediata a las reparaciones estructurales en diques y represas."},
            {t:"Demolición de hormigón",c:"Remoción controlada de estructuras deterioradas.",l:"A través de martillos neumáticos e hidráulicos manejados por buzos especializados, efectuamos la demolición controlada de hormigón averiado bajo el agua, preparando el área de forma segura para el nuevo hormigonado."},
            {t:"Corte y soldadura submarina en estructuras de acero",c:"Mantenimiento y montaje metálico inmerso.",l:"Utilizamos equipos de oxicorte y soldadura por arco eléctrico húmedo (wet welding). Nuestros buzos soldadores están calificados para garantizar uniones resistentes y estancas, indispensables en la reparación de cascos y plataformas."},
            {t:"Desmonte en frío o en caliente",c:"Desmonte y remoción de rocas en el fondo del mar.",l:"Operamos en la profundización de canales de navegación a través del desmonte de macizos rocosos sumergidos. Puede ser en frío (rompedores mecánicos/expansión química) o en caliente (uso rigurosamente controlado de explosivos subacuáticos)."}
          ]
        },
        "Navios e Plataformas": {
          title: "Buques y Plataformas",
          items: [
            {t:"Inspección para sustitución y extensión de dique",c:"Emisión de informe para clasificadoras de buques.",l:"A través de la Inspección Submarina en Lugar de Dique (UWILD), proporcionamos informes detallados aceptados por las sociedades clasificadoras internacionales para extender el plazo de buques en el mar sin necesidad de dique inmediato."},
            {t:"Taponamiento / Obturación",c:"Bloqueo de ductos y válvulas para mantenimiento interno.",l:"Técnica de sellado externo de rejillas y tomas de mar (sea chests) usando tapones de madera, acero o caucho moldeado. Permite que el equipo interno del buque realice el mantenimiento de válvulas en seco con total seguridad."},
            {t:"Calafateo de fugas",c:"Estancamiento emergencial de brechas y fisuras.",l:"Intervención rápida para calafatear fracturas en el casco, utilizando cuñas especiales, mantas de neopreno y masas epoxi de fijación rápida. Evita paradas forzadas, contaminación ambiental y naufragios."}
          ]
        },
        "Levantamento e Registro": {
          title: "Levantamiento y Registro",
          items: [
            {t:"Fotografía y filmación subacuática",c:"Muestra visual precisa del ambiente submarino.",l:"Producción de imágenes nítidas (incluso en aguas turbias) para informes ambientales, inspecciones de fauna bentónica y registros históricos de la condición de cables y cascos. Entregas rápidas en medios digitales."},
            {t:"Levantamientos topográficos y catastrales",c:"Mapeo riguroso del entorno sumergido.",l:"Demarcación y posicionamiento de puntos notables de la infraestructura náutica. Cruzamos los datos topográficos externos con los hallazgos subacuáticos para generar un catastro técnico as-built perfecto."},
            {t:"Batimetría / Topobatimetría",c:"Medición y diseño en 3D del lecho marino.",l:"Uso de ecosondas de haz simple o multihaz aliadas a GPS RTK para determinar la profundidad y trazar el relieve del fondo. Crucial para certificar el calado de puertos antes de atracar grandes embarcaciones."}
          ]
        },
        "Hidroelétricas e Barragens": {
          title: "Hidroeléctricas y Represas",
          items: [
            {t:"Recuperación y refuerzo de hidroeléctricas y represas",c:"Mantenimiento civil especializado para el sector eléctrico.",l:"Trabajos meticulosos para recuperar la cara de hormigón, tratar juntas de dilatación y sellar infiltraciones en estructuras de represamiento, garantizando la eficiencia energética y la seguridad ante los organismos fiscalizadores."},
            {t:"Colocación/retirada de stop logs y paneles",c:"Manejo ágil para aislamiento de flujo de agua.",l:"Operaciones complejas con grúas y buzos para inserción y remoción de compuertas temporarias (stop logs) y paneles de sellado, esenciales durante los mantenimientos de las turbinas y vertederos."},
            {t:"Sellado de ataguías",c:"Aislamiento en seco para obras sumergidas.",l:"Garantizamos la estanqueidad de ataguías aplicando materiales de sellado en la interfaz con el fondo rocoso, permitiendo que los equipos de ingeniería trabajen en seco con seguridad absoluta en el interior de las estructuras."},
            {t:"Retirada/colocación de cajón metálico",c:"Maniobra de estructuras pesadas en centrales.",l:"Buceo profundo para guiar y trabar con precisión los pesados cajones metálicos en sus rieles, garantizando que el sellado del conducto forzado sea ejecutado sin fallas para mantenimientos programados."},
            {t:"Colocación de mamparos y cables de acero",c:"Seguridad y sistemas de contención mecánica.",l:"Instalación de cables guía, mallas de protección y mamparos mecánicos de seguridad. Asegura la integridad de las instalaciones contra detritos traídos por la fuerza hídrica y auxilia en la bajada de equipos."},
            {t:"Inspección en compuertas y soleras",c:"Evaluación técnica de las áreas de flujo hídrico.",l:"Nuestros buzos recorren toda la extensión de soleras y compuertas radiales/vagón, identificando desgastes en el hormigón, cavitación, fallas en las gomas de sellado y corrosión en componentes vitales."},
            {t:"Inspección táctil en rejillas",c:"Verificación de la integridad del sistema de filtrado.",l:"En ambientes de visibilidad cero o áreas confinadas, realizamos inspecciones rigurosas por contacto táctil, mapeando obstrucciones por troncos, deformaciones en el metal y garantizando el flujo libre para las turbinas."},
            {t:"Inspección en paneles de sellado",c:"Chequeo minucioso contra fugas y desgastes.",l:"Antes del secado de una unidad generadora, validamos si los paneles están perfectamente asentados, chequeando los sellados periféricos para evitar accidentes con la súbita entrada de agua."}
          ]
        },
        "Inspeção e Vistoria": {
          title: "Inspección y Revisión",
          items: [
            {t:"Inspección visual submarina",c:"Análisis directo de cascos y fundaciones.",l:"El modo más eficaz de evaluar averías preliminares. El buzo técnico relata las condiciones del objetivo en tiempo real, proporcionando información esencial para la planificación de reparaciones."},
            {t:"Inspección con foto y video",c:"Registro multimedia de alta definición.",l:"Utilizamos cámaras subacuáticas 4K e iluminación especializada para crear un informe visual indiscutible. Perfecto para fines de seguros, documentación de averías en buques y comprobación de término de obra."},
            {t:"Inspección con monitoreo de superficie",c:"Acompañamiento en vivo por los equipos de ingeniería.",l:"El casco del buzo transmite audio bidireccional y video en tiempo real a la superficie. El cliente o ingeniero puede acompañar la inspección a bordo y orientar al buzo durante toda la operación."},
            {t:"Ensayos no destructivos",c:"Análisis técnico sin dañar la estructura.",l:"Aplicaciones de técnicas como Medición de Espesor por Ultrasonido (UT), Partículas Magnéticas e Inspección Visual Sistematizada para descubrir microfisuras y grados de desgaste no visibles a simple vista."},
            {t:"Inspecciones en ambientes confinados",c:"Inspección en galerías, ductos y tanques cerrados.",l:"Equipos entrenados para adentrarse en ambientes de altísimo riesgo y restricción espacial. Utilizamos equipos de respiración controlados por la superficie (bailout) para atestar la seguridad en galerías de centrales y acueductos."},
            {t:"Fiscalización y administración en obras portuarias",c:"Control de calidad y avance técnico de obras.",l:"Actuamos como el fiscal del cliente debajo de la línea de agua. Garantizamos que los prestadores de servicio ejecuten el trabajo dentro de las rigurosas especificaciones exigidas por los proyectos de ingeniería."},
            {t:"Emisión de informe descriptivo de inspección",c:"Documentación formal con ART y firmas técnicas.",l:"Todos los datos recolectados son compilados en informes completos firmados por ingenieros responsables. Incluyen esquemas, mapeo de anomalías, fotografías catalogadas y recomendaciones correctivas."}
          ]
        },
        "Dragagem e Sondagem": {
          title: "Dragado y Sondeo",
          items: [
            {t:"Dragado / Dragado Subacuático",c:"Desazolve y profundización de canales.",l:"Utilizando bombas de succión sumergibles manejadas por los buzos, removemos lodo, arena y detritos acumulados en amarraderos, muelles y captaciones de agua donde dragas grandes no tienen acceso."},
            {t:"Sondeos",c:"Investigación de reconocimiento del fondo del mar.",l:"Sondeos a percusión o SPT (Standard Penetration Test) realizados sobre balsas o en mareas bajas para caracterizar la resistencia del subsuelo marino, viabilizando el proyecto de fundaciones portuarias y plataformas."},
            {t:"Colecta de material",c:"Muestreo de suelo y sedimentos enfocado en informes.",l:"Recolectamos muestras indeformadas del fondo del mar para análisis en laboratorios ambientales, determinando el grado de contaminación, tipo de suelo y garantizando las licencias necesarias para intervenciones marinas."},
            {t:"Acompañamiento de hincado de pilotes",c:"Orientación y alineamiento durante obras de fundación.",l:"Monitoreamos y orientamos, directamente desde el fondo, las pesadas maniobras de los martillos de hincado de pilotes, certificando que la camisa metálica no alcance obstrucciones y siga el plomo proyectado en la obra."}
          ]
        },
        "Resgate e Salvatagem": {
          title: "Rescate y Salvamento",
          items: [
            {t:"Rescate y Salvamento Naval",c:"Reflotación de embarcaciones y mitigación de desastres.",l:"Operaciones complejas enfocadas en traer a la superficie botes y buques hundidos, utilizando paracaídas de aire (lift bags), sellado de cascos y gran bombeo. Actuamos con extrema urgencia en la protección portuaria."},
            {t:"Búsqueda, remoción y salvamento de estructuras flotantes",c:"Limpieza de canales y localización de activos perdidos.",l:"Búsqueda sistemática de contenedores, anclas, hélices y partes de maquinaria perdidas durante la navegación. Amarre pesado e izado técnico, devolviendo activos valiosos y liberando el flujo acuático."}
          ]
        },
        "Mergulho Especializado": {
          title: "Buceo Especializado",
          items: [
            {t:"Buceo en aguas contaminadas",c:"Buceo de extremo riesgo con protección total (HazMat).",l:"Realizado en alcantarillas, estaciones químicas y áreas de derrame. El profesional utiliza trajes vulcanizados herméticos y cascos dry-suit para evitar cualquier contacto dérmico o inhalación de las toxinas presentes."},
            {t:"Mantenimiento en fábricas de papel y celulosa",c:"Apoyo a sistemas vitales del polo industrial.",l:"Ejecución de reparaciones críticas sin interrumpir la producción de la fábrica. Desobstruimos canales industriales, limpiamos tanques de decantación espesos y mantenemos las bombas de captación de agua bruta (raw water)."}
          ]
        },
        "Dutos e Cabos Submarinos": {
          title: "Ductos y Cables Submarinos",
          items: [
            {t:"Inspección, lanzamiento y mantenimiento de emisarios",c:"Cuidado integral con sistemas de saneamiento costero.",l:"Instalamos tuberías gigantescas en el fondo del mar, realizamos lastrado con bloques de hormigón (saddles) y mantenemos los difusores libres de cracas para garantizar la correcta dispersión de efluentes tratados."},
            {t:"Oleoductos/Gasoductos/Eslamoductos",c:"Soporte especializado a la infraestructura de petróleo y gas.",l:"Lanzamiento y enterramiento de ductos flexibles (rígidos y spools) enfocados en la interconexión de pozos al terminal costero. Realizamos monitoreo contra scour (erosión alrededor del tubo) y reparaciones en revestimientos térmicos."},
            {t:"Cables eléctricos submarinos",c:"Conexión de energía ininterrumpida y protegida.",l:"Supervisión de la bajada de cables de fuerza entre continentes e islas. Actuamos en la protección de las extremidades cerca de la zona de rompientes con tubos articulados en hierro fundido para evitar abrasión extrema."},
            {t:"Cables de fibra óptica",c:"Mapeo y rescate de cables de telecomunicaciones.",l:"Buzos altamente entrenados para rastrear cables ópticos enterrados. Actuamos en el desencalle, rescate a la superficie y nuevo enterramiento (jetting) de las líneas de internet intercontinentales."}
          ]
        },
        "Tratamento de Água": {
          title: "Tratamiento de Agua",
          items: [
            {t:"Servicio en ETE (Estación de Tratamiento de Aguas/Residuales)",c:"Limpieza y recuperación de activos de saneamiento.",l:"Operaciones subacuáticas en reactores, tanques de aireación y decantadores. Hacemos la remoción de lodo, arreglo de raspadores y cambio de difusores de aire sin la necesidad de secar el tanque, manteniendo el abastecimiento público."}
          ]
        }
      }
    };
    
    (window as any).rawDataTranslations = rawDataTranslations;
    
    // Re-renderizar os botões e cards se eles já existirem
    if (typeof (window as any).renderizarBotoes === 'function') {
      (window as any).renderizarBotoes();
    }
    if (typeof (window as any).renderizarCards === 'function') {
      (window as any).renderizarCards();
    }
  }, [locale, t]);
  
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .card-transition { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-expanded { width: 100% !important; max-width: 900px; }
        .expanded-content { display: none !important; }
        .card-expanded .normal-content { display: none !important; }
        .card-expanded .expanded-content { display: flex !important; }
        .dropdown-bridge { padding-top: 1.5rem; }
        .dot-transition { transition: all 0.3s ease; }
        
        /* Animações */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <Script id="tailwind-config" strategy="beforeInteractive">
        {`
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  dark: '#0E1A2B',
                  panel: '#15253F',
                  primary: '#223A5E',
                  accent: '#E19747',
                  light: '#8FB3FF',
                  whiteish: '#F3F6FF'
                },
                fontFamily: {
                  sans: ['Oswald', 'sans-serif'],
                }
              }
            }
          }
        `}
      </Script>

      <div className="bg-dark text-whiteish font-sans overflow-x-hidden">
        {/* HEADER */}
        <header className="fixed top-0 w-full z-50 bg-[#0E1A2B] shadow-lg flex items-center justify-between px-4 md:px-10 py-3 md:py-4 animate-slideDown">
          <div className="flex items-center gap-4 md:gap-12">
            <div className="relative animate-fadeIn">
              <button id="menu-btn" className="text-white hover:text-accent transition-colors flex flex-col gap-1 md:gap-1.5">
                <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
                <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
                <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
              </button>
              <div id="dropdown" className="hidden absolute top-full left-0 mt-5 md:mt-6 w-56 bg-[#223A5E] shadow-2xl border border-dark rounded-b-md overflow-hidden flex-col z-50">
                <a href="/sobre-nos" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">{t.nav.aboutUs}</a>
                <a href="#servicos" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg md:hidden">{t.nav.services.toUpperCase()}</a>
                <a href="/fale-conosco" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg md:hidden">{t.nav.contactUs}</a>
                <a href="/sobre-nos#clientes" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">{t.nav.clients}</a>
                <a href="/sobre-nos#parceiros" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">{t.nav.partners}</a>
                <a href="/sobre-nos#galeria" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium text-lg">{t.nav.gallery}</a>
              </div>
            </div>
            <nav className="flex gap-4 md:gap-8 font-bold tracking-wider text-sm md:text-xl uppercase items-center h-full mt-1 animate-fadeIn animate-delay-100">
              <div className="relative group">
                <a href="#servicos" className="hover:text-accent transition-colors text-white py-2 block">{t.nav.services}</a>
                <div id="desktop-dropdown-menu" className="absolute top-full left-0 hidden md:group-hover:block dropdown-bridge z-50">
                  <div className="w-72 bg-[#15253F] shadow-2xl border border-dark rounded-md overflow-hidden flex flex-col">
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Recuperação Estrutural">{t.services.categories.structural}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Navios e Plataformas">{t.services.categories.ships}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Levantamento e Registro">{t.services.categories.survey}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Hidroelétricas e Barragens">{t.services.categories.hydroelectric}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Inspeção e Vistoria">{t.services.categories.inspection}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Dragagem e Sondagem">{t.services.categories.dredging}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Resgate e Salvatagem">{t.services.categories.rescue}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Mergulho Especializado">{t.services.categories.diving}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Dutos e Cabos Submarinos">{t.services.categories.pipelines}</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide" data-service="Tratamento de Água">{t.services.categories.water}</button>
                  </div>
                </div>
              </div>
              <a href="/fale-conosco" className="hover:text-accent transition-colors text-white py-2 block">{t.nav.contactUs}</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="cursor-pointer hover:opacity-80 transition-opacity animate-fadeIn animate-delay-200" onClick={() => window.scrollTo(0,0)}>
              <img src="/images/logo-atlatico-vector.png" alt="Atlântico Logo" className="h-10 md:h-14 object-contain" />
            </div>
            <LanguageSwitcher />
          </div>
        </header>

        {/* HERO PAGE */}
        <section id="hero" className="relative h-screen w-full flex items-end pb-20 justify-start px-6 md:px-10 pt-24">
          <div className="absolute inset-0 z-0">
            <img src="/images/WhatsApp Image 2026-08-07 at 23.07.57.jpeg" alt="Salvamento Marítimo Atlântico" className="w-full h-full object-cover animate-fadeIn" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
            <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <img src="/images/logo-top.png" alt="Atlântico" className="w-full max-w-3xl h-auto mb-4 animate-slideInLeft" />
            <p className="text-lg md:text-2xl font-light tracking-widest text-gray-300 animate-slideInLeft animate-delay-200">{t.hero.subtitle}</p>
          </div>
        </section>

        {/* SEÇÃO DE SERVIÇOS */}
        <section id="servicos" className="relative min-h-screen py-16 overflow-hidden flex flex-col items-center bg-dark">
          <div id="service-bg" className="absolute inset-0 z-0 transition-all duration-700 opacity-30">
            <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1400px] px-2 md:px-4 flex flex-col h-full">
            <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-6 shadow-lg border border-primary/50 self-start ml-2 md:ml-10 animate-fadeInUp">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">{t.services.title}</h2>
            </div>
            <div id="categories-container" className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-8 px-2 md:px-10 w-full animate-fadeInUp animate-delay-200">
            </div>
            <div className="relative flex-grow flex flex-col items-center justify-center w-full">
              <div className="relative w-full flex items-center justify-center">
                <button onClick={() => (window as any).moveCarousel(-1)} className="absolute left-0 md:left-4 z-20 text-4xl md:text-7xl text-white/40 hover:text-accent transition-colors">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div id="carousel-track" className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full px-10 md:px-24 py-4 md:py-6 items-center min-h-[450px] md:min-h-[500px]">
                </div>
                <button onClick={() => (window as any).moveCarousel(1)} className="absolute right-0 md:right-4 z-20 text-4xl md:text-7xl text-white/40 hover:text-accent transition-colors">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
              <div id="carousel-dots" className="flex justify-center gap-2 pb-4 h-6 mt-4"></div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="footer" className="bg-[#0a1320] py-8 border-t border-primary px-6 relative z-10 flex flex-col items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
            <a href="https://maps.google.com/?q=Rua+Bittencourt,+25+Vila+Nova+-+Santos/SP" target="_blank" className="flex items-center gap-3 hover:text-accent transition-colors group">
              <i className="fa-solid fa-location-dot text-2xl group-hover:-translate-y-1 transition-transform"></i>
              <div className="leading-tight text-left">
                <p className="font-bold text-base md:text-lg">Rua Bittencourt, 25</p>
                <p className="text-xs md:text-sm text-gray-400">Vila Nova - Santos/SP</p>
              </div>
            </a>
            <a href="tel:+551332212222" className="flex items-center gap-3 hover:text-accent transition-colors group">
              <i className="fa-solid fa-phone text-2xl group-hover:rotate-12 transition-transform"></i>
              <span className="font-bold text-lg md:text-xl">55 13 3221.2222</span>
            </a>
            <a href="mailto:atlanticosts@atlanticosts.com.br" className="flex items-center gap-3 hover:text-accent transition-colors group">
              <i className="fa-solid fa-envelope text-2xl group-hover:-translate-y-1 transition-transform"></i>
              <span className="font-bold text-sm md:text-lg">atlanticosts@atlanticosts.com.br</span>
            </a>
          </div>
          <div className="text-center mt-8 text-xs text-gray-500">{t.footer.copyright}</div>
        </footer>
      </div>

      <Script id="servicos-completo" strategy="afterInteractive">
        {`
// Executar quando o script carregar com pequeno delay
setTimeout(function() {
  console.log('Iniciando script de serviços...');

// Controle dos Menus
const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown');
const mobileLinks = document.querySelectorAll('.mobile-link');
const dropdownServiceLinks = document.querySelectorAll('.dropdown-service-link');
const desktopDropdownMenu = document.getElementById('desktop-dropdown-menu');

console.log('Elementos encontrados:', {
  menuBtn: !!menuBtn,
  dropdown: !!dropdown,
  mobileLinks: mobileLinks.length,
  dropdownServiceLinks: dropdownServiceLinks.length,
  desktopDropdownMenu: !!desktopDropdownMenu
});

if (menuBtn && dropdown) {
  menuBtn.addEventListener('click', () => { 
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('flex');
  });

  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
      dropdown.classList.remove('flex');
    }
  });
}

if (mobileLinks) {
  mobileLinks.forEach(link => link.addEventListener('click', () => {
    if (dropdown) {
      dropdown.classList.add('hidden');
      dropdown.classList.remove('flex');
    }
  }));
}

// Dados dos serviços
const rawData = {
  "Recuperação Estrutural": [
    {t:"Recuperação de estruturas em concreto e aço",c:"Reparos especializados em superfícies submersas.",l:"Executamos técnicas avançadas para restaurar a integridade estrutural de elementos em concreto e aço afetados pela corrosão ou desgaste mecânico em ambientes subaquáticos. Utilizamos materiais de alta resistência que curam debaixo d'água, garantindo vida útil prolongada."},
    {t:"Reforço estrutural de estacas de carga, prancha e laje",c:"Aumento da capacidade e segurança estrutural.",l:"Desenvolvemos reforços estruturais de precisão para estacas de carga, estacas prancha e lajes de cais. O processo previne o colapso estrutural, recupera a capacidade de sustentação original e adequa a estrutura portuária para cargas maiores."},
    {t:"Reforço estrutural de pilares, estacas e pontes",c:"Estabilização e reparo de fundações de pontes.",l:"Focados na infraestrutura viária e ferroviária, realizamos o reforço de pilares e blocos de pontes sujeitos à erosão hidráulica. Garantimos a estabilidade da fundação contra a ação agressiva das marés e correntezas fluviais."},
    {t:"Recuperação estrutural de píer e dolfins",c:"Manutenção de estruturas portuárias vitais.",l:"Atuamos na recuperação de dolfins de atracação e amarração, reparando danos causados pelo impacto de embarcações e salinidade extrema. Asseguramos que o píer opere com força máxima, reduzindo tempo de inatividade no terminal."},
    {t:"Aplicação de massa epóxi",c:"Revestimentos de alta proteção anticorrosiva.",l:"Aplicação profissional de massas e resinas epóxi subaquáticas para criar uma barreira impenetrável contra agentes corrosivos. Ideal para o preenchimento de fissuras e selamento definitivo de superfícies metálicas e de concreto."},
    {t:"Concretagem com argamassa de alto desempenho",c:"Preenchimento e moldagem subaquática.",l:"Realizamos concretagens imersas utilizando argamassas tixotrópicas (grout) de altíssimo desempenho, dispensando a necessidade de drenagem. A secagem rápida promove resistência imediata aos reparos estruturais em docas e barragens."},
    {t:"Demolição de concreto",c:"Remoção controlada de estruturas deterioradas.",l:"Através de marteletes pneumáticos e hidráulicos manuseados por mergulhadores especializados, efetuamos a demolição controlada de concreto avariado sob a água, preparando a área de forma segura para a nova concretagem."},
    {t:"Corte e solda submarina em estruturas de aço",c:"Manutenção e montagem metálica imersa.",l:"Utilizamos equipamentos de oxi-corte e soldagem a arco elétrico molhado (wet welding). Nossos mergulhadores soldadores são qualificados para garantir uniões resistentes e estanques, indispensáveis no reparo de cascos e plataformas."},
    {t:"Derrocagem a frio ou a fogo",c:"Desmonte e remoção de rochas no fundo do mar.",l:"Operamos no aprofundamento de canais de navegação através do desmonte de maciços rochosos submersos. Podendo ser a frio (rompedores mecânicos/expansão química) ou a fogo (uso rigorosamente controlado de explosivos subaquáticos)."}
  ],
  "Hidroelétricas e Barragens": [
    {t:"Recuperação e reforço de hidrelétricas e barragens",c:"Manutenção civil especializada para o setor elétrico.",l:"Trabalhos meticulosos para recuperar a face de concreto, tratar juntas de dilatação e selar infiltrações em estruturas de represamento, garantindo a eficiência energética e a segurança perante os órgãos fiscalizadores."},
    {t:"Colocação/retirada de stop logs e painéis",c:"Manejo ágil para isolamento de fluxo d'água.",l:"Operações complexas com guindastes e mergulhadores para inserção e remoção de comportas temporárias (stop logs) e painéis de vedação, essenciais durante as manutenções das turbinas e vertedouros."},
    {t:"Vedação de ensecadeiras",c:"Isolamento a seco para obras submersas.",l:"Garantimos a estanqueidade de ensecadeiras aplicando materiais de selagem na interface com o fundo rochoso, permitindo que as equipes de engenharia trabalhem a seco com segurança absoluta no interior das estruturas."},
    {t:"Retirada/colocação de caixão metálico",c:"Manobra de estruturas pesadas em usinas.",l:"Mergulho profundo para guiar e travar com precisão os pesados caixões metálicos em seus trilhos, garantindo que a vedação do conduto forçado seja executada sem falhas para manutenções programadas."},
    {t:"Colocação de anteparos e cabos de aço",c:"Segurança e sistemas de contenção mecânica.",l:"Instalação de cabos guia, telas de proteção e anteparos mecânicos de segurança. Assegura a integridade das instalações contra detritos trazidos pela força hídrica e auxilia na descida de equipamentos."},
    {t:"Inspeção em comportas e soleiras",c:"Avaliação técnica das áreas de vazão hídrica.",l:"Nossos mergulhadores percorrem toda a extensão de soleiras e comportas radiais/vagão, identificando desgastes no concreto, cavitação, falhas nas borrachas de vedação e corrosão em componentes vitais."},
    {t:"Inspeção tátil nas grades",c:"Verificação da integridade do sistema de filtragem.",l:"Em ambientes de visibilidade zero ou áreas confinadas, realizamos inspeções rigorosas por contato tátil, mapeando obstruções por troncos, deformações no metal e garantindo o fluxo desimpedido para as turbinas."},
    {t:"Vistoria em painéis de vedação",c:"Checagem minuciosa contra vazamentos e desgastes.",l:"Antes da secagem de uma unidade geradora, validamos se os painéis estão perfeitamente assentados, checando as vedações periféricas para evitar acidentes com a súbita entrada de água."}
  ],
  "Inspeção e Vistoria": [
    {t:"Inspeção visual submarina",c:"Análise direta de cascos e fundações.",l:"O modo mais eficaz de avaliar avarias preliminares. O mergulhador técnico relata as condições do alvo em tempo real, fornecendo informações essenciais para o planejamento de reparos."},
    {t:"Vistoria com foto e vídeo",c:"Registro multimídia de alta definição.",l:"Utilizamos câmeras subaquáticas 4K e iluminação especializada para criar um laudo visual indiscutível. Perfeito para fins de seguros, documentação de avarias em navios e comprovação de término de obra."},
    {t:"Inspeção com monitoramento de superfície",c:"Acompanhamento ao vivo pelas equipes de engenharia.",l:"O capacete do mergulhador transmite áudio bidirecional e vídeo em tempo real para a superfície. O cliente ou engenheiro pode acompanhar a inspeção a bordo e orientar o mergulhador durante toda a operação."},
    {t:"Ensaios não destrutivos",c:"Análise técnica sem danificar a estrutura.",l:"Aplicações de técnicas como Medição de Espessura por Ultrassom (ME), Partículas Magnéticas e Inspeção Visual Sistematizada para descobrir microfissuras e graus de desgaste não visíveis a olho nu."},
    {t:"Vistorias em ambientes confinados",c:"Inspeção em galerias, dutos e tanques fechados.",l:"Equipes treinadas para adentrar ambientes de altíssimo risco e restrição espacial. Utilizamos equipamentos de respiração controlados pela superfície (bailout) para atestar a segurança em galerias de usinas e adutoras."},
    {t:"Fiscalização e administração em obras portuárias",c:"Controle de qualidade e avanço técnico de obras.",l:"Agimos como o fiscal do cliente abaixo da linha d'água. Garantimos que os prestadores de serviço executem o trabalho dentro das rigorosas especificações exigidas pelos projetos de engenharia."},
    {t:"Emissão de relatório descritivo de inspeção",c:"Documentação formal com ART e assinaturas técnicas.",l:"Todos os dados coletados são compilados em relatórios completos assinados por engenheiros responsáveis. Incluem esquemas, mapeamento de anomalias, fotografias catalogadas e recomendações corretivas."}
  ],
  "Navios e Plataformas": [
    {t:"Vistoria para substituição e extensão de docagem",c:"Emissão de laudo para classificadoras de navios.",l:"Através da Inspeção Submarina em Lugar de Docagem (UWILD), fornecemos os relatórios detalhados aceitos pelas sociedades classificadoras internacionais para estender o prazo de navios no mar sem necessidade de docagem imediata."},
    {t:"Tampoamento / Bujonamento",c:"Bloqueio de dutos e válvulas para manutenção interna.",l:"Técnica de vedação externa de grades e tomadas de mar (sea chests) usando tampões de madeira, aço ou borrachão moldado. Permite que a equipe interna do navio faça a manutenção em válvulas à seco com total segurança."},
    {t:"Calefação de vazamentos",c:"Estancamento emergencial de rombos e fissuras.",l:"Intervenção rápida para calafetar fraturas no casco, utilizando cunhas especiais, mantas de neoprene e massas epóxi de fixação rápida. Evita paradas forçadas, poluição ambiental e naufrágios."}
  ],
  "Levantamento e Registro": [
    {t:"Fotografia e filmagem subaquática",c:"Amostra visual precisa do ambiente submarino.",l:"Produção de imagens nítidas (mesmo em águas turvas) para laudos ambientais, inspeções de fauna bentônica e registros históricos da condição de cabos e cascos. Entregas rápidas em mídias digitais."},
    {t:"Levantamentos topográfico e cadastral",c:"Mapeamento rigoroso do entorno submerso.",l:"Demarcação e posicionamento de pontos notáveis da infraestrutura náutica. Cruzamos os dados topográficos externos com os achados subaquáticos para gerar um cadastro técnico as-built perfeito."},
    {t:"Batimetria / Topobatimetria",c:"Medição e desenho em 3D do leito marinho.",l:"Uso de ecobatímetros de feixe simples ou multifeixe aliados a GPS RTK para determinar a profundidade e traçar o relevo do fundo. Crucial para atestar o calado de portos antes de atracar grandes embarcações."}
  ],
  "Dragagem e Sondagem": [
    {t:"Dragagem / Dragagem Subaquática",c:"Desassoreamento e aprofundamento de canais.",l:"Utilizando bombas de sucção submersíveis manuseadas pelos mergulhadores, removemos lama, areia e detritos acumulados em berços de atracação, píeres e captações d'água onde dragas grandes não têm acesso."},
    {t:"Sondagens",c:"Pesquisa de reconhecimento do fundo do mar.",l:"Sondagens à percussão ou SPT (Standard Penetration Test) realizadas sobre balsas ou em marés baixas para caracterizar a resistência do subsolo marinho, viabilizando o projeto de fundações portuárias e plataformas."},
    {t:"Coleta de material",c:"Amostragem de solo e sedimentos focada em laudos.",l:"Coletamos amostras indeformadas do fundo do mar para análise em laboratórios ambientais, determinando o grau de contaminação, tipo de solo e garantindo as licenças necessárias para intervenções marinhas."},
    {t:"Acompanhamento de cravação de estacas",c:"Orientação e alinhamento durante obras de fundação.",l:"Monitoramos e orientamos, diretamente do fundo, as pesadas manobras dos martelos de bate-estacas, certificando-se de que a camisa metálica não atinja obstruções e siga o prumo projetado na obra."}
  ],
  "Dutos e Cabos Submarinos": [
    {t:"Inspeção, lançamento e manutenção de emissários",c:"Cuidado integral com sistemas de saneamento costeiro.",l:"Instalamos tubulações gigantescas no fundo do mar, realizamos lastreamento com blocos de concreto (saddles) e mantemos os difusores livres de cracas para garantir a correta dispersão de efluentes tratados."},
    {t:"Oleodutos/Gasodutos/Slamorodutos",c:"Suporte especializado à infraestrutura de óleo e gás.",l:"Lançamento e enterramento de dutos flexíveis (rígidos e spools) focados na interligação de poços ao terminal costeiro. Realizamos monitoramento contra scour (erosão ao redor do tubo) e reparos em revestimentos térmicos."},
    {t:"Cabos elétricos submarinos",c:"Conexão de energia ininterrupta e protegida.",l:"Supervisão da descida de cabos de força entre continentes e ilhas. Atuamos na proteção das extremidades perto da zona de rebentação com tubos articulados em ferro fundido para evitar abrasão extrema."},
    {t:"Cabos de fibra ótica",c:"Mapeamento e resgate de cabos de telecomunicações.",l:"Mergulhadores altamente treinados para rastrear cabos óticos enterrados. Atuamos no desencalhe, resgate para a superfície e novo enterramento (jetting) das linhas de internet intercontinentais."}
  ],
  "Resgate e Salvatagem": [
    {t:"Resgate e Salvatagem Naval",c:"Reflotação de embarcações e mitigação de desastres.",l:"Operações complexas focadas em trazer à superfície barcos e navios afundados, utilizando paraquedas de ar (lift bags), selagem de cascos e grande bombeamento. Atuamos com extrema urgência na proteção portuária."},
    {t:"Busca, remoção e salvamento de estruturas flutuantes",c:"Limpeza de canais e localização de ativos perdidos.",l:"Busca sistemática de contêineres, âncoras, hélices e partes de maquinário perdidas durante a navegação. Amarração pesada e içamento técnico, devolvendo ativos valiosos e liberando o fluxo aquaviário."}
  ],
  "Mergulho Especializado": [
    {t:"Mergulho em águas contaminadas",c:"Mergulho de extremo risco com proteção total (HazMat).",l:"Realizado em esgotos, estações químicas e áreas de derramamento. O profissional utiliza trajes vulcanizados herméticos e capacetes dry-suit para evitar qualquer contato dérmico ou inalação das toxinas presentes."},
    {t:"Manutenção em fábricas de papel e celulose",c:"Apoio a sistemas vitais do polo industrial.",l:"Execução de reparos críticos sem interromper a produção da fábrica. Desobstruímos calhas industriais, limpamos tanques de decantação espessos e manutenimos as bombas de captação de água bruta (raw water)."}
  ],
  "Tratamento de Água": [
    {t:"Serviço em ETE (Estação de Tratamento de Esgoto/Água)",c:"Limpeza e recuperação de ativos de saneamento.",l:"Operações subaquáticas em reatores, tanques de aeração e decantadores. Fazemos a remoção de lodo, conserto de raspadores e troca de difusores de ar sem a necessidade de secar o tanque, mantendo o abastecimento público."}
  ]
};

const categorias = ["Recuperação Estrutural", "Navios e Plataformas", "Levantamento e Registro", "Hidroelétricas e Barragens", "Inspeção e Vistoria", "Dragagem e Sondagem", "Resgate e Salvatagem", "Mergulho Especializado", "Dutos e Cabos Submarinos", "Tratamento de Água"];

let servicoImagens = {};
let dadosServicos = {};

const categoriesContainer = document.getElementById('categories-container');
const carouselTrack = document.getElementById('carousel-track');
const serviceBg = document.getElementById('service-bg');
const carouselDots = document.getElementById('carousel-dots');
let categoriaAtual = "Recuperação Estrutural";

console.log('Containers de serviços:', {
  categoriesContainer: !!categoriesContainer,
  carouselTrack: !!carouselTrack,
  serviceBg: !!serviceBg,
  carouselDots: !!carouselDots
});

// Configurar dropdowns de serviços
if (dropdownServiceLinks) {
  dropdownServiceLinks.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service');
      categoriaAtual = serviceName;
      if (desktopDropdownMenu) {
        desktopDropdownMenu.style.display = 'none';
      }
      renderizarBotoes();
      renderizarCards();
      const servicosSection = document.getElementById('servicos');
      if (servicosSection) {
        servicosSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => { 
        if (desktopDropdownMenu) {
          desktopDropdownMenu.style.display = ''; 
        }
      }, 1000);
    });
  });
}

function renderizarBotoes() {
  if (!categoriesContainer) {
    console.error('Container de categorias não encontrado');
    return;
  }
  
  const translations = window.categoryTranslations || {};
  
  categoriesContainer.innerHTML = '';
  categorias.forEach(cat => {
    const isActive = cat === categoriaAtual;
    const btn = document.createElement('button');
    btn.className = 'px-1 md:px-2 py-2 md:py-3 rounded-md uppercase text-[10px] md:text-base font-bold transition-all shadow-md border leading-tight ' + (isActive ? 'bg-[#2b4c7e] text-white border-light/50 scale-105' : 'bg-[#15253F] text-gray-200 border-primary hover:bg-[#223A5E] hover:text-white');
    
    // Usar tradução se disponível, senão usar o nome original
    const translatedName = translations[cat] || cat;
    const partes = translatedName.split(' e ');
    if(partes.length > 1) {
      btn.innerHTML = partes[0] + ' E<br>' + partes[1];
    } else {
      const partesAnd = translatedName.split(' and ');
      if(partesAnd.length > 1) {
        btn.innerHTML = partesAnd[0] + ' AND<br>' + partesAnd[1];
      } else {
        const partesY = translatedName.split(' y ');
        if(partesY.length > 1) {
          btn.innerHTML = partesY[0] + ' Y<br>' + partesY[1];
        } else {
          btn.innerHTML = translatedName;
        }
      }
    }
    btn.onclick = () => {
      categoriaAtual = cat;
      renderizarBotoes();
      renderizarCards();
    };
    categoriesContainer.appendChild(btn);
  });
}

function renderizarCards() {
  if (!carouselTrack || !carouselDots) {
    console.error('Elementos do carousel não encontrados');
    return;
  }
  
  // Recarregar dadosServicos com traduções atualizadas antes de renderizar
  const currentLocale = window.currentLocale || 'pt';
  const translations = window.rawDataTranslations || {};
  const translatedData = translations[currentLocale];
  
  for (const cat in dadosServicos) {
    const originalData = rawData[cat];
    let sourceData = originalData;
    
    if (translatedData && translatedData[cat] && translatedData[cat].items) {
      sourceData = translatedData[cat].items;
    }
    
    // Atualizar apenas os textos, mantendo as imagens
    dadosServicos[cat] = dadosServicos[cat].map((card, idx) => ({
      ...card,
      titulo: sourceData[idx] ? sourceData[idx].t : card.titulo,
      shortDesc: sourceData[idx] ? sourceData[idx].c : card.shortDesc,
      longDesc: sourceData[idx] ? sourceData[idx].l : card.longDesc
    }));
  }
  
  carouselTrack.innerHTML = '';
  carouselDots.innerHTML = '';
  const cards = dadosServicos[categoriaAtual];
  
  if (!cards || cards.length === 0) {
    console.error('Nenhum card encontrado para categoria:', categoriaAtual);
    return;
  }
  
  cards.forEach((cardData, index) => {
    const card = document.createElement('div');
    card.className = "service-card snap-center shrink-0 w-[300px] md:w-[600px] h-[420px] md:h-[400px] bg-panel rounded-2xl border border-primary/30 flex shadow-2xl relative overflow-hidden card-transition group cursor-pointer";
    card.setAttribute('data-bg', cardData.imagem);
    
    const imageDiv = document.createElement('div');
    imageDiv.className = "w-1/3 md:w-1/2 h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-20";
    imageDiv.style.backgroundImage = "url('" + cardData.imagem + "')";
    
    const contentDiv = document.createElement('div');
    contentDiv.className = "w-2/3 md:w-1/2 p-4 md:p-6 flex flex-col justify-between relative z-10 bg-panel overflow-hidden";
    
    const watermark = document.createElement('img');
    watermark.src = "/images/logo-atlatico-vector.png";
    watermark.className = "absolute top-1/2 left-1/2 -translate-y-1/2 w-[150%] max-w-none opacity-[0.05] grayscale pointer-events-none z-0 rotate-12";
    watermark.alt = "Watermark";
    
    const textContainer = document.createElement('div');
    textContainer.className = "relative z-10 flex-1 flex flex-col overflow-hidden mb-4";
    
    const normalContent = document.createElement('div');
    normalContent.className = "normal-content flex flex-col";
    normalContent.innerHTML = "<h3 class='text-[13px] md:text-2xl font-bold uppercase leading-tight mb-2 md:mb-3 text-white'>" + cardData.titulo + "</h3><p class='text-[11px] md:text-base text-gray-300 font-light leading-snug line-clamp-6 md:line-clamp-4 text-left md:text-justify'>" + cardData.shortDesc + "</p>";
    
    const expandedContent = document.createElement('div');
    expandedContent.className = "expanded-content flex flex-col h-full overflow-hidden";
    expandedContent.innerHTML = "<h4 class='text-[11px] md:text-base font-bold uppercase leading-tight mb-2 text-accent tracking-widest shrink-0'>" + cardData.titulo + "</h4><p class='text-[10px] md:text-base text-gray-200 font-light leading-relaxed overflow-y-auto no-scrollbar text-left md:text-justify'>" + cardData.longDesc + "</p>";
    
    textContainer.appendChild(normalContent);
    textContainer.appendChild(expandedContent);
    
    const button = document.createElement('button');
    button.className = "btn-action relative z-10 bg-dark border border-primary hover:bg-accent hover:border-accent text-white py-2 md:py-3 rounded uppercase font-bold text-[11px] md:text-lg transition-colors w-full shadow-lg shrink-0 mt-auto";
    button.textContent = window.learnMoreText || "Saiba Mais";
    
    contentDiv.appendChild(watermark);
    contentDiv.appendChild(textContainer);
    contentDiv.appendChild(button);
    
    card.appendChild(imageDiv);
    card.appendChild(contentDiv);
    
    card.addEventListener('mouseenter', () => updateBackground(cardData.imagem));
    
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = card.classList.contains('card-expanded');
      
      document.querySelectorAll('.service-card').forEach(c => {
        c.classList.remove('card-expanded');
        const btnEl = c.querySelector('.btn-action');
        if (btnEl) {
          btnEl.textContent = window.learnMoreText || 'Saiba Mais';
          btnEl.classList.replace('bg-accent', 'bg-dark');
        }
      });
      
      if (!isExpanded) {
        card.classList.add('card-expanded');
        button.textContent = 'CONTRATAR SERVIÇO';
        button.classList.replace('bg-dark', 'bg-accent');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
    
    carouselTrack.appendChild(card);
    
    const dot = document.createElement('div');
    dot.className = 'dot h-2 rounded-full dot-transition cursor-pointer ' + (index === 0 ? 'bg-white w-4' : 'bg-white/30 w-2');
    dot.onclick = () => {
      const cardCenterInTrack = card.offsetLeft + (card.offsetWidth / 2);
      const containerCenter = carouselTrack.offsetWidth / 2;
      carouselTrack.scrollTo({ left: cardCenterInTrack - containerCenter, behavior: 'smooth' });
    };
    carouselDots.appendChild(dot);
  });
  
  carouselTrack.scrollLeft = 0;
  if(cards.length > 0) updateBackground(cards[0].imagem);
}

function updateBackground(imageUrl) {
  serviceBg.style.backgroundImage = 'url(' + "'" + imageUrl + "'" + ')';
  serviceBg.style.backgroundSize = 'cover';
  serviceBg.style.backgroundPosition = 'center';
}

window.moveCarousel = function(direction) {
  const cardsNodes = document.querySelectorAll('.service-card');
  if (cardsNodes.length <= 1) return;
  
  let currentIndex = 0;
  let minDistance = Infinity;
  const trackCenter = carouselTrack.getBoundingClientRect().left + carouselTrack.offsetWidth / 2;
  
  cardsNodes.forEach((card, index) => {
    const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
    const distance = Math.abs(trackCenter - cardCenter);
    if (distance < minDistance) {
      minDistance = distance;
      currentIndex = index;
    }
  });
  
  let nextIndex = currentIndex + direction;
  if (nextIndex >= cardsNodes.length) nextIndex = 0;
  else if (nextIndex < 0) nextIndex = cardsNodes.length - 1;
  
  const targetCard = cardsNodes[nextIndex];
  const cardCenterInTrack = targetCard.offsetLeft + (targetCard.offsetWidth / 2);
  const containerCenter = carouselTrack.offsetWidth / 2;
  carouselTrack.scrollTo({ left: cardCenterInTrack - containerCenter, behavior: 'smooth' });
}

carouselTrack.addEventListener('scroll', () => {
  const cardsNodes = document.querySelectorAll('.service-card');
  const dotsNodes = document.querySelectorAll('.dot');
  if(cardsNodes.length === 0) return;
  
  let currentIndex = 0;
  let closestCard = cardsNodes[0];
  let minDistance = Infinity;
  const trackCenter = carouselTrack.getBoundingClientRect().left + carouselTrack.offsetWidth / 2;
  
  cardsNodes.forEach((card, index) => {
    const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
    const distance = Math.abs(trackCenter - cardCenter);
    if (distance < minDistance) {
      minDistance = distance;
      closestCard = card;
      currentIndex = index;
    }
  });
  
  updateBackground(closestCard.getAttribute('data-bg'));
  
  dotsNodes.forEach((dot, i) => {
    if(i === currentIndex) {
      dot.classList.remove('bg-white/30', 'w-2');
      dot.classList.add('bg-white', 'w-4');
    } else {
      dot.classList.remove('bg-white', 'w-4');
      dot.classList.add('bg-white/30', 'w-2');
    }
  });
});

// Mapeamento de categorias para as chaves usadas no JSON
const servicoMapping = {
  'Recuperação Estrutural': 'RECUPERAÇÃO ESTRUTURAL',
  'Navios e Plataformas': 'NAVIOS E PLATAFORMAS',
  'Levantamento e Registro': 'LEVANTAMENTO E REGISTRO',
  'Hidroelétricas e Barragens': 'HIDROELÉTRICAS E BARRAGENS',
  'Inspeção e Vistoria': 'INSPEÇÃO E VISTORIA',
  'Dragagem e Sondagem': 'DRAGAGEM E SONDAGEM',
  'Resgate e Salvatagem': 'RESGATE E SALVATAGEM',
  'Mergulho Especializado': 'MERGULHO ESPECIALIZADO',
  'Dutos e Cabos Submarinos': 'DUTOS E CABOS SUBMARINOS',
  'Tratamento de Água': 'TRATAMENTO DE ÁGUA'
};

// Função para embaralhar array
function embaralharArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Carregar imagens e renderizar
console.log('🔄 Iniciando carregamento...');
fetch('/data/gallery-data.json')
  .then(response => response.json())
  .then(galleryData => {
    console.log('✅ Gallery data carregado:', galleryData.estatisticas);
    
    // Mapear imagens por serviço (nome normal como chave)
    categorias.forEach(servico => {
      servicoImagens[servico] = [];
    });
    
    // Percorre todos os clientes e agrupa imagens por serviço
    Object.values(galleryData.clientes).forEach(cliente => {
      if (cliente.servicos && cliente.imagens) {
        cliente.servicos.forEach(servicoCliente => {
          // Encontra a categoria correspondente
          const categoriaKey = Object.keys(servicoMapping).find(
            key => servicoMapping[key] === servicoCliente
          );
          
          if (categoriaKey && servicoImagens[categoriaKey]) {
            servicoImagens[categoriaKey].push(...cliente.imagens);
          }
          
          // Adiciona imagens "Diversos" como fallback para todos os serviços
          if (servicoCliente === 'Diversos') {
            Object.keys(servicoMapping).forEach(cat => {
              if (servicoImagens[cat]) {
                servicoImagens[cat].push(...cliente.imagens);
              }
            });
          }
        });
      }
    });
    
    // Embaralha as imagens de cada serviço
    Object.keys(servicoImagens).forEach(servico => {
      servicoImagens[servico] = embaralharArray(servicoImagens[servico]);
    });
    
    console.log('✅ Imagens mapeadas por serviço:');
    Object.keys(servicoImagens).forEach(s => {
      console.log('  ' + s + ': ' + servicoImagens[s].length + ' imagens');
    });
    
    // Criar dadosServicos com distribuição balanceada de imagens
    for (const cat in rawData) {
      const imgs = servicoImagens[cat] || [];
      
      if (imgs.length === 0) {
        console.warn('⚠️ Nenhuma imagem encontrada para:', cat);
        // Usa imagens de outros serviços como fallback
        const fallbackImages = Object.values(servicoImagens).flat();
        imgs.push(...embaralharArray(fallbackImages).slice(0, 10));
      }
      
      // Buscar dados traduzidos se disponíveis
      const currentLocale = window.currentLocale || 'pt';
      const translations = window.rawDataTranslations || {};
      const translatedData = translations[currentLocale];
      
      let sourceData = rawData[cat];
      if (translatedData && translatedData[cat] && translatedData[cat].items) {
        sourceData = translatedData[cat].items;
      }
      
      dadosServicos[cat] = sourceData.map((info, idx) => ({
        titulo: info.t,
        shortDesc: info.c,
        longDesc: info.l,
        // Distribui as imagens de forma circular para evitar repetição
        imagem: imgs[idx % imgs.length] || 'https://via.placeholder.com/800x600/223A5E/FFFFFF?text=Atlântico'
      }));
    }
    
    console.log('✅ Dados dos serviços preparados');
    console.log('✅ Renderizando interface...');
    renderizarBotoes();
    renderizarCards();
  })
  .catch(error => {
    console.error('❌ Erro ao carregar gallery-data.json:', error);
    // Fallback com imagens genéricas
    for (const cat in rawData) {
      // Buscar dados traduzidos se disponíveis
      const currentLocale = window.currentLocale || 'pt';
      const translations = window.rawDataTranslations || {};
      const translatedData = translations[currentLocale];
      
      let sourceData = rawData[cat];
      if (translatedData && translatedData[cat] && translatedData[cat].items) {
        sourceData = translatedData[cat].items;
      }
      
      dadosServicos[cat] = sourceData.map((info, idx) => ({
        titulo: info.t,
        shortDesc: info.c,
        longDesc: info.l,
        imagem: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80'
      }));
    }
    renderizarBotoes();
    renderizarCards();
  });

}, 500); // Delay de 500ms para garantir que o DOM esteja pronto
`}
      </Script>
    </>
  );
}
