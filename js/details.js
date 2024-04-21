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

    }