function start () {
    navigator.mediaDevices.getUserMedia({audio:true});
     Classic=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wW7GBON59/model.json",modelloaded);
}
function modelloaded() {
    Classic.classify(gotresult);
}
function gotresult (error,results) {
    if (error) {
        console.log(error)
    }else{
        console.log(results);
        document.getElementById("h31").innerHTML="I can hear -"+results[0].label;
        document.getElementById("h32").innerHTML="Accuracy -"+(results[0].confidence*100).toFixed(2)+"%";
        image1=document.getElementById("img1");
        if (results[0].label=="Cat") {
            image1.src="https://pictures-of-cats.org/wp-content/uploads/2013/05/cat-meow-i-want.jpg";
        }
        else if(results[0].label=="Dog"){
            image1.src="https://vcahospitals.com/-/media/2/VCA/Images/LifeLearn-Images-Foldered/152/barking_in_dogs_1.ashx";
        }
      else if (results[0].label=="Cow") {
        image1.src="https://media.istockphoto.com/photos/mature-adult-black-and-white-cow-mooing-and-bellowing-pink-nose-and-a-picture-id1211610534?k=20&m=1211610534&s=612x612&w=0&h=yTJux-_wqKPGAnvt5u_hI_6AyijQ2KhS1fBYPCKTNuA=";
      }
      else if(results[0].label=="Parrot"){
        image1.src="https://image.shutterstock.com/image-photo/closeup-blueandyellow-macaw-ara-ararauna-260nw-129933956.jpg";
      }
    }
}