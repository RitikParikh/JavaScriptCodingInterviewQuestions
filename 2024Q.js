// ================================================================================================================================================================================
// Code 1: Javascript reguler expression result
/* function  JavascriptRegulerExpression() {
  var string='Javascript is a scripting language';
  var result = new RegExp('script',"i");
  return result.exec(string);
}
console.log( JavascriptRegulerExpression()); */
/* OUTPUT:
[
  'script',
  index: 4,
  input: 'Javascript is a scripting language',
  groups: undefined
]
*/
// ================================================================================================================================================================================
// Code 2: Javascript: Loop and Timeout Ouput
/* function  JavascriptLoop(arr) {
    for(var i=0; i<arr.length; i++) {
        setTimeout(function(){
            console.log("Ind_Val: ",+ i + ', elem: ' + arr[i]);
        },3000);
    }
    return true;
}
JavascriptLoop([16,32,64,128]); */
/* OUTPUT:
Ind_Val:  4, elem: undefined
Ind_Val:  4, elem: undefined
Ind_Val:  4, elem: undefined
Ind_Val:  4, elem: undefined */
// ================================================================================================================================================================================
// Code 3: Preload --> You have an array of image file names as follows below, Now you wish to prepare all the images.
    // var images=["x.gif","y.gif","z.gif"]

/*     var images = ["x.gif", "y.gif", "z.gif"];
    var preloadedImages = [];
    
    function preloadImages() {
      for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];
        preloadedImages.push(img);
      }
    }
    
    // Call the function to preload the images
    preloadImages(); */
// ================================================================================================================================================================================