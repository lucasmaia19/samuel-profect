import api from '@/helpers/api'
import { ResponseBase } from '@/models/response/ResponseBase'
import { SupplierResponse } from '@/models/response/SupplierResponse'

export const supplierController = () => {
  const getSuppliers = async () => {
    const response: ResponseBase<SupplierResponse[]> = (
      await api.get('/supplier')
    ).data
    return response
  }

  const getSupplier = async (supplierId: string) => {
    const response = (await api.get(`/supplier/${supplierId}`)).data
    return response
  }

  const createSupplier = async (supplierData: SupplierResponse) => {
    const response = (await api.post('/supplier', supplierData)).data
    return response
  }

  const updateSupplier = async (supplierData: SupplierResponse) => {
    const response = (await api.put(`/supplier/`, supplierData)).data
    return response
  }

  const deleteSupplier = async (supplierId: string) => {
    const response = (await api.delete(`/supplier/${supplierId}`)).data
    return response
  }

  return {
    getSuppliers,
    getSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier,
  }
}
