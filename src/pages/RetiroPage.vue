<template>
  <q-page class="q-pa-xl">
    <div class="text-h5">Solicitar Retiro</div>
    <q-form class="q-mt-md">
      <q-input label="Monto a retirar (S/)" type="number" filled class="q-mb-md" />
      <q-input label="Cuenta destino" filled class="q-mb-md" />
      <q-btn label="Solicitar Retiro" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'RetiroPage',
}
</script>
