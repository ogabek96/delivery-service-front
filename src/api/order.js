import request from "@/utils/request";

export function create(orderData) {
  return request({
    url: "/orders",
    method: "POST",
    data: orderData
  });
}
export function getAll() {
  return request({
    url: "/orders",
    method: "GET"
  });
}
export function getAvailable() {
  return request({
    url: "/orders/available",
    method: "GET"
  });
}
export function process(orderId) {
  return request({
    url: `/orders/process/${orderId}`,
    method: "PUT"
  });
}
export function getProcessing() {
  return request({
    url: `/orders/processing`,
    method: "GET"
  });
}
export function closeProcessing() {
  return request({
    url: `/orders/processing/close`,
    method: "PUT"
  });
}