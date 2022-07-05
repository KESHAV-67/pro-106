https://teachablemachine.withgoogle.com/models/5wrTs77W6/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5wrTs77W6/model.json', modelReady);  
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error , results)  { 
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_nuumber_r = Math.floor(Math.random() * 255) + 1;
        random_nuumber_g = Math.floor(Math.random() * 255) + 1;
        random_nuumber_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_nuumber_r+","+random_nuumber_g+","+random_nuumber_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_nuumber_r+","+random_nuumber_g+","+random_nuumber_b+")";

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');

        if(results[0].label == "Cat") {
            img.src = 'cat.jpg';
        
        } else {
            img1.src ='dog.jpg';
        
        }
    }
}