document.getElementById('alakit')
    .addEventListener( 'click', () => {

        let text = document.forms['feladat1']['text'].value
        let lower = document.forms['feladat1']['radio'].value;
        let upper = document.forms['feladat1']['radio'].value;

        if(text === ''){
            alert("A szöveg rész kitöltése kötelező!")
        }
        else if (lower == "lower"){
            alert(text.toLowerCase())
        }
        else if (upper == "upper"){
            alert(text.toUpperCase())
        }
        else if (lower != "lower" && upper != "upper"){
            alert("Válassza ki, hogy kis- vagy nagybetűs legyen a szöveg!")
        }
    })