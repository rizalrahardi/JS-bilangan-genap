// program bilangan genap
let genap = () => {
    for(let angka = 1; angka <=50; angka++) {
        if ((angka%2)==0){
            console.log(angka);
            document.write(angka + ` adalah bilangan genap<br>`);
        }
    }
}
genap();