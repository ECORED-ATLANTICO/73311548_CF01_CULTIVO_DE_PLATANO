export default {
  global: {
    Name:
      'Generalidades de las prácticas agrícolas para el cultivo del plátano',
    Description:
      'Las prácticas agrícolas para el cultivo del plátano son un conjunto de técnicas y métodos utilizados para cultivar, cuidar y cosechar esta planta de manera eficiente y sostenible. Estas prácticas incluyen la selección adecuada del terreno, la preparación del suelo, la siembra de hijuelos, el riego, la fertilización, el control de plagas y enfermedades, la poda y el manejo poscosecha',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de las buenas prácticas agrícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Calidad en el sector agrícola',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación de las BPA ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ventajas y desventajas de la implementación de las BPA',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Importancia de la implementación de las BPA',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mapeo de la finca',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Entes certificadores de las BPA',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Requisitos para la implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Instalaciones ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Materias primas e insumos agrícolas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Recomendaciones para tener en cuenta en el uso del agua',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Suelos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Semillas',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Agroquímicos',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Abonos orgánicos',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Peligros, controles y manejo de residuos líquidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Peligros y controles de los residuos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Plan de manejo ambiental',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/7331548_CF1_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cultivo del plátano.',
      referencia: 'Ecosistema recursos SENA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gD0ZtMwN5zI',
    },
  ],
  glosario: [
    {
      termino: 'Cultivo',
      significado:
        'este cultivo implica una serie de prácticas que incluyen la selección del terreno adecuado, la preparación del suelo, la siembra de hijuelos, el riego, la fertilización, el control de plagas y enfermedades, y la cosecha de los frutos. ',
    },
    {
      termino: 'Plátano',
      significado:
        'el plátano es una fruta tropical que pertenece al género Musa. Se caracteriza por su forma alargada y curvada, con una piel amarilla, verde o roja, dependiendo de la variedad. El plátano es conocido por su pulpa suave y dulce, que es rica en nutrientes como potasio, fibra y vitaminas.',
    },
    {
      termino: 'Nutrientes',
      significado:
        'los nutrientes del plátano son los componentes esenciales que contribuyen a su valor nutricional y que son beneficiosos para la salud humana.',
    },
  ],
  referencias: [
    {
      referencia:
        'Buenas Prácticas Agrícolas para frutas, hierbas aromáticas culinarias y hortalizas frescas (NTC 5400). (2005, 27 de julio). Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), 2005, 02 de agosto.',
      link: '',
    },
    {
      referencia:
        'Japan International Cooperation Agency. (2011). Guía de extensión. (2a Ed.). Panamá: Autoridad Nacional del Ambiente.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2004). Plan nacional para la implementación de Buenas Prácticas Agrícolas. ',
      link: 'https://www.agronet.gov.co/Paginas/inicio.aspx',
    },
    {
      referencia:
        'Moreno, J. (2009). Buenas Prácticas Agrícolas en el cultivo de plátano. Medellín, Colombia: Comunicaciones Augura.',
      link: '',
    },
    {
      referencia:
        'Moreno, J., Candanoza, J. y Olarte, F. (2009). Buenas Prácticas Agrícolas en el de cultivo de plátano exportación en la región de Urabá. Medellín, Colombia: Comunicaciones Augura.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez',
          cargo: 'Guionista línea de producción',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Diana Lizeth Lozada Diaz',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
