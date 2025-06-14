<template>
  <q-page class="q-pa-xl">
    <div class="text-h5">Configuración de Notificaciones</div>
    <q-card class="q-pa-md q-mt-md">
      <q-toggle label="Notificarme cuando se valide un depósito" checked />
      <q-toggle label="Notificarme cuando se registre un retiro" />
      <q-toggle label="Enviar resumen mensual por correo" />
      <q-btn label="Guardar Cambios" color="primary" class="q-mt-lg" />
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'ConfiguracionNotificacionesPage',
}
</script>
