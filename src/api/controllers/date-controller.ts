import { inject, injectable } from "inversify";
import type { DateUseCase } from "../useCases/date-use-cases";
import { DateEntity } from "../entities/date-entity";

@injectable()
export class DateController {
  constructor(@inject("DateUseCase") private dateUseCase: DateUseCase) {}

  async getDates(): Promise<DateEntity[]> {
    return this.dateUseCase.getDates();
  }
}
