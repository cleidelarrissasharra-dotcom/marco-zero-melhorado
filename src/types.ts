export interface PointOfInterest {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  facts: string[];
  location: string;
  historicalPeriod: string;
}

export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
