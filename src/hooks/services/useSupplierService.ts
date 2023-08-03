import { supplierController } from '@/controllers/supplierController'
import { AppDispatch } from '@/redux/store'
import { setSuppliers } from '@/redux/supplier/slice'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

const getSuppliersData = async () => {
  const { getSuppliers } = supplierController()
  const response = await getSuppliers()
  return response
}

export const useSupplierService = () => {
  const dispatch = useDispatch<AppDispatch>()

  const useGetSuppliersService = () => {
    const { data, isLoading } = useQuery('suppliers', getSuppliersData, {
      staleTime: 60 * 1000,
    })

    useEffect(() => {
      if (data != undefined) {
        dispatch(setSuppliers(data.data))
      } else {
        dispatch(setSuppliers([]))
      }
    }, [data, dispatch])

    return {
      suppliers: data?.data || [], // Fornece um array vazio como padrão se os dados forem undefined
      isLoading,
    }
  }

  return {
    useGetAsyncSuppliers: useGetSuppliersService,
  }
}
