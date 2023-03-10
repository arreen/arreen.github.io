let url = window.location.href;
console.log(url);

function linker(cardname){
  
  
  //console.log(document.getElementById("myUL"))
  //console.log(document.getElementById("myUL").getElementsByTagName("li"))
  //let text1 = document.getElementById("myUL").getElementsByTagName("li").textContent;
  //console.log(text1);
  
  window.location.assign(url + "/" + cardname + ".html");
  
} 


function listcleaner2() {
  
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");

  for (var i = 4; i < li.length; i++) {
    li[i].style.display = "none";
  }
}


function listcleaner() {
  
  const my_array = [];

  //myFunction4()
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    
    li[i].style.display = "";
    my_array.push(li[i]);
    
    } else{
      //different search results
      li[i].style.display = "none";
    }
  }

  
  if (my_array.length > 4) {
    for (var i = 4; i < my_array.length; i++) {
      
      my_array[i].style.display = "none";
    }
  }  

}
 




