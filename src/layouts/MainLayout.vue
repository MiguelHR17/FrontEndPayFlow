<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-indigo-10 text-white">
      <div class="column">
        <q-toolbar class="q-gutter-md row items-center justify-between" style="height: 60px">
          <div class="row items-center">
            <q-toolbar-title class="text-weight-bold text-h5">PayFlow</q-toolbar-title>
          </div>
          <q-img src="/img/logo-payflow.png" style="height: 50px; width: auto" />
        </q-toolbar>

        <q-tabs
          dense
          align="right"
          active-color="white"
          indicator-color="white"
          narrow-indicator
          class="bg-primary text-white shadow-2 q-px-md"
        >
          <q-route-tab to="/dashboard" label="Inicio" icon="home" />
          <q-route-tab to="/deposito" label="Depósito" icon="account_balance_wallet" />
          <q-route-tab to="/retiro" label="Retiro" icon="payments" />
          <q-route-tab to="/historial" label="Historial" icon="history" />
          <q-route-tab to="/validar-comprobantes" label="Validaciones" icon="assignment" />
          <q-route-tab to="/reportes" label="Reportes" icon="bar_chart" />
          <q-route-tab to="/configuracion" label="Configuración" icon="settings" />
          <q-route-tab to="/comprobante-detalle" label="Detalle Comprobante" icon="description" />
          <q-route-tab
            to="/validacion-automatica"
            label="Validación Automática"
            icon="check_circle"
          />
          <q-route-tab to="/logout" label="Cerrar sesión" icon="logout" />
        </q-tabs>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>
