const results = resultsObj.results
const container = document.querySelector('#resultsContainer')

//Listing Parts
const productImage = function (listingObject){return listingObject.Images[0].url_570xN}
const productTitle = function (listingObject){return listingObject.title}
const productStoreName = function(listingObject){return listingObject.Shop.shop_name}
const productURL = function(listingObject){return listingObject.url}
const productPrice = function(listingObject){return listingObject.price}
//Building Listings
	container.innerHTML = `
		${results.map(result =>{
			return `
			<div class="result">
				<a href="${productURL(result)}">



					<div class="imageContainer">
						<img src="${productImage(result)}" class="productImg"/>
						<img src="./assets/heart.png" class="loveIt"/>
					</div>

					<p class="itemDescription">${productTitle(result)}</p>
					<h6 class="storeName">${productStoreName(result)}</h6>
					<div>

					</div>
					<p>$${productPrice(result)}</p>
					<a href="#" class="similarItems">+see similar items</a>
				</a>	
			</div>
			`
		}).join('')}
	`
//End of Listing

//Toggles sidebar content when '+Show More' clicked
function elementToggle(idName){
	let targets = document.querySelectorAll('.' + idName + 'Item')
	let button = document.querySelector('#'+idName)
		targets.forEach(target => target.classList.contains('displayHidden') === true ? target.classList.remove('displayHidden') : target.classList.add('displayHidden'))
		return button.innerHTML == '+Show more' ? button.innerHTML = '-Show fewer' : button.innerHTML = '+Show more'
}
var toggleTest = document.querySelectorAll('.showToggle');
toggleTest.forEach(target => target.addEventListener('click', function(){elementToggle(target.id)}))
