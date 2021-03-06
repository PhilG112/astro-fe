import { DistanceModel } from './distance.model';

export class CelestialModel {
  id: number;
  magnitude: number;
  absoluteMagnitude: number;
  name: string;
  designation1: string;
  designation2: string;
  designation3: string;
  designation4: string;
  description: string;
  distances: Array<DistanceModel>;
}
