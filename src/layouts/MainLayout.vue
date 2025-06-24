<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #0a234b" class="text-white">
      <div class="column">
        <!-- 🔵 Header ampliado -->
        <q-toolbar class="q-gutter-md row items-center justify-between" style="height: 120px">
          <div class="row items-center">
            <!-- ⏩ Desplaza el texto "PayFlow" a la derecha -->
            <q-toolbar-title class="text-weight-bold text-h5" style="margin-left: 60px">
              PayFlow
            </q-toolbar-title>
          </div>

          <!-- ✅ Doble tamaño del logo -->
          <img src="/img/logo-payflow.png" alt="Logo" style="height: 120px; width: auto" />
        </q-toolbar>

        <!-- 🔷 Tabs -->
        <q-tabs
          dense
          align="right"
          active-color="white"
          indicator-color="white"
          narrow-indicator
          class="text-white shadow-2 q-px-md"
          style="background-color: #004b8d"
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
