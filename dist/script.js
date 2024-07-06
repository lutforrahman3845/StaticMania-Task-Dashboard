// selected menu text color change
const menuText = document.querySelectorAll('.menu-text');
menuText.forEach(function(mntxt){
    mntxt.addEventListener('click',()=>{
        menuText.forEach(function(mntxts){
            mntxts.classList.remove('selected-menu');
        });
        mntxt.classList.add('selected-menu');
    })
});