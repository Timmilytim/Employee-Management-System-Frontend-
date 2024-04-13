import axios from "axios"

const REST_API_BASE__URL = "http://localhost:8080/api/employees"

export const listEmployees = () =>axios.get(REST_API_BASE__URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE__URL, employee)