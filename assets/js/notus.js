

function setOpenTab(el, tab){
  // Toggle Buttons
  let prevElem = el.previousElementSibling;
  let nextElem = el.nextElementSibling;
  if(prevElem){
    prevElem.classList.remove('bg-white', 'text-blueGray-600', 'border-blueGray-400');
    prevElem.classList.add('border-transparent', 'text-blueGray-500');
    prevElem.firstElementChild.classList.remove('text-lightBlue-600');
  } else {
    nextElem.classList.remove('bg-white', 'text-blueGray-600', 'border-blueGray-400');
    nextElem.classList.add('border-transparent', 'text-blueGray-500');
    nextElem.firstElementChild.classList.remove('text-lightBlue-600');
  }
  el.classList.remove('border-transparent');
  el.classList.add('bg-white', 'text-blueGray-600', 'border-blueGray-400');
  el.firstElementChild.classList.add('text-lightBlue-600');
  // Toggle Tabs
  var tabs = el.closest('.flex').nextElementSibling.querySelector('.ct-docs-frame').children;
  console.log(tabs);
  if(tab == 'preview'){
    if(tabs[0].classList.contains('hidden')){
      tabs[0].classList.remove('hidden');
    }
    tabs[1].classList.add('hidden');
  }
  if(tab == 'code'){
    tabs[0].classList.add('hidden');
    if(tabs[1].classList.contains('hidden')){
      tabs[1].classList.remove('hidden');
    }
  }
}
