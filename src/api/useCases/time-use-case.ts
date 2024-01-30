import { TimeEntity } from "./../entities/time-entity";
import { inject, injectable } from "inversify";
import { ApiServiceTimeScheduling } from "../service/api-service";

export interface TimeUseCase {
  getTimes(date?: string): Promise<TimeEntity[]>;
}

@injectable()
export class ImplTimeUseCase implements TimeUseCase {
  constructor(
    @inject("ApiServiceTimeScheduling")
    private timeApiService: ApiServiceTimeScheduling
  ) {}

  async getTimes(date?: string): Promise<TimeEntity[]> {
    
    const timeData = await this.timeApiService.fetch(date);
    return timeData.map((time) => new TimeEntity(time));
  }
}
