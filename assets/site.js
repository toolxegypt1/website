(function(){var h=document.documentElement,q=new URLSearchParams(location.search).get('lang'),s;
try{s=localStorage.getItem('toolx.lang')}catch(e){}
function set(l){h.lang=l;h.dir=l=='ar'?'rtl':'ltr';try{localStorage.setItem('toolx.lang',l)}catch(e){}
document.querySelectorAll('[data-t]').forEach(function(e){var v=e.getAttribute('data-'+l);if(v)e.textContent=v});
var t=document.querySelector('title');if(t&&t.dataset[l])t.textContent=t.dataset[l]}
set(q||s||'ar');
document.addEventListener('click',function(e){if(e.target.closest('.lang'))set(h.lang=='ar'?'en':'ar')});
var f=document.getElementById('delform');if(f)f.addEventListener('submit',function(e){e.preventDefault();
var p=f.phone.value.trim(),n=encodeURIComponent;
location.href='mailto:privacy@toolxegypt.com?subject='+n('Account deletion request / طلب حذف حساب')+'&body='+n('Phone: '+p+'\nName: '+f.name.value+'\nReason: '+f.reason.value)})})();
