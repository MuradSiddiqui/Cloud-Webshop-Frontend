export interface ICartItem {
	id: number;
	product: number
	product_name: string;
	product_price: number;
	quantity: number;
}

export interface IOrder {
	id: number;
	customer_email: string;
	customer_name: string;
	address: string;
	items: ICartItem[];
	order_date: string;
	status: string;
	total_price: number;
	payment_id?: string;
}