var x = 0;
var target = "dahil";

function compare()
{
    word = document.getElementById("word");
    word = word.value;
    if(word.length != 5)
    {
        alert("5 harfli kelime yaz!!! Berat ın BİR RİCASIDIR MUCK");
        return true;
    }
    list = [];
    for(var i = 0; i < 5; i++)
    {
        for(var j = 0; j < 5; j++)
        {
            for(var y = 0; y < list.length; y++)
            {
                if(j == list[y])
                {
                    var cont = true;
                }
            }
            if(cont == true)
            {
                cont = false;
                continue;
            }
            if(word[i] == target[j] && i==j)
            {
                color = "lightgreen";
                list.push(j);
                break;
            }
            else if(word[i] == target[j])
            {
                color = "orange";
                list.push(j);
                break;
            }
            else
            {
                color = "red";
            }
        }
        document.getElementById("tahmin").innerHTML += "<font style='color: " + color + "; font-size: 25px;'>" + word[i] + "</font>";
    }
    document.getElementById("tahmin").innerHTML += "<br>";
    x += 1;
    if(x == 1)
    {
        document.getElementById("hak").innerHTML = 6-x + " Biraz daha düşün ";
    }
    if(x == 2)
    {
        document.getElementById("hak").innerHTML = 6-x + " Mantıklı şeyler yaz ";
    }
    if(x == 3)
    {
        document.getElementById("hak").innerHTML = 6-x + " bak naneyi yicen ha ";
    }
    if(x == 4)
    {
        document.getElementById("hak").innerHTML = 6-x + " Ramak kaldııı ";
    }
    if(x == 5)
    {
        document.getElementById("hak").innerHTML = 6-x + " AHA NANEYİ YEDİN MUCK ";
    }
    if(x == 6)
    {
       alert("Bilemedin!!\nKelime: " + target);
    }
}