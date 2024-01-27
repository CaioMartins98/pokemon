import { injectable } from "inversify";
import axios from "axios";

export interface ApiService {
  fetch(): Promise<[]>;
}

@injectable()
export class ApiServiceDateScheduling implements ApiService {
  async fetch(): Promise<[]> {
    const response = await axios.get(
      "http://localhost:3000/api/scheduling/date"
    );
    return response.data;
  }
}

@injectable()
export class ApiServiceTimeScheduling implements ApiService {
  async fetch(): Promise<[]> {
    const response = await axios.get(
      "http://localhost:3000/api/scheduling/time"
    );
    return response.data;
  }
}
