import { HttpStatus } from '../../models/enum/http-status';

export class HttpException {

    message?: any;
    status?: HttpStatus;

    constructor(message?: any, status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR){
        console.error({ message, status });

        this.message = message;
        this.status = status;
    }
}