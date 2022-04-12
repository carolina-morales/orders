import React, { useEffect, useState } from 'react';
import MaterialTable, { Action, Column } from '@material-table/core';
import { Grid, Typography, useTheme } from '@mui/material';
import Layout from '../../components/organism/Layout';
import { ItemProduct, Order } from './interfaces';
import { toast } from 'react-toastify';
import { getOrders } from './function';
import { MATERIAL_TABLE_OPTIONS } from '../../utils/constants';
import AddProduct from './AddProduct';

const Orders = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderSelected, setOrderSelected] = useState<Order>();

  const columns: Array<Column<any>> = [
    {
      title: 'Número de orden',
      field: 'order.number',
      type: 'string',
      render: (data) => data.number
    }
  ];

  const actions: Array<Action<any>> = [
    {
      icon: 'add',
      tooltip: 'Agregar',
      onClick: (e, data) => {
        setOrderSelected(data);
        setOpen(true);
      }
    }
  ]

  const getData = async () => {
    try {
      setLoading(true);

      const resp = await getOrders();
      const items = resp.orders.map(order => order).flat(1);

      setOrders(items);
    } catch (error) {
      return toast.error('Hubo un problema al obtener el listado de ordenes');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <Layout>
      <Grid
        container
        alignItems='center'
        padding={4}
        borderRadius={2}
        width='100%'
        height='100%'
        direction='column'
        style={{ backgroundColor: 'rgba(51, 51, 51, 0.2)' }}
      >

        <Grid item width='100%'>
          <MaterialTable
            title={
              <Typography color='primary'>Lista de ordenes</Typography>
            }
            data={orders}
            columns={columns}
            actions={actions}
            isLoading={loading}
            options={MATERIAL_TABLE_OPTIONS.options}
            localization={MATERIAL_TABLE_OPTIONS.localization}
            detailPanel={
              ({ rowData }) => (
                <div style={{ padding: theme.spacing(3) }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant='overline' color='primary'>Productos</Typography>
                    </Grid>
                    {rowData.items.map((item: ItemProduct, key: React.Key) => (
                      <Grid key={key} item xs={12} sm={6} md={4}>
                        <div style={{ border: '1px solid #cbcbcb', borderRadius: theme.spacing(1), padding: theme.spacing(1) }}>
                          <Typography>SKU: {item.sku}</Typography>
                          <Typography>Nombre: {item.name}</Typography>
                          <Typography>Cantidad: {item.quantity}</Typography>
                          <Typography>Precio: ${item.price}</Typography>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              )
            }
          />
        </Grid>
      </Grid>

      {open ? <AddProduct open={open} setOpen={setOpen} order={orderSelected} /> : null}
    </Layout>
  );
};

export default Orders;