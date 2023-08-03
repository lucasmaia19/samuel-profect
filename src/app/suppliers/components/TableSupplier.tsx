import { SkeletonTable } from '@/components/SkeletonTable'
import { Table } from '@/components/Table'
import { useSupplierService } from '@/hooks/services/useSupplierService'
import { useMask } from '@/hooks/useMask'
import React from 'react'

const columns = [
  'ID',
  'Documento',
  'Razão Social',
  'Nome Fantasia',
  'Telefone',
  'Email',
  'Criação',
]

export const TableSupplier = () => {
  const { useGetAsyncSuppliers } = useSupplierService()
  let { suppliers, isLoading } = useGetAsyncSuppliers()
  const { maskPhone, maskCNPJ, maskDate } = useMask()

  // Para testes, triplica suppliers
  suppliers = [...suppliers, ...suppliers, ...suppliers, ...suppliers, ...suppliers, ...suppliers, ...suppliers]

  return (
    <>
    {
      !isLoading ?
      <Table.Root>
        <Table.Head>
          {columns.map((column, index) => (
            <Table.Column key={index} column={column} />
          ))}
        </Table.Head>
        <Table.Body>
          {suppliers.length > 0 ? (
            suppliers.map((supplier, index) => (
              <Table.Row key={supplier.id} index={index}>
                <Table.Cell value={supplier.alternateId} />
                <Table.Cell value={maskCNPJ(supplier.document)} />
                <Table.Cell value={supplier.companyName} />
                <Table.Cell value={supplier.tradeName} />
                <Table.Cell value={maskPhone(supplier.phone)} />
                <Table.Cell value={supplier.email} />
                <Table.Cell value={maskDate(supplier.createdAt)} />
              </Table.Row>
            ))
          ) : (
            <Table.Row index={0}>
              <Table.Cell
                colSpan={columns.length}
                value="Nenhum dado disponível."
              />
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root> : 
      <SkeletonTable amountColumns={columns.length} />
    }
    </>
  )
}
