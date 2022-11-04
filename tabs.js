export function tabs(element2, element3) {

    //sessionStorage.removeItem("type");
    //console.log(element3);
    const target = document.querySelector(element3.dataset.value) || document.querySelector(element3.dataset.values)
    const type = element3.dataset.type;
    //console.log(target)
    element2.forEach(tabInfo => {
        tabInfo.classList.remove('active');
        //console.log(tabInfo)
        sessionStorage.removeItem("type");
    })
    target.classList.add('active');
    sessionStorage.setItem("type", type);
}