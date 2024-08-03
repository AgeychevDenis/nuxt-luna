declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $modalRouter: {
      close: () => void
    }
  }
}
