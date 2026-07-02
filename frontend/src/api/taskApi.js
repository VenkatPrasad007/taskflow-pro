import axiosClient from "./axiosClient";

export const taskApi = {
  getAll: () => axiosClient.get("/tasks"),
  getById: (id) => axiosClient.get(`/tasks/${id}`),
  create: (task) => axiosClient.post("/tasks", task),
  update: (id, task) => axiosClient.put(`/tasks/${id}`, task),
  updateStatus: (id, status) =>
    axiosClient.patch(`/tasks/${id}/status?status=${status}`),
  delete: (id) => axiosClient.delete(`/tasks/${id}`),
};
