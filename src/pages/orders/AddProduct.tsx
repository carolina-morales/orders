import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, CircularProgress, Dialog, DialogContent, DialogTitle, Grid, TextField, Typography, useTheme } from '@mui/material';
import { ItemProduct, Order } from './interfaces';
import { toast } from 'react-toastify';

const AddProduct: React.FC<AddProductProps> = ({ open, setOpen, order }) => {
  const theme = useTheme();
  const [error, setError] = useState(false);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<Partial<ItemProduct>>({
    sku: '',
    name: '',
    price: '',
    quantity: ''
  });

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setSaving(true);
      setError(false);

      if (!data.sku || !data.name || !data.price || !data.quantity) return setError(true);

      if (/\D/g.test(data.price) || /\D/g.test(data.quantity)) return toast.error('El precio y cantidad deben ser número.');

      if (order) {
        toast.success('Producto agregado');
        order.items.push(data);
        return setOpen(false);
      }
    } catch (error) {
      return toast.error('No fue posible agregar el producto a la orden.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog maxWidth='md' open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        <Typography>Agregar nuevo producto a la orden número: <span style={{ color: theme.palette.primary.main }}>{order?.number}</span>
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Grid
          component='form'
          container
          spacing={2}
          padding={1}
          onSubmit={handleSave}
        >
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name='sku'
              size='small'
              label='SKU*'
              value={data.sku || ''}
              error={error && !data.sku}
              helperText='Campo obligatorio'
              onChange={e => setData({ ...data, sku: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name='name'
              size='small'
              label='Nombre*'
              value={data.name || ''}
              error={error && !data.name}
              helperText='Campo obligatorio'
              onChange={e => setData({ ...data, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name='quantity'
              size='small'
              label='Cantidad*'
              value={data.quantity || ''}
              error={error && !data.quantity}
              helperText='Campo obligatorio'
              onChange={e => setData({ ...data, quantity: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name='price'
              size='small'
              label='Precio*'
              value={data.price || ''}
              error={error && !data.price}
              helperText='Campo obligatorio'
              onChange={e => setData({ ...data, price: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              type='submit'
              color='primary'
              variant='contained'
              disabled={saving}
              startIcon={saving ? <CircularProgress size={25} color='primary' /> : null}
            >
              {saving ? 'Guardando' : 'Agregar'}
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

interface AddProductProps {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
  order: Order | undefined
}

export default AddProduct;