// Initialize the Contentful client with space ID and access token
var client = contentful.createClient({
    space: 'kixvueiswqpv',
    accessToken: 'QZCfAeAEXa9yEVO_VtL5_Rkjqi3OMxbbiJ0hC23puEc'
  });
  

  // Fetch entries of content type 'cars' from Contentful
  client.getEntries({content_type:'alcohol'}).then(function (entries) {
    console.log(entries)
    // Iterate over each entry in the fetched items
    entries.items.forEach(function (entry) {
  
      // Create a new list item (li) element to hold the car information and image
      var li = document.createElement('li');
      li.classList.add('slide-wrapper'); // Add 'slide-wrapper' class for styling**
      

      // Create a div element to hold the image (title, etc.) about the car
      var portraitDiv = document.createElement('div');
      portraitDiv.classList.add('portrait'); // Add 'portrait' class for styling**
  
      // Create an image (img) element to display the car image
      var img = document.createElement('img');
      img.classList.add('productImage'); // Add 'productImage' class for styling
      // Construct the image URL by prepending 'https:' to the file URL from the entry
      var imageUrl = "https:" + entry.fields.productImage.fields.file.url;
      img.src = imageUrl; // Set the image source to the constructed URL
      portraitDiv.appendChild(img); // Append the image to the list item

      // Append the content div to the list item
      li.appendChild(portraitDiv);

      // Create a div element to hold the content (title, etc.) about the car
      var contentDiv = document.createElement('div');
      contentDiv.classList.add('content'); // Add 'content' class for styling**

      // Create a div element to hold the content (title, etc.) about the car
      var textDiv = document.createElement('div');
      textDiv.classList.add('text'); // Add 'content' class for styling**
  
      // Create a heading (h2) element for the car's title
      var h3 = document.createElement('h3');
      h3.innerHTML = entry.fields.productName; // Set the heading text to the car's title
      textDiv.appendChild(h3).classList.add('product-name'); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.itemSize; // Set the heading text to the car's title
      textDiv.appendChild(p).classList.add('item-size'); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.rating; // Set the heading text to the car's title
      textDiv.appendChild(p).classList.add('rating'); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.price; // Set the heading text to the car's title
      textDiv.appendChild(p).classList.add('price'); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.productDetails; // Set the heading text to the car's title
      textDiv.appendChild(p).classList.add('product-details'); // Append the heading to the content div

      var p = document.createElement('p');
      p.innerHTML = entry.fields.description; // Set the heading text to the car's title
      textDiv.appendChild(p).classList.add('description'); // Append the heading to the content div

      // Append the textDiv div to the list item
      contentDiv.appendChild(textDiv);
      
      // Create a div element to hold the content (title, etc.) about the car
      var button1Div = document.createElement('div');
      button1Div.classList.add('button1'); // Add 'content' class for styling**

      // Link to cart 
      var linkToDetails = document.createElement('a')
      linkToDetails.innerHTML = 'Add to Cart';
      linkToDetails.href = 'details.html?id=' + entry.sys.id;
      button1Div.appendChild(linkToDetails).classList.add('addcart-button');

      // Append the content div to the list item
      contentDiv.appendChild(button1Div);
  
      // Append the content div to the list item
      li.appendChild(contentDiv);
  
      // Assuming 'cardsContainer' is the element where we want to display the cars
      // Append the list item to the cardsContainer element
      cardsContainer.appendChild(li);
      
    });
  });