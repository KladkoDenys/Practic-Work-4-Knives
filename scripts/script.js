window.addEventListener('DOMContentLoaded',()=>{
//--Tabs
    const tabsBtns = document.querySelectorAll('.dotted-line__white'),
        tabsText = document.querySelectorAll('.head-info-top__left-part-text'),
        numberTabs = document.querySelector('.dotted-line__text-part1');

        tabsBtns.forEach((el,i) =>{
            let index = i;

            el.addEventListener('click',(e)=>{
                e.preventDefault();

                tabsBtns.forEach(el => {
                    el.classList.remove('dotted-line__orange');
                    el.innerHTML = '';
                });

                numberTabs.innerHTML = `0${i+1}`;
                el.classList.add('dotted-line__orange');

                el.innerHTML = `
                <div class="dotted-line__orange-circle"></div>
                `;

                console.log(index + ' index')
                
                tabsText.forEach((el,i) =>{
                    el.innerHTML = '';
                    el.innerHTML = `Text ${index + 1}`
                })


            })
        })



})