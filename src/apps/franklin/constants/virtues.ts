export interface Virtue {
  id: number;
  name: string;
  definition: string;
  description: string;
}

export const VIRTUES: Virtue[] = [
  {
    id: 1,
    name: 'Templanza',
    definition: 'Temperance',
    description:
      'No comas hasta el embotamiento; no bebas hasta la exaltación.',
  },
  {
    id: 2,
    name: 'Silencio',
    definition: 'Silence',
    description:
      'No hables sino lo que pueda beneficiar a otros o a ti mismo; evita las conversaciones triviales.',
  },

  {
    id: 3,
    name: 'Orden',
    definition: 'Order',
    description:
      'Que todas tus cosas tengan su lugar; que cada parte de tu negocio tenga su tiempo.',
  },
  {
    id: 4,
    name: 'Resolución',
    definition: 'Resolution',
    description:
      'Resuelve realizar lo que debes; realiza sin falta lo que resuelves.',
  },
  {
    id: 5,
    name: 'Frugalidad',
    definition: 'Frugality',
    description:
      'No hagas ningún gasto sino para hacer bien a otros o a ti mismo; no desperdicies nada.',
  },
  {
    id: 6,
    name: 'Industriosidad',
    definition: 'Industry',
    description:
      'No pierdas tiempo; ocúpate siempre en algo útil; corta todas las acciones innecesarias.',
  },
  {
    id: 7,
    name: 'Sinceridad',
    definition: 'Sincerity',
    description:
      'No uses engaños lastimosos; piensa inocente y justamente; y, si hablas, habla en consecuencia.',
  },
  {
    id: 8,
    name: 'Justicia',
    definition: 'Justice',
    description:
      'No perjudiques a nadie por injurias u omitiendo los beneficios que son tu deber.',
  },
  {
    id: 9,
    name: 'Moderación',
    definition: 'Moderation',
    description:
      'Evita los extremos; abstente de resentir las injurias tanto como creas que se merecen.',
  },
  {
    id: 10,
    name: 'Limpieza',
    definition: 'Cleanliness',
    description:
      'No toleres ninguna falta de limpieza en el cuerpo, vestidos o habitación.',
  },
  {
    id: 11,
    name: 'Tranquilidad',
    definition: 'Tranquillity',
    description:
      'No te perturbes por nimiedades, o por accidentes comunes o inevitables.',
  },
  {
    id: 12,
    name: 'Castidad',
    definition: 'Chastity',
    description:
      'Usa raramente el placer sexual, solo por salud o descendencia, nunca por embotamiento o debilidad.',
  },
  {
    id: 13,
    name: 'Humildad',
    definition: 'Humility',
    description: 'Imita a Jesús y a Sócrates.',
  },
];
