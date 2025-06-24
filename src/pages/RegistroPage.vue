<template>
  <q-page class="q-pa-xl">
    <q-card class="q-pa-lg">
      <div class="text-h5 text-primary">Registro de Usuario</div>
      <q-form @submit.prevent="registrarUsuario" class="q-gutter-md q-mt-md">
        <q-input v-model="form.nombre" label="Nombres*" filled />
        <q-input v-model="form.apellido" label="Apellidos*" filled />
        <q-input v-model="form.correo" label="Correo Electrónico*" filled type="email" />
        <q-input v-model="form.dni" label="Documento de Identidad*" filled />
        <q-input v-model="form.usuario" label="Usuario*" filled />
        <q-input v-model="form.contrasena" label="Contraseña*" type="password" filled />
        <q-input
          v-model="form.confirmarContrasena"
          label="Confirmar Contraseña*"
          type="password"
          filled
        />

        <div v-if="error" class="text-negative text-caption">
          <q-icon name="warning" /> {{ error }}
        </div>

        <q-btn label="Guardar" type="submit" color="primary" class="q-mt-md" />
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegistroPage',
  data() {
    return {
      form: {
        nombre: '',
        apellido: '',
        correo: '',
        dni: '',
        usuario: '',
        contrasena: '',
        confirmarContrasena: '',
      },
      error: '',
    }
  },
  methods: {
    async registrarUsuario() {
      this.error = ''

      if (this.form.contrasena !== this.form.confirmarContrasena) {
        this.error = 'Las contraseñas no coinciden'
        return
      }

      try {
        await axios.post('http://localhost:5283/api/usuarios', {
          nombre: this.form.nombre,
          apellido: this.form.apellido,
          dni: this.form.dni,
          correo: this.form.correo,
          usuario: this.form.usuario,
          contrasena: this.form.contrasena,
        })

        this.$router.push('/login')
      } catch (err) {
        if (err.response && err.response.data?.message) {
          this.error = err.response.data.message
        } else {
          this.error = 'Ocurrió un error al registrar. Intenta nuevamente.'
        }
      }
    },
  },
}
</script>
