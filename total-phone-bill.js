function totalPhoneBill(phoneBill){
    var count = 0;
    var itemBill = phoneBill.split(",")
    for (var i=0 ; i<itemBill.length;i++){
      var bills = itemBill[i].trim()
      if (bills.startsWith("call")){
        count = count + 2.75
      }
      else { count = count + 0.65
      }
    }
    return "R"+count.toFixed(2);
  }