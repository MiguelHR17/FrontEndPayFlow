<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg" style="width: 400px">
      <q-card-section>
        <div class="text-h5 text-primary text-center">Inicio de Sesión</div>
      </q-card-section>

      <q-card-section>
        <q-input filled label="Usuario" />
        <q-input filled type="password" label="Contraseña" class="q-mt-md" />
        <q-btn label="Iniciar Sesión" color="primary" class="q-mt-lg full-width" />
        <div class="text-negative text-caption q-mt-md">
          <q-icon name="warning" /> La contraseña no es la correcta
        </div>
        <div class="text-center q-mt-sm text-blue">¿Olvidó su contraseña?</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>
