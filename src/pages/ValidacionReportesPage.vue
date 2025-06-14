<template>
  <q-page class="q-pa-xl">
    <div class="text-h5">Reportes Financieros</div>
    <q-card class="q-pa-md q-mt-md">
      <div class="row items-center">
        <div class="col-8">
          <q-select label="Seleccionar mes" :options="['Mayo 2025', 'Abril 2025']" filled />
        </div>
        <div class="col-4">
          <q-btn label="Generar PDF" icon="picture_as_pdf" color="red" class="full-width" />
          <q-btn
            label="Exportar Excel"
            icon="description"
            color="green"
            class="full-width q-mt-sm"
          />
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'ValidacionReportesPage',
}
</script>
