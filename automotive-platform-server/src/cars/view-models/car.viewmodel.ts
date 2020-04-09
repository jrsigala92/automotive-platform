import { BaseModelVm } from '../../view-models/base.model.vm';
import { Expose } from 'class-transformer';
export class CarViewModel extends BaseModelVm {
    @Expose()
    year: number;
    @Expose()
    description: string;
}