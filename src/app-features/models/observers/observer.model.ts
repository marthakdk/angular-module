export class Order {
    constructor(
        public orderId: number,
        public orderItem: string,
        public orderQty: number
    ) {  }
}