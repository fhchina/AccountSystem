import request from '../utils/request';
import qs from 'qs';

const CUSTOMER_API = `/api/customers`;

export async function query(params) {
    return request(`${CUSTOMER_API}?${qs.stringify(params)}`);
}

export async function create(params) {
    return request(CUSTOMER_API, {
        method: 'post',
        body: JSON.stringify(params)
    });
}

export async function modify(params) {
    return request(`${CUSTOMER_API}/${params['id']}`, {
        method: 'put',
        body: JSON.stringify(params)
    });
}

export async function del(params) {
    return request(`${CUSTOMER_API}/${params['id']}`, {
        method: 'delete'
    });
}

export async function getOrderNumber() {
    return request(`${CUSTOMER_API}/getOrderNumber`);
}

export async function queryOrderById(orderId) {
    console.log(orderId);
    return request(`${CUSTOMER_API}/${orderId}`);
}
