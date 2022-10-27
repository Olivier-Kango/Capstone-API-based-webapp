const select = document.getElementById('select');

export const selectAlphabet = () => {
  const index = select.selectedIndex;
  const selectedValue = select.options[index].value;
  localStorage.setItem('selected', selectedValue);
  window.location.reload();
};

export default select;