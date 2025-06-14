<template>
  <q-page class="q-pa-xl">
    <q-card class="q-pa-lg">
      <div class="text-h5 text-primary">Registro de Usuario</div>
      <q-form class="q-gutter-md q-mt-md">
        <q-input label="Nombres*" filled />
        <q-input label="Apellidos*" filled />
        <q-input label="Correo Electrónico*" filled />
        <q-input label="Documento de Identidad*" filled />
        <q-input label="Usuario*" filled />
        <q-input label="Contraseña*" type="password" filled />
        <q-input label="Confirmar Contraseña*" type="password" filled />
        <div class="text-negative text-caption">
          <q-icon name="warning" /> El correo electrónico ya tiene asociado una cuenta
        </div>
        <q-btn label="Guardar" color="primary" class="q-mt-md" />
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'RegistroPage',
}
</script>
