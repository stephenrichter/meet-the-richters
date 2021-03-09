export function onChange(isVisible) {
  if(isVisible) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
