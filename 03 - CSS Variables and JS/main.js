const inputs = [].slice.apply(document.querySelectorAll('input'));

function updateVars(e) {
  const docStyle = document.documentElement.style;
  let input = e.target;
  let unit = input.dataset['sizing'] || '';
  docStyle.setProperty('--' + input.name, input.value + unit);
}

inputs.forEach(input => {
  input.addEventListener('change', updateVars);
  input.addEventListener('mousemove', updateVars);
});