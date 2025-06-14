<template>
  <q-page class="q-pa-xl">
    <div class="text-h5">Validar Comprobantes</div>
    <q-table class="q-mt-md" :rows="rows" :columns="columns" row-key="id" flat bordered />
  </q-page>
</template>

<script>
export default {
  name: 'ValidarComprobantesPage',
  data() {
    return {
      columns: [
        { name: 'id', label: 'ID', field: 'id' },
        { name: 'usuario', label: 'Usuario', field: 'usuario' },
        { name: 'fecha', label: 'Fecha', field: 'fecha' },
        { name: 'monto', label: 'Monto', field: 'monto' },
        { name: 'estado', label: 'Estado', field: 'estado' },
      ],
      rows: [
        {
          id: 1,
          usuario: 'mjose123',
          fecha: '2025-05-01',
          monto: 'S/ 100.00',
          estado: 'Pendiente',
        },
        { id: 2, usuario: 'lcastro', fecha: '2025-05-02', monto: 'S/ 50.00', estado: 'Pendiente' },
      ],
    }
  },
}
</script>
