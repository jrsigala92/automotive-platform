import { BaseModelVm } from '../../shared/base.model.vm';
import { Expose } from 'class-transformer';
export class CarViewModel extends BaseModelVm {
    @Expose()
    year: number;
    @Expose()
    description: string;
}