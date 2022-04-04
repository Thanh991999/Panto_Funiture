
const $1 = document.querySelector.bind(document);
const $$1 = document.querySelectorAll.bind(document);


function click_on_category_appear_product() {
    let get_category = document.querySelectorAll('.slider.best-selling');
    let btnCategory = document.querySelectorAll('.category-items');
    
    btnCategory.forEach(function(line, index)
    {
        line.onclick = function(events) {
            
            // active appear line category 
            $1('.category-items.active').classList.remove('active');

            events.target.classList.add('active');

            document.querySelector('.slider-active.best-selling').classList.remove('slider-active');
            
            get_category[index].classList.add('slider-active');

            // add animation on products

            // tạo biến để lấy từng cột danh mục trực tiếp
            const get_product_category = $$1('.best-selling.slider-active .slider-items');
            
            console.log(get_product_category)

            
            
           
        }
    })


}

click_on_category_appear_product();

// active cart

const cart = $1('.nav-cart');
const cart_card = $1('.header__cart-list');

cart.addEventListener('click', function() {
    cart_card.classList.toggle('active');
})

const getMenu = $1('.menu-tab-mb');
const menu = $1('.nav-list');
const overlayMenu = $1('.overlay-menu');


if( getMenu) {

    getMenu.addEventListener('click', function() {
        menu.style.transform = 'translateX(0px)';
        menu.style.display = 'block';
        overlayMenu.style.display = 'block';

    })

    overlayMenu.onclick = function() {
        menu.style.transform = 'translateX(-100%)';
        menu.style.display = 'none';
        overlayMenu.style.display = 'none';
        
    }

    const subMenuHeight = $1('.nav-item__funiture-list--tab-mob').offsetHeight;

    $1('.nav-item:first-child').addEventListener('click', function() {
        $1('.nav-item__funiture-list--tab-mob').classList.toggle('subMenuHeight');
    })
}


const dotOption = $1('.header-wraper__dot');

dotOption.addEventListener('click', function() {
    $1('.header-wraper__dot-options').classList.toggle('active');
})


const dotOptionVase = $1('.header-wraper__dot--vase');

dotOptionVase.addEventListener('click', function() {
    $1('.product-wrapper__vase').classList.toggle('active');
})

const dotOptionVaseSecon = $1('.header-wraper__dot--vase-secondary');

dotOptionVaseSecon.addEventListener('click', function() {
    $1('.header-wraper__dot-options--vase-secondary ').classList.toggle('active');
})

const sliderHeight = $1('.best-selling').offsetHeight;
console.log(sliderHeight)

$1('.best-selling__product').style.height = `${sliderHeight + 60}px`