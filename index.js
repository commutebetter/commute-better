document.addEventListener("DOMContentLoaded", e => {
    const store = {
      "Forbidden City": "The Forbidden City is a palace complex in central Beijing, China. It houses the Palace Museum, and was the former Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty. The Forbidden City served as the home of Chinese emperors and their households and was the ceremonial and political center of the Chinese government for almost 500 years.",
      "Yuyuantan Park": "Yuyuantan Park is one of major urban parks in the city of Beijing. This park covers a territory of about 137 hectares, 61 of which are covered by water. Yuyuantan is the largest water body in the park, and it literally means the Jade Deep Pond. ",
      "Jingshan Park": "Jingshan Park is an imperial park covering 23 hectares immediately north of the Forbidden City in the Imperial City area of Beijing, China. The focal point is the artificial hill Jingshan, literally 'Prospect Hill'. Formerly a private imperial garden attached to the grounds of the Forbidden City, the grounds were opened to the public in 1928. ",
      "Temple of Heaven":"The Temple of Heaven is an imperial complex of religious buildings situated in the southeastern part of central Beijing. The complex was visited by the Emperors of the Ming and Qing dynasties for annual ceremonies of prayer to Heaven for good harvest.",
      "Beihai Park":"Beihai Park, also known as the Winter Palace, is a public park and former imperial garden located in the northwestern part of the Imperial City, Beijing. First built in the 11th century, it is among the largest of all Chinese gardens and contains numerous historically important structures, palaces, and temples. ",
      "Houhai Park":"Houhai is a lake and its surrounding neighborhood in Xicheng District of central Beijing, China. Houhai is the largest of the three lakes, along with Qianhai 'Front Lake' and Xihai 'Western Lake', that comprise Shichahai, the collective name for the three northern-most lakes in central Beijing. ",
     };
    
    const nav = document.querySelector(".navbar");
    const nav_brand = document.querySelector(".navbar .brand");
    const nav_tabs = document.querySelector(".navbar .tabs");
    const nav_menu_btn = document.querySelector(".navbar .menu-btn"); 
    let md = 920;
    
    nav_menu_btn.onclick = e => {
      let window_width = window.innerWidth;
      if(window_width<=md)
        nav_tabs.classList.toggle("hidden");
      else
        nav_tabs.classList.remove("hidden");
    }
    
    const btn_l = document.querySelector(".btn-left");
    const btn_r = document.querySelector(".btn-right");
    const slider = document.querySelector(".carousel-slider");
    const labels = document.querySelectorAll(".carousel-label");
    const description = document.querySelector(".carousel-description");
    const items = document.querySelectorAll(".carousel-item");
    const num_item = items.length - 2;
  
    let item_width = items[0].clientWidth;
    let count = 1;
    let slide_r = 1;
    let slide_l = -1;
    let active_label = document.querySelector(".carousel-label.active");
    
    if(window.innerWidth<=md)
        nav_tabs.classList.add("hidden");
    
    window.onresize = e => {
      item_width = items[0].clientWidth;
      if(window.innerWidth<=md)
        nav_tabs.classList.add("hidden");
    }
    
    function slide(direction){ 
      // if (count == num_item-1 || count==0) return;
      active_label.classList.remove("active");     
      if(direction===slide_r)
        count++;
      else if(direction===slide_l)
        count--;
      
      let item = items[count];
      
      active_label = document.querySelector(`.carousel-label[for="${item.name}"]`);
      active_label.classList.add("active");     
      
      description.innerText = store[item.name];
      slider.style.transform = `translateX(${-count * item_width}px)`;
      slider.style.transition = "0.75s ease-out";     
    }
    
    btn_r.onclick = e => {
      slide(slide_r); 
    }
    
    btn_l.onclick = e => {
      slide(slide_l);
    }
    
    slider.ontransitionend = e => {   
      if(count==num_item+1){
        count = 1;
        slider.style.transform = `translateX(${-item_width}px)`; 
        slider.style.transition = "";
      }
      if(count==0){
        count = num_item;
        slider.style.transform = `translateX(${-num_item * item_width}px)`; 
        slider.style.transition = "";
      }
    }
  });