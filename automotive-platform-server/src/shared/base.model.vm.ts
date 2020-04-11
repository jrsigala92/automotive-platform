import { Expose } from 'class-transformer';
export class BaseModelVm {
    @Expose()
    createdAt?: Date;
    @Expose()
    updatedAt?: Date;
    @Expose()
    id?: string;
}