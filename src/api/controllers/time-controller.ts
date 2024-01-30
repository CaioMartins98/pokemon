import { inject, injectable } from "inversify";
import type { TimeUseCase } from "../useCases/time-use-case";
import { TimeEntity } from "../entities/time-entity";

@injectable()
export class TimeController {
  constructor(@inject("TimeUseCase") private timeUseCase: TimeUseCase) {}

  async getTimes(date:string): Promise<TimeEntity[]> {
    return this.timeUseCase.getTimes(date);
  }
}
