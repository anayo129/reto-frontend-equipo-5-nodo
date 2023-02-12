export interface Course {
  id: string;
  name: string;
  description: string;
  price: string;
}

export const courses: Course[] = [
  {
    id: "1",
    name: "yoga",
    description: "este es uncurso de yoga basado en practicas ancestrales",
    price: "$12.000",
  },
  {
    id: "2",
    name: "",
    description: "este es uncurso de yoga basado en practicas ancestrales",
    price: "$14.000",
  },
  {
    id: "3",
    name: "respiracion",
    description:
      "este es uncurso de respiracion basado en practicas ancestrales",
    price: "$16.000",
  },
];
