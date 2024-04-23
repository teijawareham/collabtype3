var textInURL = window.location.search;
//console.log(textInURL);
var parametersInURL = new URLSearchParams (textInURL);
//console.log(parametersInURL);
var id = parametersInURL.get('id');
//console.log(id);

// Initialize the Contentful client with space ID and access token
var client = contentful.createClient({
    space: 'kixvueiswqpv',
    accessToken: 'QZCfAeAEXa9yEVO_VtL5_Rkjqi3OMxbbiJ0hC23puEc'
  });

  client.getEntry(id).then(function(entry) {
    console.log(entry);

        // Create a new list item (li) element to hold the car information and image
      var li = document.createElement('li');
      li.classList.add('productcardWrapper'); // Add 'productcardWrapper' class for styling**

        // Create 1st div Product Left open
      var productleftDiv = document.createElement('div');
      productleftDiv.classList.add('productleft'); // Add 'portrait' class for styling**

            // Create 2 div Image Card open
      var imagecardDiv = document.createElement('div');
      imagecardDiv.classList.add('imagecard'); // Add 'portrait' class for styling**

            // Create an image (img) element to display the car image
            var img = document.createElement('img');
            img.classList.add('productImage'); // Add 'productImage' class for styling
            // Construct the image URL by prepending 'https:' to the file URL from the entry
            var imageUrl = "https:" + entry.fields.productImage.fields.file.url;
            img.src = imageUrl; // Set the image source to the constructed URL
            imagecardDiv.appendChild(img); // Append the image to the list item

        
        // 2nd div Image Card close
      productleftDiv.appendChild(imagecardDiv);

      // Create 3 div Text Card open
      var textcardDiv = document.createElement('div');
      textcardDiv.classList.add('textcard'); // Add 'portrait' class for styling**

      var h4= document.createElement('h4');
      h4.innerHTML = "Taste Profile"; // Set the heading text to the car's title
      textcardDiv.appendChild(h4).classList.add('tasteprofile-header'); // Append the heading to the content div

        // Create div tasteprofile open
      var tasteprofileDiv = document.createElement('div');
      tasteprofileDiv.classList.add('tasteprofile'); // Add 'portrait' class for styling**

      // Create div category open
      var categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category'); // Add 'portrait' class for styling**

      var p = document.createElement('p');
      p.innerHTML = "Flavours"; 
      categoryDiv.appendChild(p).classList.add('flavours'); 

      var p = document.createElement('p');
      p.innerHTML = "Sweetness"; 
      categoryDiv.appendChild(p).classList.add('sweetness'); 

      var p = document.createElement('p');
      p.innerHTML = "Body"; 
      categoryDiv.appendChild(p).classList.add('body-taste'); 
      
      var p = document.createElement('p');
      p.innerHTML = "Flavour Intensity"; 
      categoryDiv.appendChild(p).classList.add('flavourintensity'); 

      var p = document.createElement('p');
      p.innerHTML = "Acidity"; 
      categoryDiv.appendChild(p).classList.add('acidity'); 


        //div category close
        tasteprofileDiv.appendChild(categoryDiv);

        // Create div category answer taste profile open
      var categoryanswerDiv = document.createElement('div');
      categoryanswerDiv.classList.add('category-answer'); // Add 'portrait' class for styling**




      var p = document.createElement('p');
      p.innerHTML = entry.fields.flavourDescription; 
      categoryanswerDiv.appendChild(p).classList.add('flavour-description'); 

      var p = document.createElement('p');
      p.innerHTML = entry.fields.rating1; 
      categoryanswerDiv.appendChild(p).classList.add('rating1'); 

      var p = document.createElement('p');
      p.innerHTML = entry.fields.rating2; 
      categoryanswerDiv.appendChild(p).classList.add('rating2'); 

      var p = document.createElement('p');
      p.innerHTML = entry.fields.rating3; 
      categoryanswerDiv.appendChild(p).classList.add('rating3'); 

      var p = document.createElement('p');
      p.innerHTML = entry.fields.rating4; 
      categoryanswerDiv.appendChild(p).classList.add('rating4'); 



      //div category answer taste profile close
      tasteprofileDiv.appendChild(categoryanswerDiv);







        //div tasteprofile close
      textcardDiv.appendChild(tasteprofileDiv);

      var h4= document.createElement('h4');
      h4.innerHTML = "More Details"; // Set the heading text to the car's title
      textcardDiv.appendChild(h4).classList.add('moredetails-header'); // Append the heading to the content div

      // Create div moredetails open
      var moredetailsDiv = document.createElement('div');
      moredetailsDiv.classList.add('moredetails'); // Add 'portrait' class for styling**



      // Create div category open
      var categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category'); // Add 'portrait' class for styling**

      var p = document.createElement('p');
      p.innerHTML = "Release Date"; 
      categoryDiv.appendChild(p).classList.add('release-date'); 

      var p = document.createElement('p');
      p.innerHTML = "Alcohol/Vol"; 
      categoryDiv.appendChild(p).classList.add('alcohol-vol'); 

      var p = document.createElement('p');
      p.innerHTML = "Made In"; 
      categoryDiv.appendChild(p).classList.add('madein'); 
      
      var p = document.createElement('p');
      p.innerHTML = "By"; 
      categoryDiv.appendChild(p).classList.add('By'); 

      var p = document.createElement('p');
      p.innerHTML = "Sugar Content"; 
      categoryDiv.appendChild(p).classList.add('sugar-content'); 

      var p = document.createElement('p');
      p.innerHTML = "Varietal"; 
      categoryDiv.appendChild(p).classList.add('varietal'); 


        //div category close
        moredetailsDiv.appendChild(categoryDiv);


    // Create div category answer open
    var categoryanswerDiv = document.createElement('div');
    categoryanswerDiv.classList.add('category-answer'); // Add 'portrait' class for styling**




    var p = document.createElement('p');
    p.innerHTML = entry.fields.date; 
    categoryanswerDiv.appendChild(p).classList.add('date'); 

    var p = document.createElement('p');
    p.innerHTML = entry.fields.percentage; 
    categoryanswerDiv.appendChild(p).classList.add('percentage'); 

    var p = document.createElement('p');
    p.innerHTML = entry.fields.country; 
    categoryanswerDiv.appendChild(p).classList.add('country'); 

    var p = document.createElement('p');
    p.innerHTML = entry.fields.brand; 
    categoryanswerDiv.appendChild(p).classList.add('brand'); 

    var p = document.createElement('p');
    p.innerHTML = entry.fields.litres; 
    categoryanswerDiv.appendChild(p).classList.add('litres'); 

    var p = document.createElement('p');
    p.innerHTML = entry.fields.type; 
    categoryanswerDiv.appendChild(p).classList.add('type'); 

    //div category answer close
    moredetailsDiv.appendChild(categoryanswerDiv);



        //div moredetails close
      textcardDiv.appendChild(moredetailsDiv);


      // 3rd div Text Card close
      productleftDiv.appendChild(textcardDiv);

      

      // 1st div Product Left close
      li.appendChild(productleftDiv);

      // Create div Product Right open
      var productrightDiv = document.createElement('div');
      productrightDiv.classList.add('productright'); // Add 'portrait' class for styling**

        // Create div text open
      var text1Div = document.createElement('div');
      text1Div.classList.add('text1'); // Add 'portrait' class for styling**

     // Create a heading (h2) element for the car's title
     var h3 = document.createElement('h3');
     h3.innerHTML = entry.fields.productName; // Set the heading text to the car's title
     text1Div.appendChild(h3).classList.add('product-name'); // Append the heading to the content div

     var p = document.createElement('p');
     p.innerHTML = entry.fields.itemSize; // Set the heading text to the car's title
     text1Div.appendChild(p).classList.add('item-size'); // Append the heading to the content div

     var p = document.createElement('p');
     p.innerHTML = entry.fields.rating; // Set the heading text to the car's title
     text1Div.appendChild(p).classList.add('rating'); // Append the heading to the content div

     var p = document.createElement('p');
     p.innerHTML = entry.fields.price; // Set the heading text to the car's title
     text1Div.appendChild(p).classList.add('price'); // Append the heading to the content div

     var p = document.createElement('p');
     p.innerHTML = entry.fields.productDetails; // Set the heading text to the car's title
     text1Div.appendChild(p).classList.add('product-details'); // Append the heading to the content div

     var p = document.createElement('p');
     p.innerHTML = entry.fields.description; // Set the heading text to the car's title
     text1Div.appendChild(p).classList.add('description'); // Append the heading to the content div



        // div text close
      productrightDiv.appendChild(text1Div);

      



        // Create div button1 open
      var button1Div = document.createElement('div');
      button1Div.classList.add('button1'); // Add 'portrait' class for styling**


        // div button close
      productrightDiv.appendChild(button1Div);



      // 1st div Product Right close
      li.appendChild(productrightDiv);

      


        //productcardWrapper(li) to productcardContainer
        productcardContainer.appendChild(li);
    
});