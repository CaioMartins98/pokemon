import { inject, injectable } from "inversify";
import { ApiServiceDateScheduling } from "../service/api-service";
import { DateEntity } from "../entities/date-entity";

export interface DateUseCase {
  getDates(): Promise<DateEntity[]>;
}

@injectable()
export class ImplDateUseCase implements DateUseCase {
  constructor(
    @inject("ApiServiceDateScheduling")
    private dateApiService: ApiServiceDateScheduling
  ) {}

  async getDates(): Promise<DateEntity[]> {
    const dateData = await this.dateApiService.fetch();
    return dateData.map((date) => new DateEntity(date))
  }
}
