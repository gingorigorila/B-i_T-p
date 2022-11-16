function giai(){
    var cnang = document.forms["BMI"]["cnang"].value;
    var ccao = document.forms["BMI"]["ccao"].value;
    var Tuoi = document.forms["BMI"]["Tuoi"].value;
    // var Choose=document.getElementById('Choose').value;
    var x= (cnang/(ccao*ccao));
    document.getElementById("KQ").innerHTML=(x);
    if(x <= 18.5){    
    document.getElementById("KQ").innerHTML='Dưới Chuẩn';
    }
    else if(x >= 18.5 && x <= 24.9){
    document.getElementById("KQ").innerHTML='Bình thường';
    }
    else if(x >= 25 && x <= 29.9){
    document.getElementById("KQ").innerHTML='Thừa cân';   
    }
    else if(x >= 30 && x <= 34.9){
        if(Tuoi =="Trung niên")
          document.getElementById("KQ").innerHTML='Béo phì cấp độ I <br/> Khám định kì';
        else
          document.getElementById("KQ").innerHTML='Béo phì cấp độ I';    
    }
    else if(x>= 35 && x <= 39.9){
        if(Tuoi == "Trung niên" || Tuoi =="Già lớn tuổi")
        document.getElementById("KQ").innerHTML='Béo phì cấp độ II <br/> Tập thể dục thường xuyên';
    }
    else if(x>=40){
        if(Tuoi == "Già, lớn tuổi")
        document.getElementById("KQ").innerHTML='Béo phì cấp độ III <br/> Hạn chế ăn mỡ động vật';
        else
        document.getElementById("KQ").innerHTML='Béo phì cấp độ III';
    }
    // var object = {
    //      cnang: cnang,
    //      ccao: ccao,
    //      x:x,
    //      GPT: function(x){
    //          if(x == 18,5){
    //          return 'Dưới Chuẩn';
    //          }
    //          else if(x == 20){
    //             console.log('Bình thường');
    //              return 'Bình thường';
    //          }
    //          else if(x >= 25 && x <= 29.9){
    //              return 'thừa cân';
    //          }
    //          else if(x >= 30 && x <= 34.9){
    //              return 'béo phì cấp độ I ';
    //          }
    //          else if(x >= 35 && x <= 39.9){
    //              return 'béo phì cấp độ II';
    //          }
    //          else if(x >= 40){
    //              return 'béo phì cấp độ III + "\n" + Hạn chế ăn mỡ động vật';
    //          }
    //      } 
    // }
    
}