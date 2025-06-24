const routes = [
  {
    path: '/',
    redirect: '/login', // Redirección al login por defecto
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: 'registro',
        component: () => import('pages/RegistroPage.vue'),
      },
      {
        path: 'logout',
        component: () => import('pages/LogoutPage.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: 'deposito', component: () => import('pages/DepositoPage.vue') },
      { path: 'deposito-exito', component: () => import('pages/DepositoExitoPage.vue') },
      { path: 'retiro', component: () => import('pages/RetiroPage.vue') },
      { path: 'confirmacion-retiro', component: () => import('pages/ConfirmacionRetiroPage.vue') },
      { path: 'retiro-exito', component: () => import('pages/RetiroExitoPage.vue') },
      { path: 'historial', component: () => import('pages/HistorialPage.vue') },
      { path: 'detalle', component: () => import('pages/DetalleTransaccionPage.vue') },
      {
        path: 'validar-comprobantes',
        component: () => import('pages/ValidarComprobantesPage.vue'),
      },
      { path: 'reportes', component: () => import('pages/ValidacionReportesPage.vue') },
      {
        path: 'configuracion',
        component: () => import('pages/ConfiguracionNotificacionesPage.vue'),
      },
      { path: 'comprobante-detalle', component: () => import('pages/ComprobanteDetallePage.vue') },
      {
        path: 'validacion-automatica',
        component: () => import('pages/ValidacionAutomaticaPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'), // Ruta 404
  },
]

export default routes
