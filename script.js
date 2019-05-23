$(".buttonsz2").hide();
$(".start").hide();
//this function is used to reset all appended images//
function reset(){
    $("img").remove();
}
//this function changes the sites overall color and background image based on the mood typed in the 2nd input//
function changeMood(image,color) {
    $("img").show();
    $("body").css('background-image', 'url('+image+')');
    $("h1").css('color', color);
    $("p").css('color', color);
    $("input").css('background-color', color);
    $("button").css('background-color', color);
}

//all my arrays//
var sad=["https://static.planetminecraft.com/files/resource_media/screenshot/1441/sad_steve8222664_lrg.jpg", "https://i.imgflip.com/x2nui.jpg" ,"https://media.tenor.com/images/ef1cfa38bfa0d9d01fa77d3166dfa9a9/tenor.gif"];
var happy=["https://i.kym-cdn.com/photos/images/facebook/001/366/271/d82", "https://t6.rbxcdn.com/0248013175e7b061b8734c6331141fa4", "https://vignette.wikia.nocookie.net/p__/images/7/76/Happy_Anime_S2.png/revision/latest?cb=20140317164922&path-prefix=protagonist"];
var angry=["https://i.kym-cdn.com/photos/images/original/001/009/414/1d3.gif", "https://i0.wp.com/www.nerdycreator.com/wp-content/uploads/2015/11/1103-Anger-Feeling-Angry.jpg", "https://cdn4.iconfinder.com/data/icons/reaction/32/angry-512.png"];
var excited=["http://unseenflirtspoetry.files.wordpress.com/2012/05/homer-excited.png?w=286&h=262", "https://steamuserimages-a.akamaihd.net/ugc/843712359187093349/679C06709E31EC32F0DDE9A083A8DFE95258B6E7/", "https://media1.tenor.com/images/dbc6597b27b388e63bb782875fc7140c/tenor.gif?itemid=10121476"];
var hungry=["https://3.bp.blogspot.com/-EnCpoemzhxM/WgSFz2HpHtI/AAAAAAAAAHU/57AZz7lLqJEVgeLQqOLtIhnI-Ui2WTA9ACLcBGAs/s1600/maxresdefault.jpg", "https://thumbs.gfycat.com/SickNecessaryCivet-mobile.jpg" ,"https://media0.giphy.com/media/12uXi1GXBibALC/giphy.gif"];
var tired=["https://i.dailymail.co.uk/i/newpix/2018/07/13/13/4E31900200000578-5950313-Hammond_spray_Sleepy_25_Overwatch_credits-a-192_1531485938648.jpg" ,"https://media1.tenor.com/images/219ea4419ef026e98dd66eaf46e7feee/tenor.gif?itemid=8019497" ,"https://media.giphy.com/media/mvKV7FEGPJ3kk/giphy.gif"];

//this click function works to hide my first button and input and introduce the new ones aswell as take your typed name and append it//
 $(".greeting").click(function() {
    var greet = $(".namez").val();
    $(".buttonsz2").delay(2500).fadeIn();
    $(".buttonsz").fadeOut();
    $(".start").html("<p> Hello " + greet+ "</p>");
    $(".start").delay(1000).fadeIn();
});

$(".button2").click(function(){
    //this line of code takes the value in the mood input and turns it into the mood variable to be used in the if else statement//
    var mood = $(".mood").val();
if( mood === "sad"){
        reset();
        changeMood("https://j.gifs.com/y3DYpB.gif","blue");
        //these forEach loops will append the three images stores in each appropriate array into the imagez div//
        sad.forEach(function(image){
        $(".imagez").append("<img src="+ image + ">");
     });
}else if(mood === "happy"){
        reset();
        changeMood("https://media0.giphy.com/media/2iaQyH2gbSgMw/giphy.gif","yellow");
        happy.forEach(function(image){
        $(".imagez").append("<img src="+ image + ">");
    });
}else if(mood === "angry"){
       reset();
       changeMood("https://media1.tenor.com/images/f9026c02e38d36bd85d1efd491db5054/tenor.gif?itemid=13877848","red");
       angry.forEach(function(image){
       $(".imagez").append("<img src="+ image + ">");
    });
}else if(mood === "excited"){
       reset();
       changeMood("https://i.imgur.com/OsUGTJ2.png","orange");
       excited.forEach(function(image){
       $(".imagez").append("<img src="+ image + ">");
    });
}else if(mood === "hungry"){
      reset();
      changeMood("https://media2.giphy.com/media/5JFkSisLQpKUw/giphy.gif","green");
      hungry.forEach(function(image){
      $(".imagez").append("<img src="+ image + ">");
    });
}else if(mood === "tired"){
      reset();
      changeMood("https://media1.tenor.com/images/2d7f787c0eb9201b379365cbe175a8f7/tenor.gif?itemid=5120823","black");
      tired.forEach(function(image){
      $(".imagez").append("<img src="+ image + ">");
    });
}
else{
    //this alert tells the user to choose another mood since i was to lazy to add more//
    alert("please choose another mood");
}
});





