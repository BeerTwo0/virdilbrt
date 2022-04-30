var x = 0;
var target = "beratım";

function compare()
{
    word = document.getElementById("word");
    word = word.value;
    if(word.length != 7)
    {
        alert("7 harfli kelime yaz!!! Berat ın BİR RİCASIDIR MUCK");
        return true;
    }
    list = [];
    for(var i = 0; i < 7; i++)
    {
        for(var j = 0; j < 7; j++)
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
                color = "black";
            }
        }
        document.getElementById("tahmin").innerHTML += "<font style='color: " + color + "; font-size: 25px;'>" + word[i] + "</font>";
    }
    document.getElementById("tahmin").innerHTML += "<br>";
    x += 1;
    if(x == 2)
    {
        document.getElementById("hak").innerHTML = 7-x + " Biraz daha düşün ";
    }
    if(x == 3)
    {
        document.getElementById("hak").innerHTML = 7-x + " Canım dikkatlı ol ";
    }
    if(x == 4)
    {
        document.getElementById("hak").innerHTML = 7-x + " OLm gidio haklar ";
    }
    if(x == 5)
    {
        document.getElementById("hak").innerHTML = 7-x + " LAĞNNNN DüşüNSENE HIYAR MSIIN ";
    }
    if(x == 6)
    {
        document.getElementById("hak").innerHTML = 7-x + " NANEYİ YEdiN MUCK ";
    }
    if(x == 7)
    {
       alert("Bilemedin!!\nKelime: " + target);
    }
}