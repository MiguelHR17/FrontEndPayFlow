<template>
  <q-page class="q-pa-xl">
    <q-card class="q-pa-lg" style="max-width: 400px; margin: auto">
      <div class="text-h5 text-primary">Iniciar Sesión</div>
      <q-form @submit.prevent="iniciarSesion" class="q-gutter-md q-mt-md">
        <q-input v-model="form.usuario" label="Usuario" filled />
        <q-input v-model="form.contrasena" label="Contraseña" type="password" filled />

        <div v-if="error" class="text-negative text-caption">
          <q-icon name="warning" /> {{ error }}
        </div>

        <q-btn label="Ingresar" type="submit" color="primary" class="q-mt-md full-width" />

        <!-- Aquí se agrega el texto para registrarse -->
        <div class="text-center q-mt-sm">
          ¿No tienes cuenta?
          <router-link
            to="/registro"
            class="text-primary text-weight-medium"
            style="margin-left: 4px"
          >
            REGÍSTRATE
          </router-link>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        usuario: '',
        contrasena: '',
      },
      error: '',
    }
  },
  methods: {
    async iniciarSesion() {
      this.error = ''

      try {
        const response = await axios.post('http://localhost:5283/api/auth/login', {
          usuario: this.form.usuario,
          contrasena: this.form.contrasena,
        })

        localStorage.setItem('usuario', JSON.stringify(response.data))
        this.$router.push('/dashboard')
      } catch (err) {
        this.error = err.response?.data?.message || 'Error al iniciar sesión. Intenta nuevamente.'
      }
    },
  },
}
</script>
