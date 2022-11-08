class Tabs {

    toggleTabs(tabTarget, tabClick) {
        
        const target = document.querySelector(tabClick.dataset.value) || 
        
        document.querySelector(tabClick.dataset.valueChild)
        
        const type = tabClick.dataset.type;
        
        tabTarget.forEach(tabInfo => {
            tabInfo.classList.remove('active');
            sessionStorage.removeItem("type");
        })
        
        target.classList.add('active');
        
        sessionStorage.setItem("type", type);
    }
}

export default new Tabs();